<script>
    import {onMount, setContext} from 'svelte';
    import SidenavBar from "$lib/components/sidenav-bar.svelte";
    import Alerts from '$lib/components/alerts.svelte';
    import "../app.css";
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';

	export const sideBarController = writable({ isHidden: false });

	let addAlert;
	let url, folder ;
	const addAlertStore = new writable(() => {});
	setContext('addAlert', addAlertStore);

	onMount(() => {
		addAlertStore.set(addAlert);
		url = $page.url.toString();
		folder = url.split('/').pop();
	});
</script>

{#if folder == "pathrise"}
	<div class="bg-blue-300 h-screen">
		<slot />
	</div>
{:else}
	<div class="flex min-w-[400px]" class:hidden={$sideBarController.isHidden}>
		<SidenavBar/>
		<slot/> 
		<Alerts bind:addAlert/> 
	</div>
{/if}

