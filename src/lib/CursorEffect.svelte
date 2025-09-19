<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	import { fairyDustCursor } from 'cursor-effects';

	let reducedMotion = false;

	onMount(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = mediaQuery.matches;

    if (!reducedMotion) {
      new fairyDustCursor({
        colors: ['#eb6f92', '#9ccfd8', '#c4a7e7']
      });
    }
  });
</script>