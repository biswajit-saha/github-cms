<script lang="ts">
	import Menu from './Menu.svelte';
	import UserInfo from './UserInfo.svelte';
</script>

<aside class="w-[300px] bg-white absolute h-full shadow-sm">
	<div class="p-5">
		<a href="/"><img class="logo" src="/logo-icon.svg" alt="Logo" /></a>
	</div>
	<Menu />
	<UserInfo />
</aside>
