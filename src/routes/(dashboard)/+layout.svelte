<script lang="ts">
	import ContentArea from '$lib/components/ContentArea.svelte';
	import DashboardBase from '$lib/components/DashboardBase.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let data;
</script>

<svelte:head>
	<title>Github CMS</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<DashboardBase>
	<Sidebar user={data.user} />
	<ContentArea>
		<slot />
	</ContentArea>
</DashboardBase>
