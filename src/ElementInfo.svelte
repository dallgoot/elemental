<script>
    import PropList from './PropList.svelte';
    import { getMass } from "./stores.js";
    export let element = {};
    export let placeholder = ""

    const notDisplayedProperties = ["_id","name", 'symbol', 'filtered'];

    function elementFiltered(element) {
        let filtered = Object.assign({}, element);
        notDisplayedProperties.forEach((v) => {
         delete filtered[v];
        });
        return filtered;
    }

</script>

<div class:empty={!Object.keys(element).length}>
    {#if !Object.keys(element).length}
        <h2>{placeholder}</h2>
    {:else}
        <article>
            <span class="protons">{element.atomic.number}</span>
            <strong>{element.symbol || element.name.substring(0,2)}</strong>
            <span class="name">{element.name}</span>
            <span class="mass">{getMass(element)}</span>
        </article>
        <section>
            <PropList list={elementFiltered(element)} />
        </section>
    {/if}
</div>

<style type="text/stylus">
@import "../public/global.css"
div
    &.empty
        display block
        text-align center
    display inline-grid
    grid-template-columns 1fr 8fr
    padding-left 0.5em
    padding-top 0.5em
    overflow-y auto
    height inherit
    grid-row  1 / 2
    color var(--commontext-color)
    transition color 800ms ease
    font-size 1.1em
    vertical-align top
    h2
        display inline
        vertical-align middle

        height 100%
        font-size 2em

div article {
    border: 1px solid var(--accent-color);
    border-radius: 15px;
    width:10em;
    height:10em;
    text-align: center;
    box-shadow: 1px 0px 5px 0px #777,inset 0px -15px 30px 0px rgba(100,100,100,0.75);
    display: inline-block;
    margin: 1em 1em;
}
div article span.protons {
    float:left;
    /*line-height: 1.2rem;*/
    display: inline-block;
    padding: 0.25em;
}
div article strong {
    clear:left;
    font-size:5rem;
    text-transform: capitalize;
    display: block;
    text-shadow: 3px 0px 15px rgba(128,128,128,0.75);
    font-family: 'Patua One', cursive;
    line-height: 0.8em;
}
div article span.name {
    margin-top 0.5em
    font-size 1.5rem
    display: block
}
div article span.mass {
    display: block;
    font-size:0.7rem;
}
div section
    display inline-block

</style>