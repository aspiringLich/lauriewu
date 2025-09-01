<script lang="ts">
	import seal from '$lib/seal.png';
</script>

<div class="h-[80vh] self-center grow w-4xl text-stone-50" id="header">
	<h1 class="mt-8 ml-8 font-serif text-8xl leading-19">LAURIE</h1>
	<h1 class="ml-8 -mt-3 font-serif text-8xl">
		WU<img
			src={seal}
			class="relative bottom-[0.67rem] left-[0.2rem] inline-block h-[4.3rem]"
			alt="Seal"
		/>
	</h1>
</div>

<style lang="postcss">
	@reference "../app.css";

	#header {
		/*@apply bg-stone-600;*/
	}
</style>
