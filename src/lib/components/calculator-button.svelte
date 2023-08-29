<script>
    import { createEventDispatcher } from 'svelte';
    export let value;

    const dispatch = createEventDispatcher();
</script>

<button class="text-[2rem] bg-gray-100 rounded-md m-auto py-[2.5rem] px-[5rem] w-[100%]" 
class:col-span-2={value === 'C'} class:col-span-3={value === '0'} on:click={() => dispatch('click', value)}>{value}</button>