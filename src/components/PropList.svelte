<script lang="ts">
    import { addedFilters } from '../stores';

    export let list = {};
    export let parentProp = '';
    let spanClicked = false;

    function filterOnClick(propertyName, propValue) {
        let fullnameProp = `${parentProp}.${propertyName}`.replace(/^\./gm,'')
        // alert(fullnameProp)
        let filter = {'name': fullnameProp, 'value': propValue};
        $addedFilters = [filter, ...$addedFilters]
    }
    function toggleSpan() {
        console.log('toggle')
        spanClicked = !spanClicked
    }
</script>

{#if Object.keys(list).length }
<ul class="props">
    {#each Object.keys(list).sort() as prop}
    <li>
        <strong on:click={toggleSpan}>{prop}</strong>
        {#if typeof list[prop] === 'object'}
            <svelte:self list={list[prop]} parentProp={`${parentProp}.${prop}`} />
        {:else}
            <span class:toggled={spanClicked} on:click="{toggleSpan}">{list[prop]}
            {#if prop !== "appearance"}
                <button title="filter by '{prop}'" class="filter fas fa-filter" on:click="{() =>filterOnClick(prop, list[prop])}"></button>
            {/if}
            </span>
        {/if}
    </li>
    {/each}
</ul>
{/if}


<style lang="stylus">

.props
    font-size inherit
    display flex
    flex-flow column
    list-style none
    align-content center

    li
        width 100%
        display: inline-grid;
        grid-template-columns: 10em auto;
        & > span.toggled 
            display auto
        &:nth-child(even)
            background: linear-gradient(0deg, rgba(239,244,250,0.4) 0%, rgba(255,255,255,0.25) 25%, rgba(226,236,246,0.6) 100%);
        strong
            width 10em 
            padding 0.2em 0.5em
            line-height 1.6em
            font-weight normal
            cursor pointer
            color var(--commontext-color)
            transition color 800ms ease
            font-size inherit
            &:hover
                transition: color 0.8s
                color var(--accent-color)
        span
            vertical-align center
            text-align right
    
strong
    cursor default
    font-size inherit
    font-weight 600

button.filter
    font-family 'Font Awesome 5 Free'
    // content '\uf0b0'
    color var(--accent-color)
    cursor pointer
    width 1.5em
    height 1.5em
    padding 0
    margin  0
    text-align center
    vertical-align middle

</style>
