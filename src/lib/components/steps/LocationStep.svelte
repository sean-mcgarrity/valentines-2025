<script lang="ts">
	import MultiChoiceStep from '../MultiChoiceStep.svelte';
</script>

<MultiChoiceStep
	title="Location"
	description="And what would you like to spend the evening doing?"
	key="location"
	options={[
		{
			value: 'villaitalia',
			label: 'Villa Italia',
			icon: '🍕'
		},
		{
			value: 'yoburgers',
			label: 'Yo Burgers',
			icon: '🍔'
		},
		{
			value: 'whites',
			label: "White's Tavern",
			icon: '🐟'
		},
		{
			value: 'tacquitos',
			label: 'Tacquitos',
			icon: '🌮'
		}
	] as const}
/>
