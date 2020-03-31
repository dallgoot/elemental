<script>
    import { selectedElement, hoveredElement } from './stores.js';

    export let protons = '';
    export let symbol  = '';
    export let name    = '';
    export let mass    = '';
    export let id    = 'unset';
    export let filtered = false;

    $: selected = id === $selectedElement;

    function onclick (event) {
        selectedElement.set(id);
    }
    function onhover (event) {
        hoveredElement.set(id);
    }
    let current;
</script>


<button bind:this={current} class:selected class:filtered={filtered} on:click={onclick} on:mouseover={onhover}>
    <span class="protons">{protons}</span>
    <strong>{symbol}</strong>
    <span class="name">{name}</span>
    <span class="mass">{mass}</span>
</button>


<style type="text/stylus">
@import "../public/global.css"

button, button :focus
    display inline-block
    vertical-align top
    overflow hidden
    text-align left
    background var(--element-bg)
    transition all 800ms ease
    transition-timing-function cubic-bezier(0.735, 0.055, 0.645, 0.960)
    z-index inherit
    cursor pointer
    padding 0 0.25em
    user-select none
    margin 0
    border 1px solid var(--element-border-color)
    outline none
    box-shadow 0px 0px 0px 0px rgba(24, 24, 24,1)
    border-radius 0
    text-shadow rgba(0,0,0,.01) 0 0 1px
    backface-visibility hidden
    color var(--commontext-color)

button
    &.filtered
        opacity 0.35
    &:hover
        opacity 1
        z-index 1
        transform scale(1.4)
        transition-timing-function cubic-bezier(0.735, 0.055, 0.645, 0.960)
        transition transform 0.8s, box-shadow 0.8s, opacity 0.8s
        box-shadow 1px 10px 15px 3px rgba(24, 24, 24, 0.75)
        border 1px solid #fff
        outline none
    &.selected
        box-shadow inset 0px 0px 25px var(--accent-color)
        border 1px solid var(--accent-color)
        &:hover
            box-shadow inset 0px 0px 25px var(--accent-color),1px 10px 15px 3px rgba(24, 24, 24, 0.75)




button
    & span
        display block
        line-height 0.5rem
        font-size 0.9rem
        /*padding 0.1rem*/
    & .protons
        font-size 0.7rem
        line-height 0.25rem
        float left
        padding 0.5em 0
    & strong
        font-family 'Patua One', cursive
        font-weight normal
        font-size 2rem
        text-align center
        display block
        line-height 1.6rem
        text-transform capitalize
        clear left
        position relative
        top -0.15em

    & .name
        font-size 0.8rem
        line-height 0.5rem
        transition font-size 0.8s
    & .mass
        display block
        text-align center
        line-height 0.75rem
        font-size 0.50rem

</style>