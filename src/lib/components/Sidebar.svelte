<script>
	import Menu from './Menu.svelte';
</script>

<aside class="w-[300px] bg-white absolute h-full shadow-sm">
	<div class="p-5">
		<img class="logo" src="/logo-icon.svg" alt="Logo" />
	</div>
	<Menu />

	<div class="absolute bottom-0 p-3 w-full border-t border-slate-100 flex">
		<div
			class="cursor-pointer w-full flex items-center justify-between p-2 hover:bg-slate-50 rounded"
		>
			<div class="flex items-center">
				<img
					src="https://i.pravatar.cc/100?img=12"
					alt="avatar"
					class="w-8 h-8 rounded-full mr-2"
				/>
				<div>biswajit_saha</div>
			</div>
			<span class="">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-4 h-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
				</svg>
			</span>
		</div>
	</div>
</aside>
