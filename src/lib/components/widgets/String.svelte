<script lang="ts">
	import WidgetWrap from './WidgetWrap.svelte';
	export let name: string;
	export let label: string | null = null;
	export let placeholder: string | null = null;
	export let required: boolean | undefined = undefined;
	export let hint: string | null = null;
</script>

<WidgetWrap {label} {hint}>
	<input
		tabindex="0"
		type="text"
		id=""
		{name}
		{placeholder}
		{required}
		class="block w-full rounded border border-gray-200  focus:border-gray-500 focus:ring-gray-500 py-3 px-3 mt-1 focus:outline-none"
	/>
</WidgetWrap>
