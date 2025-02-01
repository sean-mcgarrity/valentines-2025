<script lang="ts">
	import MultiChoiceStep from '../MultiChoiceStep.svelte';
</script>

<MultiChoiceStep
	title="Food"
	description="Hmmmm which countries culture shall we experience?"
	key="location"
	options={[
		{
			value: 'italian',
			label: 'Italian',
			icon: '🍕'
		},
		{
			value: 'burgers',
			label: 'Burgers',
			icon: '🍔'
		},
		{
			value: 'irish',
			label: 'Irish',
			icon: '🍲'
		},
		{
			value: 'mexican',
			label: 'Mexican',
			icon: '🌮'
		}
	] as const}
/>
