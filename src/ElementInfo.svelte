<script>
    import PropList from './PropList.svelte';
    export let element = {};

    const notDisplayedProperties = ["_id","name", 'symbol', 'filtered'];

    function elementFiltered(element) {
        let filtered = Object.assign({}, element);
        notDisplayedProperties.forEach((v) => {
         delete filtered[v];
        });
        return filtered;
    }
    function getMass(element) {
        if ("mechanical" in element && 'mass' in element.mechanical) {
            return parseInt(element.mechanical.mass);
        }
        return '?';
    }
</script>

<section>
    {#if Object.keys(element).length}
        <article>
            <span class="protons">{element.atomic.number}</span>
            <strong>{element.symbol || element.name.substring(0,2)}</strong>
            <span class="name">{element.name}</span>
            <span class="mass">{getMass(element)}</span>
        </article>
        <PropList list={elementFiltered(element)} />
    {:else}
        <slot />
    {/if}
</section>

<style type="text/stylus">
@import "../public/global.css"
section
    padding-left 0.5em
    overflow-y auto
    height inherit
    grid-row  1 / 5
    color var(--commontext-color)
    transition color 800ms ease
    font-size 1.1em

section h2 {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height:100%;
}
section article {
    border: 1px solid var(--accent-color);
    border-radius: 15px;
    width:10em;
    height:10em;
    text-align: center;
    box-shadow: 1px 0px 5px 0px #777,inset 0px -15px 30px 0px rgba(100,100,100,0.75);
    display: block;
    margin: 1em 4.5em;
}
section article span.protons {
    float:left;
    /*line-height: 1.2rem;*/
    display: inline-block;
    padding: 0.25em;
}
section article strong {
    clear:left;
    font-size:5rem;
    text-transform: capitalize;
    display: block;
    text-shadow: 3px 0px 15px rgba(128,128,128,0.75);
    font-family: 'Patua One', cursive;
    line-height: 0.8em;
}
section article span.name {
    margin-top 0.5em
    font-size:1.5rem;
    display: block;
}
section article span.mass {
    display: block;
    font-size:0.7rem;
}
</style>