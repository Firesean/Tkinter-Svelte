<script>
    import { createEventDispatcher } from 'svelte';
    import CalculatorButton from "./calculator-button.svelte";
    const dispatch = createEventDispatcher();

    function handleClick(event) {
        dispatch('click', event.detail);
    }
</script>

<div class="col-span-4">
    <CalculatorButton value="x2" on:click={handleClick}/>
    <p class="relative bottom-10 left-[45%] hideOnMobile">Double It</p>
</div>