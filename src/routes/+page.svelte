<script>
	import Icon from '@iconify/svelte';
	const isDev = import.meta.env.DEV;
</script>

<div class="background-soft pixel-corners flex max-w-fit rounded-full p-1 text-5xl">
	<!--Socials-->
	<a class="text-red-400" href="https://github.com/FormunaGit/"><Icon icon="pixel:github" /></a>
	<a class="text-blue-500" href="https://procial.tchncs.de/@formuna"
		><Icon icon="pixel:mastodon" /></a
	>
	<a class="text-gray-600" href="https://steamcommunity.com/id/formuna/"
		><Icon icon="pixel:steam" /></a
	>
</div>

<div class="flex justify-center">
	<img src="src/assets/favicon.svg" alt="Icon" height="10%" width="10%">
	<div class="flex flex-col justify-center">
		<h1 class="text-center text-6xl font-black">Welcome to...</h1>
		<h2 class="text-center text-3xl font-bold">Formuna's Webpage!</h2>
	</div>
</div>

<div class="background-soft pixel-corners p-1 flex flex-row">
	<div class="pixel-corners m-2 background-softer p-2 flex-1"> <!--Projects-->
		<div class="pixel-corners m-2 background-softest p-2">
			<h2>Pintes</h2>
			<p>A Python module for generating static websites using, well, Python!</p>
		</div>
		<div class="pixel-corners m-2 background-softest p-2">
			<h2>Formuna's Webpage</h2>
			<p>This website is built using Svelte!</p>
		</div>
	</div>
	<div class="pixel-corners m-2 background-softer p-2 flex-1">
		<!--About Me-->
		<h1 class="text-center text-3xl font-bold">Hello World!</h1>
	</div>
</div>
