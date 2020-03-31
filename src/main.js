import App from './App.svelte';
import elements from './elements.json';



// Grid 18 columns * 7 rows   +  lanthanides/actinides : 15 * 2  (1 row of separation)
let table = [];
let elementsById = {};
for (var i = 0; i <= 11; i++) {
    table[i] = Array(18);
}
for (let e in elements) {
    let el = elements[e];
    elementsById[el._id["$oid"]] = el;
    if ("periodic_table" in el) {
        let ptable = el.periodic_table;
        let col = ptable.group;
        let row = ptable.period;
        if (el.atomic.number >= 58 && el.atomic.number <= 71) {
            row = 9
            col = [58,59,60,61,62,63,64,65,66,67,68,69,70,71].indexOf(el.atomic.number) + 4 ;
        }
        if (el.atomic.number >= 90 && el.atomic.number <= 103) {
            row = 10
            col = [90,91,92,93,94,95,96,97,98,99,100,101,102,103].indexOf(el.atomic.number) + 4;
        }
        el.filtered = false;
        table[row-1][col-1] = el;
        // console.log(el.name, ptable.period,"=", col, ptable.group);
    } else {
        console.log(el.name+"has no periodic_table property !!!");
    }
}

const app = new App({
	target: document.body,
	props: {
		// table: table,
        elementsList: table,
        elementsById: elementsById
	}
});

export default app;