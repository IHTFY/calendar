import { writable } from 'svelte/store';

export const database = writable([]);

export const currentEvent = writable({});