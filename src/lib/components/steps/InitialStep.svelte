<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import StepWrapper from '../StepWrapper.svelte';

	const countdown =
		new Date('2025-02-14').getTime() < Date.now()
			? 0
			: Math.round(
					Math.abs((new Date('2025-02-14').getTime() - Date.now()) / (24 * 60 * 60 * 1000))
				);
</script>

<StepWrapper>
	<div class="font-title text-4xl font-bold text-pink-800">Hey Shannen</div>
	<div class="flex flex-col gap-1 text-pink-700">
		<div>
			Valentine's is just {countdown} days away. Would you like to go on a wee romantic date?
		</div>
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
