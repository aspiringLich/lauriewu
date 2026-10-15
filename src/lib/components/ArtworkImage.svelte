<script lang="ts">
	import type { Picture } from 'vite-imagetools';

	interface Props {
		src: Picture;
		alt: string;
		/**
		 * Empty space beside the image, as a fraction of the image's own width (`0.25` = a quarter).
		 * Use it for pieces that aren't rectangular: if something sticks out on the left, add
		 * `padRight` so the main body of the piece ends up centered. Undershooting is fine, since
		 * the part that sticks out can hang a little off-center.
		 */
		padLeft?: number;
		padRight?: number;
		/** The image never gets taller than this, so the whole piece fits on screen. */
		maxHeight?: string;
		/** Rendered width hint for picking a resolution. `auto` measures it (lazy images only). */
		sizes?: string;
	}

	let {
		src,
		alt,
		padLeft = 0,
		padRight = 0,
		maxHeight = '85svh',
		sizes = 'auto, 100vw'
	}: Props = $props();

	// Width ÷ height of the image plus its padding.
	const aspectRatio = $derived((src.img.w / src.img.h) * (1 + padLeft + padRight));
</script>

<!-- Three columns: left padding, image, right padding. -->
<div
	class="mx-auto grid *:col-start-2"
	style:grid-template-columns="{padLeft}fr 1fr {padRight}fr"
	style:width="min(100%, {maxHeight} * {aspectRatio})"
>
	<enhanced:img src={src} {alt} {sizes} loading="lazy" decoding="async" class="w-full" />
</div>
