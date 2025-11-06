<script lang="ts">
	const { class: _class } = $$props;
</script>

<div class="flex justify-center {_class}">
	<div class="box large-box flex shadow-md max-md:flex-col">
		<div class="content relative aspect-[4/3]">
			<enhanced:img
				src="$lib/images/1Self Portrait Tmain.png"
				alt="Self Portrait"
				class="absolute-auto-center left-[40%] top-[50%] img-shadow z-10 -rotate-[10deg] lg:-rotate-[5deg]"
				style="--size: 90%"
			/>
			<div class="content-inner"></div>
		</div>
		<div class="flex flex-col md:w-72">
			<li class="title max-md:px-8!">Self Portrait</li>
			<li class="max-md:px-8!">Acrylic, Yarn, Screws, Cardboard on Canvas</li>
			<li class="max-md:px-8!">36x24 inches<span class="grow"></span>2024</li>
			<li class="stripe"></li>
			<li class="prose-sm md:flex-[1_1_0] flex-col! overflow-scroll md:px-8! px-12!">
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
