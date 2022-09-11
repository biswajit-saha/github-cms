<script>
	import String from '$lib/components/widgets/String.svelte';
	import Text from '$lib/components/widgets/Text.svelte';
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
			<String
				id="title"
				name="hello"
				label="Title"
				required={true}
				hint="Placeat saepe voluptas optio fugiat ipsum maiores nisi at, iusto maxime soluta aperiam beatae."
			/>
			<Text
				id="excerpt"
				name="hello"
				label="Title"
				required={true}
				hint="Placeat saepe voluptas optio fugiat ipsum maiores nisi at, iusto maxime soluta aperiam beatae."
			/>
		</div>
	</div>
	<div class="content-area-sidebar w-full lg:w-1/3 px-4">
		<div class="card">
			<String
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
			/>
		</div>
	</div>
</div>
