import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { controlStore } from "./stores/controls";

let socket: WebSocket | null = null;

export const websockLast = writable({
    lastSent: null as string | null,
    lastReceived: null as string | null,
});

// Store all callbacks in an array for now - simplest hack I could find for addMessageListener()
const allListeners: ((message: string) => string)[] = [];

// Call all listeners
export function connectWebSocket(): void {
    if (!browser) return;
    if (socket) return; // Prevent duplicate connections
    const protocol = window.location.protocol === "https:" ? "wss" : "ws";
    const host = window.location.hostname;
    const url = `${protocol}://${host}:18080/ws`;
    socket = new WebSocket(url);
    socket.onopen = () => console.log("WebSocket connected");
    socket.onmessage = (event: MessageEvent) => {
        websockLast.update((ws) => ({ ...ws, lastReceived: event.data }));

        let message = event.data.trim();
        if (message.startsWith("0x90") || message.startsWith("0x80")) {
            const noteHex = message.substring(4, 6);
            const isNoteOn = message.startsWith("0x90");
            const keyElement = document.getElementById(`key_${noteHex.toUpperCase()}`);
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
            const ccNumber = message.substring(4, 6);
            const ccValue = parseInt(message.substring(6, 8), 16);
            const ccProperty = `cc_${ccNumber}`;
            controlStore.update((store) => {
                return { ...store, [ccProperty]: ccValue };
            });
        }

        for (const listener of allListeners) {
            listener(event.data);
        }
    };
}

// Send a message through the WebSocket connection
export function sendMessage(message: string): void {
    if (socket && socket.readyState === WebSocket.OPEN) {
        websockLast.update((ws) => ({ ...ws, lastSent: message }));
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

/* A bit hacky from me - Used "any" as the return type to satisy Typescript
We're not bothered about the return - we only care that the setter does its job */
export function addMessageListener(setter: (message: string) => any): void {
    allListeners.push(setter);
}
