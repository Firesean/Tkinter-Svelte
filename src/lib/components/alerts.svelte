<script>
    import Modal from './modal.svelte';
    import {writable} from 'svelte/store';

    const modals = new writable([]);

    const lagBetweenModals = 300; // this must exactly match the modal's animation duration

    let x = 0;

    export function addAlert(
        {
            title,
            message,
            timeout,
            actions,
            imageSource,
            urgent = false
        }) {
        let callback;
        let promise = new Promise(r => callback = r);
        let modal = {
            title,
            message,
            closed: false,
            id: x++,
            callback,
            actions: actions || [
                {label: 'Got it', classes: 'primary !w-24', value: undefined}
            ],
            imageSource
        };

        $modals = urgent
            ? [
                modal,
                ...$modals
            ]
            : [
                ...$modals,
                modal
            ];

        if (timeout) {
            setTimeout(() => {
                try {
                    click(modal);
                } catch (e) {
                    console.error(e);
                }
            }, timeout);
        }
        return promise;
    }

    function click(modal, response) {
        removeModal(modal.id);
        modal.callback(response);
    }

    async function removeModal(id) {
        let index = $modals.findIndex(modal => modal.id === id);
        if (index === -1) {
            return; // already removed (e.g. by timeout
        }
        $modals[index].closed = true;
        await new Promise(r => setTimeout(r, lagBetweenModals)); // time for animation
        $modals = $modals.filter(modal => modal.id !== id); // remove to save memory
    }

</script>

{#each $modals as modal, index (modal.id)}
    {#if index === 0}
        <Modal open={!modal.closed} styles="px-4 pb-4 pt-5 sm:w-full sm:max-w-sm" z="z-20">
            <h3 class="mb-1">{modal.title}</h3>
            {#if modal.imageSource}
                <div class="flex flex-row gap-x-3 mb-3">
                    <p class="after-header">{@html modal.message}</p>
                    <img draggable="false" class="w-24 h-24 rounded-md" src={modal.imageSource} />
                </div>
            {:else}
                <p>{@html modal.message}</p>
            {/if}
            <div class="flex gap-x-2 !justify-end mt-2">
                {#each modal.actions as action}
                    <button class="float-right button flex-grow-0 !w-fit {action.classes} gap-x-2 items-center mt-2"
                            on:click={() => click(modal, action.value)}>
                        {action.label}
                    </button>
                {/each}
            </div>
        </Modal>
    {:else}
        <!-- do not render yet, otherwise the animation won't display -->
    {/if}
{/each}
