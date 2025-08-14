<script>
	import { onMount } from 'svelte';
	import { fairyDustCursor } from 'cursor-effects';

	onMount(() => {
		// Initialize fairyDustCursor once the component is mounted (and thus the DOM is ready)
		new fairyDustCursor({
			colors: ['#eb6f92', '#9ccfd8', '#c4a7e7']
		});
	});
</script>

<!-- This component doesn't render any visible HTML elements itself -->
