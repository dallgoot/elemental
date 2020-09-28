<script>
    import { addedFilters } from './stores.js';
    import Filter from './Filter.svelte'

</script>



<aside>
<h2>Use filter(s) to highlight element(s) with specific property</h2>
<br />
    <Filter name="name" value="" />
    {#each $addedFilters as f}
        <Filter name="{f.name}" value="{f.value}" />
    {/each}
</aside>



<style type="text/stylus">
    aside
        overflow-y scroll
        background-color var(--main-background)
        transition background-color 800ms ease
    h2
        transition color 800ms ease
        color var(--accent-color)
        font-size 2em
</style>