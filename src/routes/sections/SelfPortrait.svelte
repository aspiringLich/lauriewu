<script lang="ts">
	const { class: _class } = $$props;
</script>

<div class="flex justify-center {_class}">
	<div class="box flex shadow-md max-md:flex-col max-md:w-lg max-sm:w-96">
		<div class="content relative aspect-[4/3] xl:w-2xl md:w-lg">
		<enhanced:img
			src="$lib/images/1Self Portrait Tmain.png"
			alt="Self Portrait"
			class="absolute top-[-18%] left-[-8%] w-full z-10 -rotate-[10deg] lg:-rotate-[5deg] img-shadow"
		/>
		</div>
		<div class="flex flex-col lg:w-72 md:w-52 max-md:border-l-0! max-md:border-t-2 max-md:h-96">
			<li class="title">Self Portrait</li>
			<li>Acrylic, Yarn, Screws, Cardboard on Canvas</li>
			<li>36x24 inches<span class="grow"></span>2024</li>
			<li class="stripe"></li>
			<li class="prose-sm flex-[1_1_0] flex-col! overflow-scroll px-8!">
				<!-- TODO: maybe this could be a folded piece of paper? -->
				<p>
					When I tried to take a reference photo of myself for a self-portrait, I accidentally
					stepped on a nail, which went through my shoe. Although it was painful, this mishap
					inspired me. Above the canvas, I installed nails that are entangled with yarn.
				</p>
				<p>
					Stepping on a nail represents one of the many challenges that I will experience in my
					life, and this self-portrait reminds me of the importance of bravery in the face of
					challenges.
				</p>
			</li>
		</div>
		<span class="tape"></span>
		<span class="tape"> </span>
	</div>
</div>

<!-- REDO WITH NESTED FLEXBOXES -->
