<script>
    import { addedFilters } from './stores.js';
    export let list = {};

    export let parentProp = '';
    function filterOnClick(propertyName, propValue) {
        let fullnameProp = `${parentProp}.${propertyName}`.replace(/^\./gm,'')
        // alert(fullnameProp)
        $addedFilters[$addedFilters.length] = {'name': fullnameProp, 'value': propValue}
    }
    let spanClicked = false
    function toggleSpan() {
        console.log('toggle')
        spanClicked = !spanClicked
    }
</script>

{#if Object.keys(list).length }
    <ul>
        {#each Object.keys(list).sort() as prop}
        <li>
            <strong on:click={toggleSpan}>{prop}</strong>
            {#if typeof list[prop] === 'object'}
                <svelte:self list={list[prop]} parentProp={`${parentProp}.${prop}`}/>
            {:else}
                <span class:toggled={spanClicked}>{list[prop]}</span>
                {#if prop !== "appearance"}
                    <button title="filter by '{prop}'" class="filter" on:click="{() =>filterOnClick(prop, list[prop])}"></button>
                {/if}
            {/if}
        </li>
        {/each}
    </ul>
{/if}


<style type="text/stylus">
@import "../public/global.css";

ul
    font-size inherit
    display inline-flex
    list-style none
    

li
    strong
        display inline-block
        width 100% 
        padding 0.2em 0.5em
        line-height 1.6em
        border 1px solid var(--commontext-color)
        font-weight normal
        cursor pointer
        color var(--commontext-color)
        transition color 800ms ease
        font-size inherit
        &:hover
            transition: color 0.8s
            color var(--accent-color)


li > ul, li > span 
    display none
li > span.toggled 
    display auto

li:hover > ul 
    display flex
    background-color lighter(var(--accent-color))
    
strong
    display inline-block
    cursor default
    font-size inherit
    font-weight 600


button.filter
    font-family 'Font Awesome 5 Free'
    content ''
    color var(--accent-color)
    cursor pointer
    width 1.5em
    height 1.5em
    padding 0
    margin  0
    text-align center
    vertical-align middle

</style>
