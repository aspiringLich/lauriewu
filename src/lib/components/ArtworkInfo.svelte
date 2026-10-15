<script lang="ts">
	interface Props {
		title: string;
		/** e.g. "Acrylic on canvas" */
		medium: string;
		/** e.g. `36" x 24"` */
		size: string;
		/** Not displayed (yet). */
		year?: number;
		/** Artist statement. Not displayed (yet). */
		description?: string;
	}

	let { title, medium, size }: Props = $props();
</script>

<div class="flex flex-col items-center gap-1 text-center">
	<h2 class="font-display text-5xl font-normal tracking-wide text-neutral-100 sm:text-6xl">
		{title}
	</h2>
	<p class="m-0 font-slab text-neutral-400">{medium}</p>
	<p class="m-0 font-slab text-sm text-neutral-500">{size}</p>
</div>
