<script>
	import SidenavBar from "$lib/components/sidenav-bar.svelte";
	import "../app.css";

	import {onMount, setContext} from 'svelte';
    import {writable} from 'svelte/store';
    import Alerts from '$lib/components/alerts.svelte';
    let addAlert;
    const addAlertStore = new writable(() => {});
    setContext('addAlert', addAlertStore);
    onMount(() => {
        addAlertStore.set(addAlert);
    });
</script>

<div class="flex">
	<SidenavBar/>
	<slot />
</div>

<Alerts bind:addAlert />
