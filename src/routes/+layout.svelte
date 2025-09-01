<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="background -z-90" id="back"></div>
<div class="background -z-80" id="back-mask"></div>
<div class="flex min-h-screen flex-col">
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "../app.css";

	.background {
		@apply absolute top-0 left-0 h-screen w-screen;
	}

	#back {
		background: radial-gradient(
			circle at center,
			var(--background-color-2),
			var(--background-color-1)
		);
	}

	#back-mask {
		background: radial-gradient(
			circle at center,
			var(--background-color-2),
			var(--background-color-2),
			var(--background-color-1),
			var(--background-color-1)
		);
		mask: url('$lib/dither.png') intersect;
		filter: opacity(0.5)
	}
</style>
