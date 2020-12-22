<script lang="ts">

let darkTheme = false

function toggleTheme() {
    darkTheme = !darkTheme  
}

$: document.body.classList.toggle('darkTheme', darkTheme);

</script>


<button on:click={toggleTheme}><span><b>o</b></span></button>




<style lang="stylus">
button
        padding 0
        margin-right -1em
        width 4em
        height 2em
        border 2px solid var(--accent-color)
        border-radius 2em

        cursor pointer
        overflow hidden

        color var(--accent-color)
        display inline-block
        position fixed
        right 2em
        top 0.5em
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
</style>