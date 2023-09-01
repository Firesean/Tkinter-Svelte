<script>
    import {onMount, setContext} from 'svelte';
    import SidenavBar from "$lib/components/sidenav-bar.svelte";
    import Alerts from '$lib/components/alerts.svelte';
    import "../app.css";
	import { writable } from 'svelte/store';

	let addAlert;
	const addAlertStore = new writable(() => {});
	setContext('addAlert', addAlertStore);
	onMount(() => {
		addAlertStore.set(addAlert);
	});
</script>

<div class="flex min-w-[400px]">
    <SidenavBar/>
    <slot /> 
	<Alerts bind:addAlert/> 
</div>

