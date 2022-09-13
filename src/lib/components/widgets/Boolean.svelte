<script lang="ts">
	export let id: string;
	export let label: string | null = null;
	// export let required: boolean | undefined = undefined;
	export let hint: string | null = null;
</script>

<div class="mb-4 flex items-center">
	<div class="mr-2 flex-grow">
		{#if label}
			<div>
				<label for={id} class="font-medium cursor-pointer">{label}</label>
			</div>
		{/if}
		{#if hint}
			<p class="text-sm text-gray-500">{hint}</p>
		{/if}
	</div>
	<div class="min-w-fit">
		<input
			{id}
			type="checkbox"
			class="appearance-none w-11 rounded-full h-6 align-top relative bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:left-1 before:top-1 checked:bg-gray-900 before:checked:left-auto before:checked:right-1 before:transition-transform"
		/>
	</div>
</div>
