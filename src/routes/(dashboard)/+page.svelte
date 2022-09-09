<script lang="ts">
	import Collection from '$lib/components/Collection.svelte';
	// import ContentArea from '$lib/components/ContentArea.svelte';
	// import DashboardBase from '$lib/components/DashboardBase.svelte';
	// import Sidebar from '$lib/components/Sidebar.svelte';

	export let data: { user: Object };
	console.log(data);
</script>

<Collection />
