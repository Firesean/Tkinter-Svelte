<script>

    import XMarkOutline from './x-mark-outline.svg?component';

    export let z = 'z-10';

    export let open = false;
    export let onBackgroundClick;

    let laggedOpen = false;

    $: {
        // this line is needed to trigger the animation
        laggedOpen = open;
    }

    export let styles = 'px-4 pb-4 pt-5 sm:my-8 sm:w-full sm:max-w-sm sm:p-6';

</script>

<div class="relative {z} {laggedOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} ease-out duration-300 ease-in duration-200 transition-opacity">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
    <div class="fixed inset-0 {z} overflow-y-auto"
         on:click={onBackgroundClick}>
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div class="relative transform rounded-lg bg-white text-left shadow-xl transition-all {styles}
                {laggedOpen ? 'opacity-100 translate-y-0 sm:scale-100 ease-out duration-300' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 ease-in duration-200'}"
                 on:click|stopPropagation>
                {#if onBackgroundClick}
                    <div class="absolute top-2.5 right-2.5 cursor-pointer" on:click={onBackgroundClick}>
                        <XMarkOutline stroke-width="2" class="w-5 h-5 text-gray-400"/>
                    </div>
                {/if}
                <!-- <slot></slot> -->
            </div>
        </div>
    </div>
</div>
