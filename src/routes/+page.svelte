<script>
	console.log('Hey, what are you doing here?');
	import Icon from '@iconify/svelte';
</script>

<div class="layer-1 flex max-w-fit p-1 text-5xl">
	<!--Socials-->
	<a class="text-white" href="https://github.com/FormunaGit/"><Icon icon="pixel:github" /></a>
	<a class="text-blue-500" href="https://procial.tchncs.de/@formuna">
		<Icon icon="pixel:mastodon" />
	</a>
	<a class="text-gray-600" href="https://steamcommunity.com/id/formuna/">
		<Icon icon="pixel:steam" />
	</a>
</div>

<h1 class="text-center text-6xl font-black">Welcome to...</h1>
<h2 class="text-center text-3xl font-bold">Formuna's Webpage!</h2>
<br />

<!--Projects-->
<div class="layer-1 flex gap-4 p-2">
	<div class="layer-1 flex-1 p-2">
		<h2>Pintes</h2>
		<p>A Python module for generating static websites using, well, Python!</p>
	</div>

	<div class="layer-1 flex-1 p-2">
		<h2>Formuna's Webpage</h2>
		<p>This website is built using Svelte!</p>
	</div>
</div>
