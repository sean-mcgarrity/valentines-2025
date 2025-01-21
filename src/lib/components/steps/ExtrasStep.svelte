<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import MultiChoiceStep from '../MultiChoiceStep.svelte';
</script>

<MultiChoiceStep
	title="Extras"
	description="extras"
	key="extras"
	options={[
		{
			value: 'flowers',
			label: 'Flowers',
			icon: '🌹',
			step: 'flowers'
		},
		{
			value: 'chocolates',
			label: 'Chocolates',
			icon: '🍫'
		},
		{
			value: 'whites',
			label: "White's Tavern",
			icon: '🐟'
		},
		{
			label: 'None of the above',
			step: 'summary'
		}
	] as const}
/>
