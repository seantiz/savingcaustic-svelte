import { writable } from "svelte/store";

export const websocketStore = writable({
  lastSent: null as string | null,
  lastReceived: null as string | null,
});
