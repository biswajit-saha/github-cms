<script lang="ts">
	import Menu from './Menu.svelte';
	import UserInfo from './UserInfo.svelte';
</script>

<aside class="w-[300px] bg-white fixed h-full shadow-sm flex flex-col">
	<div class="p-5">
		<a href="/"><img class="logo" src="/logo-icon.svg" alt="Logo" /></a>
	</div>
	<Menu />
	<UserInfo />
</aside>
