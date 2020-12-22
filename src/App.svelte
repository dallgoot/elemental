<script lang="ts">
    import type { Elemental } from './types/common/elemental';

    import {elementStore} from './stores'

    import Table from './components/Table.svelte';
    import TableFilters from './components/TableFilters.svelte';
    import ElementInfo from './components/ElementInfo.svelte';
    import Header from './components/Header.svelte'
    import Footer from './components/Footer.svelte'

    
    const lanthanidesOffset = 5;
    const lanthanides: number[] = [58,59,60,61,62,63,64,65,66,67,68,69,70,71]
    const actinides: number[]   = [90,91,92,93,94,95,96,97,98,99,100,101,102,103]
    
    
    function readElements(json:Array<Elemental>): void {
        let tmpTable:Array<Array<Elemental>> = [];
        // Grid 18 columns * 7 rows   +  lanthanides/actinides : 15 * 2  (1 row of separation)
        for (var i = 0; i <= 11; i++) {
            tmpTable[i] = Array(18);
        }
        for (let el of json) {
            el.id = el._id["$oid"];
            let col = el.periodic_table.group;
            let row = el.periodic_table.period;
            if (el.atomic.number >= 58 && el.atomic.number <= 71) {
                row = 9
                col = lanthanides.indexOf(el.atomic.number) + lanthanidesOffset ;
            }
            if (el.atomic.number >= 90 && el.atomic.number <= 103) {
                row = 10
                col = actinides.indexOf(el.atomic.number) + lanthanidesOffset;
            }
            tmpTable[row-1][col-1] = el;
        }
        elementStore.set(tmpTable);
    }

</script>


<Header />
<main>
    {#await fetch('/elements.json')}
        <p>...downloading...</p>
    {:then response}
        {#await response.json()}
            <p>...processing...</p>
        {:then json }
            {#await readElements(json) }
                <p>...building Table...</p>
            {:then nothing}
            <div>
                <Table />
                <TableFilters />
            </div>
            <ElementInfo><h2>click an element to set as reference for comparison</h2></ElementInfo>
            {/await}
        {/await}
    {:catch error}
        <p>We had a boohoo :    {error.message}</p>
    {/await}
</main>
<Footer />


<style lang="stylus">

main
    display flex
    overflow hidden
    grid-template-areas
        "table table info"
        "table table info"
        "filters filters info";
    grid-template-columns: 1fr 1fr 30%;
    grid-template-rows: 1fr 1fr 30%;
    div
        width 70%

</style>
