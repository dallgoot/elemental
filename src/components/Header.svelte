<script lang="ts">
    import ThemeSwitcher from '../ui/ThemeSwitcher.svelte'
</script>



<header>
    <h1>Periodic Table of Elements <sub>(WIP)</sub></h1>
    <ThemeSwitcher />
</header>



<style lang="stylus">
header
    margin-bottom 1em
    text-align center
    h1
        color: var(--title-color);
        font-size 3em;
        font-family 'Patua One', cursive;
        font-weight normal;
        text-shadow 1px 0px 10px currentColor
        display inline
        width 95%



</style>