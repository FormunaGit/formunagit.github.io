<script lang="ts">
	import '../app.css';
	import CursorEffect from '$lib/CursorEffect.svelte';

	let { children } = $props();
</script>

<CursorEffect />
{@render children()}
