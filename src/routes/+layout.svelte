<script>
	import SidenavBar from "$lib/components/sidenav-bar.svelte";
	import "../app.css";
</script>

<div class="flex">
	<SidenavBar/>
	<slot />
</div>