<script lang="ts">
	import WidgetWrap from './WidgetWrap.svelte';
	export let id: string;
	export let name: string;
	export let label: string | null = null;
	export let placeholder: string | null = null;
	export let required: boolean | undefined = undefined;
	export let hint: string | null = null;
	export let rows: number = 5;
</script>

<WidgetWrap {label} {hint}>
	<textarea
		{id}
		{name}
		{placeholder}
		{required}
		{rows}
		cols="10"
		tabindex="0"
		class="block w-full rounded border border-gray-200  focus:border-gray-500 focus:ring-gray-500 py-3 px-3 mt-1 focus:outline-none"
	/>
	<div>This widget now represent markdown</div>
</WidgetWrap>
