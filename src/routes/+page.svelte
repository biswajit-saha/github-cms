<script>
	import Collection from '$lib/components/Collection.svelte';
	import ContentArea from '$lib/components/ContentArea.svelte';
	import DashboardBase from '$lib/components/DashboardBase.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<DashboardBase>
	<Sidebar />
	<ContentArea>
		<Collection />
	</ContentArea>
</DashboardBase>
