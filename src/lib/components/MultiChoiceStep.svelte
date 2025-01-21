<script lang="ts">
	import { result, type Result } from '$lib/state/result.svelte';
	import { steps, type Step } from '$lib/state/steps.svelte';
	import StepWrapper from './StepWrapper.svelte';
	import cx from 'classnames';

	let {
		options,
		description,
		title,
		key,
		customHandle
	}: Record<'description' | 'title', string> & {
		key: keyof Result;
		options: { value?: string; label: string; icon?: string; step?: Step }[];
		icon?: string;
		customHandle?: (value: (typeof options)[number]) => void;
	} = $props();

	let handle = (chosenOption: (typeof options)[number]) => {
		if (customHandle) return customHandle(chosenOption);
		if (chosenOption.value) {
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
	<div class="font-title text-4xl font-bold text-pink-800">{title}</div>
	<div class="flex flex-col gap-1 text-pink-700">
		<div>{description}</div>
	</div>
	<div class=" flex flex-col gap-6 font-sans text-xl text-pink-800">
		{#each options as option}
			<button
				class={cx(
					'rounded border border-pink-300 bg-pink-200 px-8 py-3',
					option.icon && 'text-left'
				)}
				onclick={() => handle(option)}
			>
				{#if option.icon}
					<span class="mr-4 align-middle text-4xl">{option.icon} </span>
				{/if}
				{option.label}</button
			>
		{/each}
	</div>
</StepWrapper>
