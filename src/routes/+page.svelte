<script lang="ts">
	import ActivityStep from '$lib/components/steps/ActivityStep.svelte';
	import DaysStep from '$lib/components/steps/DaysStep.svelte';
	import ExtrasStep from '$lib/components/steps/ExtrasStep.svelte';
	import InitialStep from '$lib/components/steps/InitialStep.svelte';
	import LangStep from '$lib/components/steps/LangStep.svelte';
	import LocationStep from '$lib/components/steps/LocationStep.svelte';
	import SecurityStep from '$lib/components/steps/SecurityStep.svelte';
	import SummaryStep from '$lib/components/steps/SummaryStep.svelte';
	import StepWrapper from '$lib/components/StepWrapper.svelte';
	import { result } from '$lib/state/result.svelte';
	import { steps } from '$lib/state/steps.svelte';

	$inspect(steps.current).with(console.log);
	$inspect(result).with(console.log);
</script>

<main
	class="relative mx-auto flex h-screen max-w-lg flex-col justify-center bg-pink-100 text-lg tracking-wide"
>
	<div class="wavy absolute inset-0 h-full w-full"></div>
	{#if steps.current === 'initial'}
		<InitialStep />
	{:else if steps.current === 'rejection'}
		<StepWrapper>BOO HOO FOR ME</StepWrapper>
	{:else if steps.current === 'security'}
		<SecurityStep />
	{:else if steps.current === 'langSelect'}
		<LangStep />
	{:else if steps.current === 'day'}
		<DaysStep />
	{:else if steps.current === 'activity'}
		<ActivityStep />
	{:else if steps.current === 'location'}
		<LocationStep />
	{:else if steps.current === 'extras'}
		<ExtrasStep />
	{:else if steps.current === 'summary'}
		<SummaryStep />
	{/if}
</main>

<style lang="postcss">
	body {
		background-color: red;
	}
	main {
		background: theme('colors.pink.100');
	}
	.wavy {
		box-shadow:
			2px 3px 20px black,
			0 0 60px theme('colors.pink.200') inset;
		background: theme('colors.pink.100');
	}
</style>
