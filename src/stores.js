import { writable } from "svelte/store";

export let windowSize = writable(0)
export let scrolled = writable(0)