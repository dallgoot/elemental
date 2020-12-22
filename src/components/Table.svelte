<script lang='ts'>
import type { Elemental } from '../types/common/elemental';
import { elementStore } from '../stores';
import Element from './Element.svelte';

</script>


<div class="table">
    {#each $elementStore as row, r}
        {#each row as element, i ("row"+i)}
            {#if element === undefined}
                <section class="empty">&nbsp;</section>
            {:else}
                <Element {element}/>
            {/if}
        {/each}
    {/each}
</div>


<style lang="stylus">
div.table
    display: grid;
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    grid-gap: 3px;
    padding 1em
    section
        background: none;
        box-shadow: none;
        transform:none;
        cursor: default;
        border:none;
        z-index: -1;

</style>