<script lang="ts">
	import '../app.css';
</script>

<svelte:head>
	<title>SvelteKit auth</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- <nav>
	<a href="/">Home</a>
	<a href="/auth/login">Log in</a>
	<a href="/auth/register">Register</a>
	<a href="dashboard">Dashboard</a>
	<a href="/auth/logout">Log Out</a>
</nav> -->

<main>
	<slot />
</main>
