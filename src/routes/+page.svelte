<script lang="ts">
	import ActivityStep from '$lib/components/steps/ActivityStep.svelte';
	import DaysStep from '$lib/components/steps/DaysStep.svelte';
	import ExtrasStep from '$lib/components/steps/ExtrasStep.svelte';
	import FinishedStep from '$lib/components/steps/FinishedStep.svelte';
	import InitialStep from '$lib/components/steps/InitialStep.svelte';
	import LangStep from '$lib/components/steps/LangStep.svelte';
	import LocationStep from '$lib/components/steps/LocationStep.svelte';
	import SecurityStep from '$lib/components/steps/SecurityStep.svelte';
	import SummaryStep from '$lib/components/steps/SummaryStep.svelte';
	import { steps } from '$lib/state/steps.svelte';
</script>

<main
	class="bg-pink-100 relative mx-auto flex h-screen max-w-lg flex-col justify-center font-montserrat text-lg tracking-wide"
>
	<div class="wavy absolute inset-0 h-full w-full"></div>
	{#if steps.current === 'initial'}
		<InitialStep />
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
	{:else if steps.current === 'finished'}
		<FinishedStep />
	{/if}
</main>

<style lang="postcss">
	body {
		background-color: red;
	}
	main {
		background: theme('colors.nb.pink');
	}
	.wavy {
		box-shadow:
			2px 3px 20px black,
			0 0 60px theme('colors.nb.pink') inset;
		background: theme('colors.nb.pink');
	}
</style>
