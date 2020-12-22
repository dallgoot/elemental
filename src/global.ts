    import type { Elemental } from './types/common/elemental';


    export const notDisplayedProperties = ["_id", "name", 'symbol', 'filtered'];


    export const filterFunctions = { "name" : function (elementValue, filterValue):boolean {
                        return elementValue.indexOf(filterValue) === -1;
                        },
                    "periodic_table" : {
                        "group" : function (elementValue, filterValue):boolean {
                            return elementValue != filterValue;
                        }
                    }
    };

    export function getMass(element:Elemental): number | string {
          if ("mechanical" in element && "mass" in element.mechanical) {
            return element.mechanical.mass;
          }
          return "?";
    }