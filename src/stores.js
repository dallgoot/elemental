    import { writable, readable } from 'svelte/store';

    export let selectedElement = writable(false);

    export let hoveredElement = writable(false);

    export let addedFilters = writable([]);

    export let table = writable([]);

    const filters = { "name" : function (elementValue, filterValue) {
                        return elementValue.indexOf(filterValue) === -1;
                        },
                    "periodic_table" : {
                        "group" : function (elementValue, filterValue) {
                            return elementValue != filterValue;
                        }
                    }
    };

    export let filterFunction = readable(filters);

    export function getMass(element) {
          if ("mechanical" in element && "mass" in element.mechanical) {
            return parseInt(element.mechanical.mass);
          }
          return "?";
        }