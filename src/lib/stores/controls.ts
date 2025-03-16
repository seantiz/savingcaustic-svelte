import { writable } from "svelte/store";

export const controlStore = writable<Record<string, number>>({});
