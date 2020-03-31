<script>
//    import { selectedElement } from './stores.js';
    import Element from './Element.svelte';
    import {table} from './stores.js'

    function getMass(element) {
        if ("atomic" in element && 'weight' in element.atomic) {
            return parseInt(element.atomic.weight);
        }
        return '?';
    }
</script>


<div>
    {#each $table as row, r}
        {#each row as element, i ("id" + r + i)}
            {#if element === undefined}
                <section class="empty"></section>
            {:else}
                <Element protons={element.atomic.number}
                         symbol={element.symbol || element.name.substring(0,2)}
                         name={element.name}
                         mass={getMass(element)}
                         id={element._id["$oid"]}
                         filtered={element.filtered}/>
            {/if}
        {/each}
    {/each}
</div>


<style>
div {
    display: inline-grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-gap: 1px;
}
div section.empty, div section.empty:hover {
    background: none;
    box-shadow: none;
    transform:none;
    cursor: default;
    border:none;
    z-index: -1;
}
</style>