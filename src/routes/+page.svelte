<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<div class="wrapper">
	<div class="container">
		<h1>Welcome to Git CMS</h1>
		{#if data.authenticated}
			<a href="/logout">
				<button>Logout</button>
			</a>
		{:else}
			<a href="/login">
				<button>Login Using Github</button>
			</a>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	.container {
		max-width: 700px;
		text-align: center;
	}
</style>
