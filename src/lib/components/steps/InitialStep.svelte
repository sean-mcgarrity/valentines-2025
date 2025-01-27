<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import StepWrapper from '../StepWrapper.svelte';

	const countdown =
		new Date('2025-02-14').getTime() < Date.now()
			? 0
			: Math.round(
					Math.abs(
						(new Date('2025-02-14').getTime() - Date.now()) /
							(24 * 60 * 60 * 1000)
					)
				);
</script>

<StepWrapper>
	<div class="font-title text-4xl font-bold text-pink-800">Hey Shannen</div>
	<div class="flex flex-col gap-1 text-pink-700">
		<div>
			Valentine's is just {countdown} days away. Would you like to go on a wee romantic
			date?
		</div>
	</div>
	<div class="relative mx-auto -ml-4">
		<div class="heart heart2 absolute rotate-3 scale-110"></div>
		<div class="heart absolute rotate-3"></div>
	</div>
	<div class=" flex gap-8 font-title text-xl text-pink-800">
		<button
			class="w-full cursor-pointer rounded border border-pink-300 bg-pink-200 px-4 py-2"
			onclick={() => steps.goto('rejection')}>No</button
		>
		<button
			class="w-full cursor-pointer rounded border border-pink-400 bg-pink-300 px-4 py-2"
			onclick={() => steps.next()}>Yes</button
		>
	</div>
</StepWrapper>

<style lang="postcss">
	.heart {
		--c: theme('colors.pink.500');
		width: 80px;
		aspect-ratio: 1;
		background:
   /* 1 */
			radial-gradient(circle at 60% 65%, var(--c) 64%, #0000 65%) top left/50%
				50%,
			/* 2 */ radial-gradient(circle at 40% 65%, var(--c) 64%, #0000 65%) top
				right/50% 50%,
			/* 3 */ conic-gradient(from -45deg at 50% 85.5%, var(--c) 90deg, #0000 0)
				bottom/100% 50%;
		background-repeat: no-repeat;
	}

	.heart2 {
		--c: theme('colors.pink.600');
	}
</style>
