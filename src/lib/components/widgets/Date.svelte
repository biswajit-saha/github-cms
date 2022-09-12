<script lang="ts">
	import WidgetWrap from './WidgetWrap.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import 'flatpickr/dist/flatpickr.css';
	import 'flatpickr/dist/themes/light.css';

	// export let id: string;
	// export let name: string;
	// export let type: string = 'text';
	export let label: string | null = null;
	export let placeholder: string | null = null;
	// export let required: boolean | undefined = undefined;
	export let hint: string | null = null;

	let date = new Date();
	const setDateNow = () => {
		date = new Date();
	};

	const options = {
		element: '.date-picker',
		enableTime: true,
		altInput: true,
		altFormat: 'F j, Y h:i K',
		dateFormat: 'Y-m-d'
	};
</script>

<WidgetWrap {label} {hint}>
	<Flatpickr bind:value={date} element=".date-picker" {options}>
		<div class="date-picker relative">
			<input
				type="text"
				{placeholder}
				data-input
				class="block w-full rounded-md border border-gray-200  focus:border-gray-500 focus:ring-gray-500 py-3 pl-3 pr-20 mt-1 focus:outline-none"
			/>
			<button on:click={setDateNow} class="btn btn-sm absolute right-2 top-[7px]">Now</button>
		</div>
	</Flatpickr>
</WidgetWrap>
