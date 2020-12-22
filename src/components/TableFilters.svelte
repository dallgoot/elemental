<script lang="ts">
    import {addedFilters} from '../stores';
    import Filter from './Filter.svelte';

</script>



<aside class="elementProperties">
    <h2>Use filter(s) to highlight element(s) with specific property</h2>
    <br />
    <Filter name="name" removable={false}/>
    {#each $addedFilters as f}
        <Filter name="{f.name}" />
    {/each}
</aside>



<style lang="stylus">
aside.elementProperties
    grid-area: filters;
    overflow-y scroll
    h2
        transition color 800ms ease
        color var(--accent-color)
        font-size 2em
</style>