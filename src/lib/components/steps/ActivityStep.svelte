<script lang="ts">
	import MultiChoiceStep from '../MultiChoiceStep.svelte';
</script>

<MultiChoiceStep
	title="Activity"
	description="And what would you like to spend the evening doing?"
	key="activity"
	options={[
		{
			value: 'dinner',
			label: 'Dinner',
			icon: '🍝',
			step: 'location'
		},
		{
			value: 'pool',
			label: 'Pool',
			icon: '🎱'
		},
		{
			value: 'axes',
			label: 'Axe Throwing',
			icon: '🪓'
		},
		{
			value: 'movie',
			label: 'Movie',
			icon: '📽️'
		}
	] as const}
/>
