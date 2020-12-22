<script lang="ts">
    import { selectedElement } from '../stores';

    import type { Elemental } from '../types/common/elemental';
    import { getMass, notDisplayedProperties } from "../global";

    import PropList from './PropList.svelte';

    // let element: Elemental;


    function cleanElement(element) {
        let filtered = Object.assign({}, element);
        notDisplayedProperties.forEach((v) => {
         delete filtered[v];
        });
        return filtered;
    }

</script>

<div class:empty={$selectedElement === null}>
    {#if $selectedElement === null}
        <slot />
    {:else}
        <article>
            <span class="protons">{$selectedElement.atomic.number}</span>
            <strong>{$selectedElement.symbol || $selectedElement.name.substring(0,2)}</strong>
            <span class="name">{$selectedElement.name}</span>
            <span class="mass">{getMass($selectedElement)}</span>
        </article>
        <section>
            <PropList list={cleanElement($selectedElement)} />
        </section>
    {/if}
</div>

<style type="text/stylus">

div
    width 30%
    grid-area: info;
    padding 1em
    &.empty
        display flex
        text-align center
        align-items  center
        align-content: center;
    display: flex;
    flex-flow column
    grid-gap 0;
    align-content: center;
    border-top 2px solid var(--accent-color)
    padding-left 0.5em
    padding-top 0.5em
    overflow-y auto
    color var(--commontext-color)
    transition color 800ms ease
    font-size 1.1em
    vertical-align top
    text-align center


div article {
    border: 1px solid var(--accent-color);
    border-radius: 15px;
    width:10em;
    height:10em;
    text-align: center;
    box-shadow: 1px 0px 5px 0px #777,inset 0px -15px 30px 0px rgba(100,100,100,0.75);
    display: inline-block;
    margin: 1em auto;
}
div article span.protons {
    float:left;
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