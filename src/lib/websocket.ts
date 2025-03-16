import { writable } from "svelte/store";
import { browser } from "$app/environment"; // Detect if running in browser
import { controlStore } from "./stores/controls";

let socket: WebSocket | null = null;
//const listeners = new Set<(message: string) => void>();

export const websockLast = writable({
  lastSent: null as string | null,
  lastReceived: null as string | null,
});

export function connectWebSocket(): void {
  if (!browser) return; // Ensure it only runs in the browser
  if (socket) return; // Prevent duplicate connections

  const protocol = window.location.protocol === "https:" ? "wss" : "ws";
  const host = window.location.hostname; // Same host as the app
  //uhm - when dev, same ip but different port..
  const url = `${protocol}://${host}:18080/ws`;

  socket = new WebSocket(url);

  socket.onopen = () => console.log("WebSocket connected to", url);
 
  socket.onopen = () => console.log("WebSocket connected");

  socket.onmessage = (event: MessageEvent) => {
    websockLast.update(ws => ({ ...ws, lastReceived: event.data }));
    //route to id if it exists..
    const message = event.data.trim(); // Ensure no extra spaces

    if (message.startsWith("0x90") || message.startsWith("0x80")) {
      const noteHex = message.substring(4, 6); // Extract note value (e.g., "3C")
      const isNoteOn = message.startsWith("0x90"); // Check if it's Note On or Off
      const keyElement = document.getElementById(`key_${noteHex.toUpperCase()}`); // Convert to uppercase for consistency

      if (keyElement) {
        if (isNoteOn) {
          console.log("pressing..");
          keyElement.classList.add("pressed");
        } else {
          keyElement.classList.remove("pressed");
        }
      }
    }
    if (message.startsWith("0xB0")) {
      //oops. now it's the other way around. i need to access the vue-instance..
      const ccNumber = message.substring(4, 6);
      const ccValue = parseInt(message.substring(6, 8), 16);
      //mountedApp.cc_10 = ccValue;
      const ccProperty = `cc_${ccNumber}`;
      // Use update() to modify the store
      controlStore.update(store => {
        return { ...store, [ccProperty]: ccValue };
      });
    }
  };
}

// Send a message through the WebSocket connection
export function sendMessage(message: string): void {
  if (socket && socket.readyState === WebSocket.OPEN) {
    websockLast.update(ws => ({ ...ws, lastSent: message }));
    socket.send(message);
  } else {
    console.warn("WebSocket is not open. Message not sent:", message);
  }
}

// Disconnect the WebSocket connection
export function disconnectWebSocket(): void {
  if (socket) {
    socket.close();
    socket = null;
  }
}

// Add a listener for incoming messages
export function addMessageListener(callback: (message: string) => void): void {
  //yeah idunno..
  //listeners.add(callback);
}
