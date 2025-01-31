<script lang="ts">
	import { result } from '$lib/state/result.svelte';
	import { steps } from '$lib/state/steps.svelte';
	import Button from '../neobrutalism/Button.svelte';
	import Card from '../neobrutalism/Card.svelte';
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
	<Card class="relative">
		<div class="stroked absolute -right-4 -top-4 rotate-12 text-7xl">🗓️</div>
		<div class="text-2xl font-semibold">Dates for dates</div>
		<div class="flex flex-col gap-1">When are you free?</div>
	</Card>
	<div class="flex flex-col gap-6 text-2xl">
		{#each days as dayOption}
			<Button onclick={() => handleChooseDay(dayOption)}
				>{dayOption.label}</Button
			>
		{/each}
	</div>
</StepWrapper>
