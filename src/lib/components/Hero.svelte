<script lang="ts">
	import LoadingScreen from './LoadingScreen.svelte';

	let previewLoaded = $state(false);
	let nameLoaded = $state(false);
</script>

<LoadingScreen visible={!(previewLoaded && nameLoaded)} />

<header class="hero relative grid place-items-center overflow-hidden">
	<!-- Background: the darkened painting. -->
	<div class="absolute inset-0">
		<enhanced:img
			src="#lib/images/Series_Abandoned1.png?w=960"
			alt=""
			class="painting"
			fetchpriority="high"
			onload={() => (previewLoaded = true)}
			onerror={() => (previewLoaded = true)}
		/>
		<enhanced:img
			src="#lib/images/Series_Abandoned1.png"
			alt="Painting of an abandoned, decaying prison corridor"
			class="painting"
		/>

		<!-- Blends the bottom of the painting into the page background. -->
		<div class="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-b from-transparent to-background"></div>
	</div>

	<h1 class="relative w-4/5 max-w-lg">
		<span class="sr-only">Laurie Wu</span>
		<enhanced:img
			src="#lib/images/name.png"
			alt=""
			sizes="(min-width: 40rem) 32rem, 80vw"
			fetchpriority="high"
			class="w-full drop-shadow-lg"
			onload={() => (nameLoaded = true)}
			onerror={() => (nameLoaded = true)}
		/>
	</h1>

	<a
		href="#artwork"
		aria-label="Scroll down to the artwork"
		class="absolute inset-x-0 bottom-6 mx-auto w-fit p-3 text-neutral-400 transition-colors hover:text-neutral-100"
	>
		<svg
			viewBox="0 0 24 24"
			class="arrow size-8"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			aria-hidden="true"
		>
			<path d="M6 9l6 6 6-6" />
		</svg>
	</a>
</header>

<style>
	.hero {
		/*
		 * Fill the screen, but within limits: no wider than 3:1 and no taller than 3:4, so the
		 * painting doesn't get cropped down to a sliver on ultrawide monitors or tall phones.
		 */
		height: clamp(100vw / 3, 100svh, 100vw * 4 / 3);
	}

	.hero :global(.painting) {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		/* When cropped on narrow screens, keep the end of the corridor in view. */
		object-position: 30% 50%;
		filter: brightness(0.4) saturate(0.7);
	}

	@media (prefers-reduced-motion: no-preference) {
		.arrow {
			animation: nudge 2s ease-in-out infinite;
		}
	}

	@keyframes nudge {
		50% {
			transform: translateY(6px);
		}
	}
</style>
