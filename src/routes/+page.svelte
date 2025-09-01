<script lang="ts">
	import seal from '$lib/seal.png';
	import Corner from '$lib/svg/Corner.svelte';
	import corner from '$lib/svg/corner.svg';
</script>

<div
	class="grid max-h-[80vh] w-full grow grid-cols-[auto_1fr_auto] grid-rows-[auto_3rem_1fr]
	self-center text-stone-50"
	id="header"
>
    <!-- logo -->
	<div class="row-span-2">
    		<h1 class="heading mt-8 ml-8 font-serif text-8xl leading-19">LAURIE</h1>
		<h1 class="-my-3 ml-8 font-serif text-8xl">
			WU<img
				src={seal}
				class="relative bottom-[0.67rem] left-[0.2rem] inline-block h-[4.3rem]"
				alt="Seal"
			/>
		</h1>
	</div>
	<!-- top hline -->
	<svg class="mt-10 ml-4 h-1 place-self-stretch" viewBox="0 0 1 1" preserveAspectRatio="none">
		<path d="M0 0.5 H1" stroke="var(--stroke-color)" stroke-width="1" fill="none" />
	</svg>
	<!-- corner -->
	<Corner color="var(--stroke-color)" transform="scale(-1 -1)" class="mt-8 mr-8" />
	<div></div>
	<!-- right vline -->
	<svg
		class="row-span-2 mr-10 h-full w-1 place-self-end"
		viewBox="0 0 1 10"
		preserveAspectRatio="none"
	>
		<path d="M0.5 0 V10" stroke="var(--stroke-color)" stroke-width="1" fill="none" />
	</svg>
	<!-- left vline -->
	<svg class="ml-16 h-full w-1" viewBox="0 0 1 10" preserveAspectRatio="none">
		<path d="M0.5 0 V10" stroke="var(--stroke-color)" stroke-width="1" fill="none" />
	</svg>
</div>

<style lang="postcss">
	@reference "../app.css";
</style>
