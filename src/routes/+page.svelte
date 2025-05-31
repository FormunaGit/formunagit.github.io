<script>
	console.log('Hey, what are you doing here?');
	import Icon from '@iconify/svelte';
</script>

<div class="rose-pine flex justify-center rounded-full p-1 text-5xl">
	<!--Socials-->
	<a href="https://github.com/FormunaGit/"><Icon icon="line-md:github-loop" /></a>
	<a href="https://procial.tchncs.de/@formuna"><Icon icon="line-md:mastodon-filled" /></a>
</div>

<h1 class="text-center text-6xl font-black">Welcome to...</h1>
<h2 class="text-center text-3xl font-bold">Formuna's Webpage!</h2>
<p class="text-yellow-500">
	I <i>really</i> wish I was around when everyone were still making their own websites...
</p>

<div class="rose-pine flex justify-center rounded-full bg-sky-300 p-1">
	<!--Projects-->
	<div class="m-2 bg-sky-600 p-1">
		<h2>Pintes</h2>
		<p>A Python module for generating static websites using, well, Python!</p>
	</div>
	<div class="m-2 bg-sky-600 p-1">
		<h2>Formuna's Webpage</h2>
		<p>This website is built using Svelte!</p>
	</div>
</div>
