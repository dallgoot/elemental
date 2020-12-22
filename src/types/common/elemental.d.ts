enum Temperature {
    Celsius,
    Faremnheit,
    Kelvin
}
enum Units {
  ionisation   = "kJ/mol",
  temperature  = Temperature,
  conductivity = "W/(m·K)",
  molar_heat   = "J/(mol·K)",
  vaporization = "kJ/mol"
}

// export class Mesure {
//     value: number;
//     unity?: string;
// }

class ElementId { 
    $oid: string;
}
class ElementAtomic {
    covalent_radius: string;
    number?: number;
}
class ElementPeriodic {
    period: number;
    category: string; 
    group: number;
    block: string;
}
class ElementDensity {stp: [number, Units];}
class ElementHistory {
    named_by?: string;
    discovery?: string;}
class ElementIdentiy {
    cas: string;
    pronunciation:string;
}
class ElementElectronic {
    configuration:"[ Rn ] 6d 1 7s 2"; // shoud be array ?
    shells: Array<number>;
    ionisation:["1st: 499 kJ/mol","2nd: 1170 kJ/mol","3rd: 1900 kJ/mol"]; // object or array with unity ?
    negativity: [number, Units];//"Pauling scale: 1.1";
}
class ElementCristallography {structure:​ string;} // provide the different values
class ElementThermodynamics {
    boiling: [number, Units] | Array<[number, Units]>;//"3500±300 K ​(3200±300 °C, ​5800±500 °F) (extrapolated)";
    conductivity: [number, Units];//"12 W/(m·K)";
    enthalpy:[number, Units];//"14 kJ/mol";
    melting: [number, Units] | Array<[number, Units]>;//"1500 K ​(1227 °C, ​2240 °F) (estimated)";
    molar_heat: [number, Units];//"27.2 J/(mol·K)";
    phase: string; //provide different values
    vaporization:[number, Units];//"400 kJ/mol";
}
class ElementChemical {
    oxydation_states:"+2, +3 (a strongly basic oxide)"
}
class ElementAvailability {surface: string}
class ElementMechanical {
    mass:number;//"227 (most stable isotope)"
}
    
export class Elemental extends ArrayLike{
    _id: ElementId;
    id: string;
    name: string;
    symbol: string;
    filtered?: false;
    atomic?: ElementAtomic;
    periodic_table: ElementPeriodic;
    density: ElementDensity;
    history: ElementHistory;
    identity: ElementIdentiy;
    electronic: ElementElectronic;
    crystallography: ElementCristallography;
    thermodynamics: ElementThermodynamics;
    appearance?: string;
    chemical: ElementChemical;
    availability: {surface: string};
    mechanical: ElementMechanical;
}
