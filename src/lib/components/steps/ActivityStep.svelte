<script lang="ts">
	import MultiChoiceStep from '../MultiChoiceStep.svelte';
</script>

<MultiChoiceStep
	title="Activity"
	icon="🎇"
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
			value: 'painting',
			label: 'Painting',
			icon: '🎨'
		},
		{
			value: 'movie',
			label: 'Movie',
			icon: '📽️'
		},
		{
			value: 'other',
			label: 'Other',
			icon: '❓'
		}
	] as const}
/>
