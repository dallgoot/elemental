<script lang="ts">
    import { filterFunctions} from '../global'
    import { addedFilters } from '../stores'

    export let name:string
    export let removable = true;
    let value:string

    function keyListener(event:KeyboardEvent):void {
        // console.log(event);
            (event.keyCode === 13) && filterTable();
    }


    function checkPropertyName(name:string): boolean {
        let path = name.split('.');
        if (path.length === 1 && path[0] in filterFunctions) {
            return true;
        } else {
            let index=0
            let target = filterFunctions
            while (path[index] in target) {
                target = target[path[index++]]
            }
            return index === path.length-1
        }
    }

    // function getProperty(element:Element, name:string):any
    // {
    //     let path = name.split('.');
    //     if (path.length === 1 && path[0] in element) {
    //         return element[path[0]];
    //     } else {
    //         let index=0
    //         let target = element
    //         while (path[index] in target) {
    //             target = target[path[index++]]
    //         }
    //         return target[path[index-1]]
    //     }
    // }


    function filterTable() {
        if (!checkPropertyName(name)) {
            alert("there's no filter available for '"+name+"'' yet");
        } else {
            $addedFilters = [filterFunctions[name], ...$addedFilters];
        }
    }
    let component;
</script>


<div bind:this={component}>
    <label>{name}<input bind:value={value} on:keydown={keyListener}/>
    <button on:click="{filterTable}">filter</button>
    {#if removable}
        <button on:click="{() => component.remove()}">X</button>
    {/if}
    </label>
</div>





<style type="text/stylus">
    label
        color var(--commontext-color)
        margin-left 1em
        transition color 800ms ease
    input
        margin-left 1em
</style>