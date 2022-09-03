<script>
	import Login from '$lib/Login.svelte';
	import DashboardWrapper from '$lib/dashboard/DashboardWrapper.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if !data.authenticated}
	<Login />
{:else}
	<DashboardWrapper />
{/if}
