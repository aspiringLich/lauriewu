<script lang="ts">
	import { fade } from 'svelte/transition';

	let { visible }: { visible: boolean } = $props();
</script>

<!-- Hidden without JavaScript, since nothing would ever dismiss it. -->
{#if visible}
	<div
		class="loading-screen fixed inset-0 z-50 grid place-items-center bg-background noscript:hidden"
		role="status"
		aria-label="Loading"
		out:fade={{ duration: 600 }}
	>
		<div class="size-8 animate-spin rounded-full border border-neutral-700 border-t-neutral-300"></div>
	</div>
{/if}

<style>
	/* Failsafe: if JavaScript breaks or an image hangs, don't block the page forever. */
	.loading-screen {
		animation: give-up 0.6s 8s forwards;
	}

	@keyframes give-up {
		to {
			opacity: 0;
			visibility: hidden;
		}
	}
</style>
