<script>
    import {table, filterFunction} from './stores.js'

    export let name
    export let value

    function keyListener(event) {
        // console.log(event);
        if (event.keyCode === 13){
            filterTable();
        }
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
        return false
    }

    function filterTable() {
                // console.log('event.target.value', event.target.value);//return
        if (!checkPropertyName(name)) {
            alert("there's no filter available for '"+name+"'' yet");
        } else {
            // alert ('table filtered by '+ name + ":"+value);
            for (let row in $table) {
                for (let col in $table[row]) {
                    let e = $table[row][col];
                    $table[row][col].filtered = $filterFunction[name](e[name], value)
                }
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