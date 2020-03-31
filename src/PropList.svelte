<script>
    import { addedFilters } from './stores.js';
    export let list = {};

    export let parentProp = '';
    function filterOnClick(propertyName, propValue) {
        let fullnameProp = `${parentProp}.${propertyName}`.replace(/^\./gm,'')
        // alert(fullnameProp)
        $addedFilters[$addedFilters.length] = {'name': fullnameProp, 'value': propValue}
    }
</script>

{#if Object.keys(list).length }
    {#each Object.keys(list).sort() as prop}
        {#if typeof list[prop] === 'object'}
            <details>
                <summary>{prop}</summary>
                <p><svelte:self list={list[prop]} parentProp={`${parentProp}.${prop}`}/></p>
            </details>
        {:else}
            <label>{prop}<span>{list[prop]}</span>
                {#if prop !== "appearance"}
                    <button title="filter by '{prop}'" class="filter" on:click="{() =>filterOnClick(prop, list[prop])}"></button>
                {/if}
            </label>
        {/if}
    {/each}
{/if}


<style type="text/stylus">
@import "../public/global.css"
/*details[open] details{
    border-left: 2px solid #000;
    padding-left: 0.25em;
}*/
details  {
    background-color: transparent;
    font-size inherit
}
details[open|=""] p {
    background-color: #bbc;
}
summary,label {
    font-weight: 500;
    cursor: pointer;
    border-top: 1px solid var(--accent-color);
    color: var(--commontext-color);
    transition color 800ms ease
    line-height: 1.6em;
    font-size inherit
}
summary:hover {
    transition: color 0.8s;
    color: var(--accent-color);
}
label {
    display: block;
    cursor: default;
    font-size inherit
    font-weight 600
}
label span:first-child:before {
    content:" : ";
}
label span {
    font-weight: normal;
    text-align: right;
    font-size inherit
}

label button.filter {
    font-family: 'Font Awesome 5 Free'
    color var(--accent-color)
    cursor: pointer;
    float:right;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    padding 0
    // margin  0.25em 0 0 0
    margin  0
    // border: 1px solid #777;
    text-align: center;
    vertical-align: middle;
    // line-height: 1.8em
}
p {
    padding-left: 0.25em;
}
</style>
