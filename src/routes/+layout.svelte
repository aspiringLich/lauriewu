<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<!-- <svg width="0" height="0" aria-hidden="true">
	<filter id="grain" color-interpolation-filters="sRGB" x="0" y="0" width="1" height="1">
		<feTurbulence type="fractalNoise" baseFrequency=".012" numOctaves="7" />
		<feDisplacementMap in="SourceGraphic" scale="120" xChannelSelector="R" />
		<feBlend in2="SourceGraphic" />
	</filter>
</svg> -->

<div class="background -z-90" id="back"></div>

<div class="flex min-h-screen flex-col">
	{@render children?.()}
</div>

<style lang="postcss">
	@reference "../app.css";

	.background {
		@apply absolute top-0 left-0 h-screen w-screen;
	}

	#back {
		/*background: radial-gradient(
			circle at center,
			var(--background-color-3) 0%,
			var(--background-color-2) 50%,
			var(--background-color-1) 80%,
			var(--background-color-0)
		);*/
		/*filter: url(#grain);*/
	}

	:global(body) {
		@apply bg-neutral-400;
	}
</style>
