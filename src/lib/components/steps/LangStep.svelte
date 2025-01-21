<script lang="ts">
	import { fade } from 'svelte/transition';
	import StepWrapper from '../StepWrapper.svelte';
	import { steps } from '$lib/state/steps.svelte';

	let spanishSelected = $state(false);
</script>

<StepWrapper>
	<div class="font-title text-2xl font-semibold text-pink-800">Language selection</div>
	{#if spanishSelected}
		<div transition:fade class="rounded border-2 border-red-300 bg-red-200 p-3 text-red-950">
			<span class="font-medium">Error!</span> I don't speak spanish, so I can't actually make the site
			in Spanish. Try again.
		</div>
	{/if}
	<div class="flex flex-col gap-1 text-pink-700">
		<div>Hola seniorita, given you speak Spanish, please choose a lanuage to continue with.</div>
	</div>
	<div class=" flex gap-8 font-title text-xl text-pink-800">
		<button
			class="w-full cursor-pointer text-6xl transition-all active:scale-90"
			onclick={() => steps.next()}>🇺🇸</button
		>
		<button
			class="w-full cursor-pointer text-6xl transition-all active:scale-90"
			onclick={() => (spanishSelected = true)}>🇪🇸</button
		>
	</div>
</StepWrapper>
