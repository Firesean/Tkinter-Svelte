<script>
    import {onMount, setContext} from 'svelte';
    import SidenavBar from "$lib/components/sidenav-bar.svelte";
    import Alerts from '$lib/components/alerts.svelte';
    import "../app.css";
	import { writable } from 'svelte/store';
  import AlertButton from '$lib/components/alert-button.svelte';

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

<Alerts bind:addAlert/> 