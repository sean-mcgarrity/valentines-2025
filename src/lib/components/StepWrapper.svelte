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
	class={'max-w-screen absolute flex w-full flex-col gap-10 p-8 ' + className}
>
	{#if steps.current !== 'initial'}
		<button
			onclick={steps.prev}
			class="text-left text-sm font-light text-pink-950">Back</button
		>
	{/if}
	{@render children()}
</div>
