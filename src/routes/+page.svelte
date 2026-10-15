<script lang="ts">
	import name from '$lib/images/name.png';
	import { onMount } from 'svelte';
	import './sections/sections.css';
	import SelfPortrait from './sections/SelfPortrait.svelte';
	import Light from './sections/Light.svelte';

	let mainImg: HTMLElement;

	onMount(() => {
		mainImg.animate(
			{ transform: ['translateY(0)', 'translateY(500px)'] },
			{
				fill: 'both',
				timeline: new ScrollTimeline({
					source: document.documentElement
				}),
				rangeStart: new CSSUnitValue(0, 'vh'),
				rangeEnd: new CSSUnitValue(100, 'vh')
			}
		);
	});
</script>

<div class="relative grid h-[100vh] w-full grow grid-cols-1 grid-rows-1" id="header">
	<enhanced:img
		src="$lib/images/Series_Abandoned1.png"
		alt="Title Page"
		class="relative -z-50 h-full w-full object-cover"
		id="main-img"
		fetchpriority="high"
		bind:this={mainImg}
	/>

	<!-- fancy corner (s) -->
	<div class="mt-8 mr-16" id="corner"></div>
	<div class="mr-auto h-60 w-48 -scale-y-100 md:w-60" id="corner"></div>
	<div class="mt-auto ml-auto h-60 w-40 -scale-x-100 md:w-60" id="corner"></div>
	<!-- left vline -->
	<svg class="ml-20 self-stretch" id="vline" viewBox="0 0 1 10" preserveAspectRatio="none">
		<path d="M0.5 0 V10" style="stroke:var(--stroke-color);stroke-width:1" />
	</svg>
	<svg class="ml-28 self-stretch" id="vline" viewBox="0 0 1 10" preserveAspectRatio="none">
		<path d="M0.5 0 V10" style="stroke:var(--stroke-color);stroke-width:1" />
	</svg>

	<!-- <div class="-bottom-1 left-20" id="circle"></div>
	<div class="-bottom-1 left-28" id="circle"></div>
	<div class="-bottom-1 right-16" id="circle"></div>
	<div class="-bottom-1 right-39 md:right-59" id="circle"></div> -->
	<section class="mt-auto">
		<div class="relative flex w-full justify-center bg-neutral-800">
			<img src={name} alt="Laurie Wu" class="-mt-4 -mb-4 -ml-2 h-32" />
		</div>
	</section>
</div>
<main class="min-h-[200vh] bg-neutral-400">
    <SelfPortrait class="mt-24"/>
    <Light class="mt-24" />
</main>

<style lang="postcss">
	@reference "../app.css";

	#header > * {
		grid-area: 1 / 1 / 2 / 2;
	}

	#corner {
		border-image-source: url($lib/svg/corner.svg);
		border-image-slice: 45.5 45.5 1.5 1.5;
		border-image-width: calc(6px * 43 / 3) calc(6px * 43 / 3) 6px 6px;
	}

	#vline {
		width: 6px;
	}

	#main-img {
		filter: brightness(0.4) saturate(40%);
	}

	/*#circle {
		@apply absolute -m-[3px] h-3 w-3 rounded-full border-2 border-[var(--stroke-color)] z-50;
	}*/

	main > h1 {
		@apply text-3xl;
	}
</style>
