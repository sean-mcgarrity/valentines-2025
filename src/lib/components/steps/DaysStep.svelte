<script lang="ts">
	import { result } from '$lib/state/result.svelte';
	import { steps } from '$lib/state/steps.svelte';
	import StepWrapper from '../StepWrapper.svelte';

	const days = [
		{
			value: 'thursday',
			label: 'Thursday 13th'
		},
		{
			value: 'friday',
			label: 'Valentines Day ❤️'
		},
		{
			value: 'saturday',
			label: 'Saturday 15th'
		},
		{
			value: 'sunday',
			label: 'Sunday 16th'
		}
	] as const;

	let handleChooseDay = (chosenDay: (typeof days)[number]) => {
		result.day = chosenDay.value;
		steps.next();
	};
</script>

<StepWrapper>
	<div class="font-title text-4xl font-bold text-pink-800">What days work?</div>
	<div class="flex flex-col gap-1 text-pink-700">
		<div>When are you free?</div>
	</div>
	<div class=" flex flex-col gap-8 font-sans text-xl text-pink-800">
		{#each days as dayOption}
			<button
				class="rounded border border-pink-300 bg-pink-200 py-2"
				onclick={() => handleChooseDay(dayOption)}>{dayOption.label}</button
			>
		{/each}
	</div>
</StepWrapper>
