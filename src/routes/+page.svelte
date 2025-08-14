<script>
	console.log('Hey, what are you doing here?');
	import Icon from '@iconify/svelte';
</script>

<div class="rose-pine pixel-corners flex max-w-fit rounded-full p-1 text-5xl">
	<!--Socials-->
	<a class="text-red-400" href="https://github.com/FormunaGit/"><Icon icon="pixel:github" /></a>
	<a class="text-blue-500" href="https://procial.tchncs.de/@formuna"
		><Icon icon="pixel:mastodon" /></a
	>
	<a class="text-gray-600" href="https://steamcommunity.com/id/formuna/"
		><Icon icon="pixel:steam" /></a
	>
</div>

<h1 class="text-center text-6xl font-black">Welcome to...</h1>
<h2 class="text-center text-3xl font-bold">Formuna's Webpage!</h2>

<div class="rose-pine pixel-corners flex justify-center rounded-2xl bg-sky-300 p-1">
	<!--Projects-->
	<div class="pixel-corners m-2 rounded-2xl bg-sky-600 p-2">
		<h2>Pintes</h2>
		<p>A Python module for generating static websites using, well, Python!</p>
	</div>
	<div class="pixel-corners m-2 rounded-2xl bg-sky-600 p-2">
		<h2>Formuna's Webpage</h2>
		<p>This website is built using Svelte!</p>
	</div>
</div>
