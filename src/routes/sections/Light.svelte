<script lang="ts">
	const { class: _class } = $$props;
</script>

<div class="flex justify-center {_class}">
	<div class="dark box large-box align-stretch flex flex-col shadow-md">
		<div class="align-start flex flex-row">
		<div class="stripe w-12 shrink-0 border-r-2"></div>
			<div class="flex shrink-0 basis-72 flex-col border-r-2">
				<li class="title bg-amber-500/30! border-amber-950/30! p-2 max-md:px-8!">Light</li>
				<li class="p-2 max-md:px-8!">Tissue paper, pen, gouache, oil, tree bark, paper</li>
				<li class="p-2 max-md:px-8!">23 x 18 inches <span class="grow"></span>2024</li>
				<li class="grow p-2">&ZeroWidthSpace;</li>
			</div>
			<li class="prose-sm min-h-0 overflow-scroll p-4">
				<p>
					Because I had usually worked with thicker textures, for this piece, I explored layers with
					transparency by experimenting with paper, paper thinned down in oil, and tissue paper.
					Then, I enhanced the effect with lighting. The pen drawings on the back of the page
					connect with the drawings in the front under the light. For each piece, I chose color
					schemes of only one warm and one cold color to supplement the hue of the light that
					revealed the transparency.
				</p>
			</li>
		</div>
		<div class="content relative aspect-[8/3]">
			<enhanced:img
				src="$lib/images/Laurie_Wu_Tree_1.png"
				alt="Tree 1"
				class="absolute-auto-center img-glow top-[36%] left-[17%] z-10"
				style="--size: 33%"
			/>
			<enhanced:img
				src="$lib/images/Laurie_Wu_Tree_2.png"
				alt="Tree 2"
				class="absolute-auto-center img-glow top-[36%] left-[52%] z-10"
				style="--size: 33%"
			/>
			<enhanced:img
				src="$lib/images/Laurie_Wu_Tree_3.png"
				alt="Tree 3"
				class="absolute-auto-center img-glow top-[36%] left-[85%] z-10"
				style="--size: 33%"
			/>
			<div class="content-inner"></div>
		</div>
		<span class="tape"></span>
	</div>
</div>
