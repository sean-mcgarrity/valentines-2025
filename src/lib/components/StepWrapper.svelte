<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let { class: className = '', children } = $props();

	const transitionTiming = 600;
</script>

<div
	in:fly={{
		y: 400,
		duration: transitionTiming,
		delay: transitionTiming,
		easing: quadInOut
	}}
	out:fly={{
		y: -400,
		duration: transitionTiming * 0.6,
		easing: quadInOut
	}}
	class={'max-w-screen absolute flex w-full flex-col gap-4 p-6 ' + className}
>
	{#if steps.current !== 'initial' && steps.current !== 'finished'}
		<button
			onclick={steps.prev}
			class="text-left text-sm font-medium text-white underline underline-offset-4"
			>Back</button
		>
	{/if}
	{@render children()}
</div>
