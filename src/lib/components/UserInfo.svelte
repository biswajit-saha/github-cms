<script>
	import { clickOutside } from '$lib/util/clickOutside';
	let showFlyMenu = false;
	import { page } from '$app/stores';
	const { user } = $page.data;
</script>

<div class="absolute bottom-0 p-3 w-full border-t border-slate-100 flex">
	<div class="relative w-full">
		<div
			class="cursor-pointer w-full flex items-center justify-between px-2 py-1 hover:bg-slate-50 rounded"
			on:click={() => (showFlyMenu = !showFlyMenu)}
			use:clickOutside
			on:outsideclick={() => (showFlyMenu = false)}
		>
			<div class="flex items-center">
				<img src={user.avatar_url} alt="avatar of {user.name}" class="w-9 h-9 rounded-full mr-2" />
				<div>
					<div class="font-medium text-sm">{user.name}</div>
					<div class="text-xs text-gray-500">@{user.login}</div>
				</div>
			</div>
			<span class="{showFlyMenu ? 'rotate-180' : ''} transition-transform">
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
		<div
			class="{showFlyMenu
				? 'opacity-100 scale-100 visible'
				: 'opacity-0 scale-75 invisible'}  transition-transform absolute right-0 bottom-full z-10 mb-2 w-56 origin-bottom-right rounded bg-white shadow-md border border-slate-100"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				<a
					href="/api/auth/logout"
					class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-50"
					role="menuitem"
					tabindex="-1"
					id="menu-item-2">Sign out</a
				>
			</div>
		</div>
	</div>
</div>
