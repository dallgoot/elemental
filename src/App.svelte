<script>
    import Table from './Table.svelte';
    import TableFilters from './TableFilters.svelte';
    import ElementInfo from './ElementInfo.svelte';
    import { table } from './stores.js'

    import { selectedElement, hoveredElement } from './stores.js';

    export let elementsById = {};
    export let elementsList = [];

    $table = elementsList

    $: elementHovered  = elementsById[$hoveredElement]
    $: elementSelected = elementsById[$selectedElement]

    let darkTheme = false

    function changeTheme() {
        darkTheme = !Boolean(darkTheme)
    }
</script>


<main class:darkTheme>
    <header>
        <h1>Periodic Table of Elements</h1>
        <button on:click={changeTheme}><span></span></button>
    </header>

    <Table />
</main>
<aside class:darkTheme>
    <ElementInfo element={elementHovered}>
        <h2>the infos of the hovered element</h2>
    </ElementInfo>
    <ElementInfo element={elementSelected}>
        <h2>click an element to set as reference for comparison</h2>
    </ElementInfo>
</aside>
<TableFilters darkTheme={darkTheme}/>
<footer class:darkTheme>Made by <a href="https://github.com/dallgoot">Dallgoot</a> - Powered by <a href="https://svelte.dev/">Svelte</a></footer>


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
        font-size: 3em;
        font-family: 'Patua One', cursive;
        font-weight: normal;
        text-shadow 1px 0px 10px currentColor
        display inline-block
        width 95%

    button
        text-align left
        display inline-block
        position relative
        margin-right -1em
        width 4em
        height 2em
        border 2px solid var(--accent-color)
        border-radius 2em
        padding 0 0.4em
        cursor pointer
        background-color var(--main-background)
        transition background-color 800ms ease
        overflow hidden
        word-wrap: normal

        color var(--accent-color)
        vertical-align: middle;
        span
            vertical-align: top;
            &:before
                font-family: 'Font Awesome 5 Free'
                content: "\f186";
                margin-left: -1.60em;
            &:after
                font-family: 'Font Awesome 5 Free'
                content: "\f185";
                margin-left: 2.75em;
            clear both
            display inline-block
            line-height 1.50em
            width 55%
            height 90%
            transition transform 300ms ease
            display inline-block
            content "o"
            border-radius 1.5em
            background-color var(--accent-color)
            transform translateX(100%)
            main.darkTheme &
                transform translateX(-17%)

aside {
    grid-area: inf;
    background-color: var(--main-background)
    transition background-color 800ms ease
    // background-color: darken(@background-color, 50%)
    display: inline-grid;
    grid-template: "hover selected" 5em;
    grid-gap: 0;
}
aside > section:first-child {
    grid-area: hover;
    grid-column: 1;
}
aside > section:nth-child(2) {
    grid-area: selected;
    grid-column: 2;
}
body > section:first-child {
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
    height: 3em;
    color: var(--commontext-color);
    line-height 100%
    padding-top  0.5em
    a
        font-size inherit

</style>
