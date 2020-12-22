<script lang="ts">
    import { addedFilters, selectedElement } from '../stores';
    import {fly} from 'svelte/transition'
    import { getMass } from '../global';
    import type { Elemental } from '../types/common/elemental';


    export let element:Elemental;

    let filtered = false;

    $: selected =  element === $selectedElement;

    $: filtered = $addedFilters.some((filterFunc) => filterFunc(element));

</script>


<!-- svelte-ignore a11y-missing-attribute -->
<a class:selected class:filtered on:click={() => selectedElement.set(element)} in:fly|local>
    <span class="protons">{element.atomic.number || "?"}</span>
    <strong>{element.symbol }</strong>
    <span class="name">{element.name}</span>
    <span class="mass">{getMass(element)}</span>
</a>


<style type="text/stylus">

a
    text-align center
    background-color rgba(255,255,255,0.3)
    transition transform 0.8s, box-shadow 0.8s, opacity 0.8s, background-color 0.8s
    transition-timing-function cubic-bezier(0.735, 0.055, 0.645, 0.960)
    z-index 0
    margin 0
    cursor pointer
    user-select none
    outline none
    border 1px solid var(--element-border-color)
    border none
    box-shadow 0px 1px 1px 1px rgba(200,200,200,.5)
    border-radius none
    // text-shadow rgba(0,0,0,.01) 0 0 1px
    backface-visibility hidden
    color var(--commontext-color)
    // backdrop-filter blur(1px)
a
    &.filtered
        opacity 0.35
    &:hover
        opacity 1
        z-index 1
        transform scale(1.5)
        transition-timing-function cubic-bezier(0.735, 0.055, 0.645, 0.960)
        background-color rgba(255,255,255,0.5)
        transition transform 0.3s, box-shadow 0.3s, opacity 0.3s, background-color 0.3s
        box-shadow 1px 10px 15px 3px rgba(24, 24, 24, 0.55)
        border 1px solid rgba(255,255,255,0.3)
        backdrop-filter blur(2px)
    &.selected
        box-shadow inset 0px 0px 25px var(--accent-color)
        border 1px solid var(--accent-color)
        &:hover
            box-shadow inset 0px 0px 25px var(--accent-color),1px 10px 15px 3px rgba(24, 24, 24, 0.55)

a
    display flex
    flex-flow column
    & span
        line-height 0.5rem
        font-size 0.9rem
    & .protons
        font-size: 0.75rem;
        line-height: 0.25rem;
        text-align: left;
        padding: 0.5em 0 0 0.15em;
    & strong
        flex: 1;
        font-family: 'Patua One', cursive;
        font-weight: normal;
        font-size: 2.3rem;
        text-align: center;
        line-height: 2rem;
        text-transform: capitalize;
        position: relative;

    & .name
        font-size 1.2rem
        line-height 1rem
        // transition font-size 0.8s
    & .mass
        text-align right
        line-height 0.75rem
        font-size 0.50rem

</style>