<script lang="ts">
	import seal from '$lib/seal.png';
	import corner from '$lib/svg/corner.svg';
</script>

<div
	class="grid max-h-[80vh] w-full grow grid-cols-[auto_1fr]
	self-center text-stone-50"
	id="header"
>
	<!-- logo -->
	<div>
		<h1 class="heading mt-8 ml-8 font-serif text-8xl leading-19">LAURIE</h1>
		<h1 class="-mt-3 -mb-8 ml-8 font-serif text-8xl">
			WU<img
				src={seal}
				class="relative bottom-[0.67rem] left-[0.2rem] inline-block h-[4.3rem]"
				alt="Seal"
			/>
		</h1>
	</div>

	<div class="row-span-2 mt-10 mr-18" id="corner"></div>

	<!-- left vline -->
	<svg class="mt-4 ml-18 w-1 self-stretch" viewBox="0 0 1 10" preserveAspectRatio="none">
		<path d="M0.5 0 V10" stroke="var(--stroke-color)" stroke-width="1" fill="none" />
	</svg>
</div>

<style lang="postcss">
	@reference "../app.css";

	#corner {
		border-image-source: url($lib/svg/corner.svg);
		border-image-slice: 43 43 1.5 1.5;
		border-image-width: 6rem 6rem calc( 6rem / 43 * 3 ) calc( 6rem / 43 * 3 );
	}
</style>
