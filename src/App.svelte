<script>
    import { writable, readable } from 'svelte/store';
    import {elementsById, hoveredElement, selectedElement} from './stores.js'

    import Table from './Table.svelte';
    import TableFilters from './TableFilters.svelte';
    import ElementInfo from './ElementInfo.svelte';


    let darkTheme = false
    let tmpTable = [];
    let tmpTableById = [];
    const lanthanides = [58,59,60,61,62,63,64,65,66,67,68,69,70,71]
    const actinides   = [90,91,92,93,94,95,96,97,98,99,100,101,102,103]

    function toggleTheme() {
        darkTheme = !Boolean(darkTheme)
    }
    // Grid 18 columns * 7 rows   +  lanthanides/actinides : 15 * 2  (1 row of separation)
    for (var i = 0; i <= 11; i++) {
        tmpTable[i] = Array(18);
    }

    function readElements(json) {
        for (let el of json) {
            tmpTableById[el._id["$oid"]] = el;
            if ("periodic_table" in el) {
                let col = el.periodic_table.group;
                let row = el.periodic_table.period;
                if (el.atomic.number >= 58 && el.atomic.number <= 71) {
                    row = 9
                    col = lanthanides.indexOf(el.atomic.number) + 4 ;
                }
                if (el.atomic.number >= 90 && el.atomic.number <= 103) {
                    row = 10
                    col = actinides.indexOf(el.atomic.number) + 4;
                }
                el.filtered = false;
                tmpTable[row-1][col-1] = el;
                // console.log(el.name, el.periodic_table.period,"=", col, el.periodic_table.group);
            } else {
                console.log(el.name+"has no periodic_table property !!!");
            }
        }
        return tmpTable;
    }

    $elementsById = tmpTableById

    $: document.body.classList.toggle('darkTheme', darkTheme);
</script>


<main>
    <header>
        <h1>Periodic Table of Elements <sub>(WIP)</sub></h1>
        <button on:click={toggleTheme}><span><b>o</b></span></button>
    </header>
    {#await fetch('/elements.json')}
        <p>...downloading...</p>
    {:then response}
        {#await response.json()}
            <p>...processing...</p>
        {:then json}
            <Table elements={readElements(json)}/>
        {/await}
    {:catch error}
        <p>We had a boohoo :    {error.message}</p>
    {/await}
</main>
<TableFilters />
<section>
    <ElementInfo element={$elementsById[$hoveredElement]} placeholder="the infos of the hovered element" />
    <ElementInfo element={$elementsById[$selectedElement] ||{}} placeholder="click an element to set as reference for comparison" />
</section>
<footer>Made by <a href="https://github.com/dallgoot" target="_blank">Dallgoot</a> - Powered by <a href="https://svelte.dev/" target="_blank">Svelte</a></footer>


<style type="text/stylus">
@import "/global.css"
main
    grid-area tab
    overflow hidden
    text-align center
    display grid
    grid-template 1em 100%
    padding 0 1em 1em 1em
    background-color var(--main-background)
    transition background-color 800ms ease

header
    margin-bottom 1em
    h1
        color: var(--title-color);
        font-size 3em;
        font-family 'Patua One', cursive;
        font-weight normal;
        text-shadow 1px 0px 10px currentColor
        display inline-block
        width 95%

    button
        padding 0
        position relative
        margin-right -1em
        width 4em
        height 2em
        border 2px solid var(--accent-color)
        border-radius 2em

        cursor pointer
        background-color var(--main-background)
        transition background-color 800ms ease
        overflow hidden

        color var(--accent-color)
        display block
        body.darkTheme & span
            transform translateX(-32%)
        span
            width 150%
            transition transform 300ms ease
            transform translateX(0%)
            display inline-flex
            gap 0.6em
            b
                border-radius 1.5em
                background-color var(--accent-color)
                width 30%
            & > *
                display inline-block
                line-height 1.2em
                height inherit
            &:before, &:after
                display flex
                align-items center
                align-content center
                font-family 'Font Awesome 5 Free'
                font-size 1.25em
                transition transform 800ms ease
                position relative
                width 30%
            &:before
                content "\f186"
                left 0.2em
            &:after
                content "\f185"
                left  -0.15em
            

section {
    grid-area: inf;
    background-color: var(--main-background)
    border-top 2px solid var(--accent-color)
    transition background-color 800ms ease
    // background-color: darken(@background-color, 50%)
    display: inline-grid;
    grid-template: "hover selected" auto;
    grid-gap: 0;
}
section > section:first-child {
    grid-area: hover;
    grid-column: 1;
}
section > section:nth-child(2) {
    grid-area: selected;
    grid-column: 2;
}
body > aside:first-child {
    grid-area: filtered;
}
footer
    background-color var(--main-background)
    transition background-color 800ms ease
    box-sizing: content-box;
    border-top 2px solid var(--accent-color)
    grid-area: footer;
    text-align: center;
    font-size: 1.2em;

    color: var(--commontext-color);
    line-height 100%
    padding  0.25em 0
    a
        font-size inherit

</style>
