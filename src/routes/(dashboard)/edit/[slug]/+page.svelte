<script lang="ts">
	import String from '$lib/components/widgets/String.svelte';
	import Text from '$lib/components/widgets/Text.svelte';
	import Date from '$lib/components/widgets/Date.svelte';
	import Markdown from '$lib/components/widgets/Markdown.svelte';

	const componentList: { [key: string]: unknown } = {
		String: String,
		Text: Text,
		Date: Date,
		Markdown: Markdown
	};

	import { page } from '$app/stores';
	import Boolean from '$lib/components/widgets/Boolean.svelte';
	// import Collection from '$lib/components/Collection.svelte';
	const { collections } = $page.data.config;
	const { fields } = collections.find((el) => el.id === 'post');
	console.log(fields);

	const mainFields = fields.filter((f) => f.placement !== 'sidebar');
	const sidebarFields = fields.filter((f) => f.placement === 'sidebar');
	// console.log(mainFields);
	// console.log(sidebarFields);
</script>

<!-- breadcrumb for single page -->
<div class="text-sm text-gray-600 mb-5">
	<a href="/" class="text-blue-600 hover:underline">Post</a>
	<span class="mx-1">></span>
	<span>Lorem ipsum post title</span>
</div>
<!-- breadcrumb end -->

<div class="flex flex-wrap -mx-4">
	<div class="content-area-main lg:w-2/3 flex-auto px-4">
		<div class="card space-y-7">
			{#each mainFields as field}
				<svelte:component this={componentList[field.widget]} {...field} />
			{/each}
			<Boolean
				id="boolian_id"
				label="A very long label text for testing purpose"
				hint="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae."
			/>
		</div>
	</div>
	{#if sidebarFields.length}
		<div class="content-area-sidebar w-full lg:w-1/3 px-4">
			<div class="card">
				{#each sidebarFields as field}
					<svelte:component this={componentList[field.widget]} {...field} />
				{/each}
				<!-- <String
				id="sidebar_title"
				name="hello"
				label="Title"
				required={true}
				hint="Placeat saepe voluptas optio fugiat ipsum maiores nisi at, iusto maxime soluta aperiam beatae."
			/>
			<Text
				id="sidebar_excerpt"
				name="hello"
				label="Title"
				required={true}
				hint="Placeat saepe voluptas optio fugiat ipsum maiores nisi at, iusto maxime soluta aperiam beatae."
			/> -->
			</div>
		</div>
	{/if}
</div>
