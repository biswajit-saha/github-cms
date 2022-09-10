<script>
	import { page } from '$app/stores';
</script>

<div class="flex min-h-screen items-center justify-center py-16 px-8">
	<div class="text-center">
		<h1 class="text-8xl text-slate-500 mb-2">{$page.status}</h1>
		<div class="text-lg mb-4">{$page.error.message}</div>
		<a href="/" class="btn btn-sm"><span>Back to home</span></a>
	</div>
</div>
