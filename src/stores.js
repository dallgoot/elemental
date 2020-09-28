    import { writable, readable } from 'svelte/store';

    export let elementsById = writable({});

    export let selectedElement = writable(0);
    export let hoveredElement = writable(0);


    export let addedFilters = writable([]);


    export const notDisplayedProperties = readable(["_id", "name", 'symbol', 'filtered']);






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