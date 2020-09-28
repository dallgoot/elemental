<script>
    import {elementsById, filterFunction} from './stores.js'

    export let name
    export let value

    function keyListener(event) {
        // console.log(event);
            (event.keyCode === 13) && filterTable();
    }
    function checkPropertyName(name) {
        let path = name.split('.');
        if (path.length === 1 && path[0] in $filterFunction) {
            return true;
        } else {
            let index=0
            let target = $filterFunction
            while (path[index] in target) {
                target = target[path[index++]]
            }
            return index === path.length-1
        }
    }

    function getProperty(element, name)
    {
        let path = name.split('.');
        if (path.length === 1 && path[0] in element) {
            return element[path[0]];
        } else {
            let index=0
            let target = element
            while (path[index] in target) {
                target = target[path[index++]]
            }
            return target[path[index-1]]
        }
    }


    function filterTable() {
        if (!checkPropertyName(name)) {
            alert("there's no filter available for '"+name+"'' yet");
        } else {
            for (let id in $elementsById) {
                $elementsById[id]['filtered'] = $filterFunction[name](getProperty($elementsById[id], name), value)
            }
        }
    }
</script>


<div>
    <label>{name}<input bind:value={value} on:keydown={keyListener}/><button on:click="{filterTable}">filter</button></label>
</div>





<style type="text/stylus">
    label
        color var(--commontext-color)
        margin-left 1em
        transition color 800ms ease
    input
        margin-left 1em
</style>