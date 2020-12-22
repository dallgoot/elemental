
import { writable, readable } from 'svelte/store';
import type { Elemental } from './types/common/elemental';



export let elementsById = writable({});

export let selectedElement = writable<Elemental>(null);

export let addedFilters = writable<Array<Function>>([]);

export let elementStore =  writable<Array<Array<Elemental>>>([]);