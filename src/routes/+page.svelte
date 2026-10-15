<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ArtworkImage from '$lib/components/ArtworkImage.svelte';
	import ArtworkInfo from '$lib/components/ArtworkInfo.svelte';

	// `?w=…` lists the widths to generate; each visitor downloads the smallest one that looks sharp.
	import selfPortrait from '$lib/images/1Self Portrait Tmain.png?w=600;1200;1800;2400&enhanced';
	import light1 from '$lib/images/Laurie_Wu_Tree_1.png?w=400;800;1200&enhanced';
	import light2 from '$lib/images/Laurie_Wu_Tree_2.png?w=400;800;1200&enhanced';
	import light3 from '$lib/images/Laurie_Wu_Tree_3.png?w=400;800;1200&enhanced';
</script>

<svelte:head>
	<title>Laurie Wu</title>
</svelte:head>

<Hero />

<main id="artwork">
	<article>
		<!-- The canvas is the right part of the image, so pad the right to keep it centered. -->
		<ArtworkImage
			src={selfPortrait}
			alt="Self portrait of the artist wincing while pulling yarn tangled around a nail, with wasps on a cardboard panel beside the canvas"
			padRight={0.3}
		/>
		<ArtworkInfo
			title="Self Portrait"
			medium="Acrylic, yarn, screws, cardboard on canvas"
			size={'36" x 24"'}
			year={2024}
			description="When I tried to take a reference photo of myself for a self-portrait, I accidentally stepped on a nail, which went through my shoe. Although it was painful, this mishap inspired me. Above the canvas, I installed nails that are entangled with yarn. Stepping on a nail represents one of the many challenges that I will experience in my life, and this self-portrait reminds me of the importance of bravery in the face of challenges."
		/>
	</article>

	<article>
		<div class="side-by-side">
			<ArtworkImage src={light1} alt="Backlit tissue paper piece in yellow and blue" />
			<ArtworkImage src={light2} alt="Backlit tissue paper piece in red and blue" />
			<ArtworkImage src={light3} alt="Backlit tissue paper piece in magenta and green" />
		</div>
		<ArtworkInfo
			title="Light"
			medium="Tissue paper, pen, gouache, oil, tree bark, paper"
			size={'23" x 18"'}
			year={2024}
			description="Because I had usually worked with thicker textures, for this piece, I explored layers with transparency by experimenting with paper, paper thinned down in oil, and tissue paper. Then, I enhanced the effect with lighting. The pen drawings on the back of the page connect with the drawings in the front under the light. For each piece, I chose color schemes of only one warm and one cold color to supplement the hue of the light that revealed the transparency."
		/>
	</article>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 10rem;
		width: 100%;
		max-width: 64rem;
		margin-inline: auto;
		padding: 6rem 1.5rem 10rem;
	}

	article {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	/* Stacked on phones, in a row on anything bigger. */
	.side-by-side {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.5rem;
	}

	@media (min-width: 40rem) {
		.side-by-side {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			align-items: center;
		}
	}
</style>
