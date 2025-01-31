<script lang="ts">
	import { result } from '$lib/state/result.svelte';
	import { fade } from 'svelte/transition';
	import Button from '../neobrutalism/Button.svelte';
	import Card from '../neobrutalism/Card.svelte';
	import StepWrapper from '../StepWrapper.svelte';
	import c from 'classnames';
	import { steps } from '$lib/state/steps.svelte';

	const options = [
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
			value: 'hands',
			label: 'Hand holding',
			icon: '👫'
		}
	] as const;
</script>

<StepWrapper>
	<Card>
		<div class="text-pink-800 font-title text-4xl font-bold">Extras</div>
		<div class="text-pink-700 flex flex-col gap-1">
			<div>Select which optional extras you would like with your date</div>
		</div>
	</Card>
	<div class="flex flex-col gap-6">
		{#each options as option}
			{@const active = result.extras[option.value] === true}
			<Button
				onclick={() =>
					(result.extras[option.value] = !result.extras[option.value])}
				class={c('relative flex flex-row py-6', active && '!bg-nb-green')}
			>
				{#if false === active}
					<span out:fade class={c('absolute top-4 text-6xl')}
						>{option.icon}</span
					>
				{:else}
					<span
						out:fade
						class={c('absolute top-4 text-6xl brightness-0 invert')}>✔️</span
					>
				{/if}
				<span class="my-auto ml-16 text-2xl">{option.label}</span>
			</Button>{/each}
	</div>
	<Button onclick={steps.next}>Finish -></Button>
</StepWrapper>
