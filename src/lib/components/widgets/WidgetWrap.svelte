<script lang="ts">
	export let label: string | null = null;
	export let hint: string | null = null;
</script>

<div class="mb-4">
	{#if label}
		<div>
			<label for="" class="text-sm font-medium">{label}</label>
		</div>
	{/if}
	<slot />
	{#if hint}
		<p class="text-sm text-gray-500 mt-2">{hint}</p>
	{/if}
</div>
