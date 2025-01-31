<script lang="ts">
	import { result, type Result } from '$lib/state/result.svelte';
	import { steps, type Step } from '$lib/state/steps.svelte';
	import Button from './neobrutalism/Button.svelte';
	import Card from './neobrutalism/Card.svelte';
	import StepWrapper from './StepWrapper.svelte';
	import cx from 'classnames';

	let {
		options,
		description,
		title,
		key,
		customHandle,
		icon
	}: Record<'description' | 'title', string> & {
		key: keyof Result;
		options: { value?: string; label: string; icon?: string; step?: Step }[];
		icon?: string;
		customHandle?: (value: (typeof options)[number]) => void;
	} = $props();

	let handle = (chosenOption: (typeof options)[number]) => {
		if (customHandle) return customHandle(chosenOption);
		if (chosenOption.value && typeof result[key] !== 'object') {
			// @ts-ignore
			result[key] = chosenOption.value;
		}
		if (chosenOption.step) {
			steps.goto(chosenOption.step);
		} else {
			steps.next();
		}
	};
</script>

<StepWrapper>
	<Card class="gap-4" {icon}>
		<div class="font-title text-4xl font-bold">{title}</div>
		<div class="flex flex-col gap-1">
			<div>{description}</div>
		</div>
	</Card>
	<div class=" text-pink-800 flex flex-col gap-6 font-sans text-2xl">
		{#each options as option}
			<Button
				class={cx('relative', option.icon && 'text-left', 'py-8 pl-24')}
				onclick={() => handle(option)}
			>
				{#if option.icon}
					<span class="stroked absolute left-2 top-4 mr-4 text-7xl"
						>{option.icon}
					</span>
				{/if}
				{option.label}</Button
			>
		{/each}
	</div>
</StepWrapper>

<style lang="postcss">
	.stroked {
		-webkit-text-stroke: 3px black;
		text-stroke: 3px black;
		filter: drop-shadow(3px 3px 0 black);
	}
</style>
