<script lang="ts">
	import { fade, slide } from 'svelte/transition';
	import StepWrapper from '../StepWrapper.svelte';
	import { steps } from '$lib/state/steps.svelte';
	import Card from '../neobrutalism/Card.svelte';
	import Button from '../neobrutalism/Button.svelte';

	let spanishSelected = $state(false);
</script>

<StepWrapper>
	<Card class="gap-4" icon="🌍">
		<div class="text-pink-800 gap-6 font-title text-2xl font-semibold">
			Language selection
		</div>
		<div>
			Hola seniorita, given you speak <span class="font-medium italic"
				>La Eśpanôẽl</span
			>, please choose a language to continue with.
		</div>
	</Card>
	{#if spanishSelected}
		<div transition:fade>
			<Card class="!bg-black text-nb-red">
				<div>
					<span class="font-medium">Uh Oh...</span> I was hoping you just wouldn't
					click it. Only American works.
				</div>
			</Card>
		</div>
	{/if}
	<div class=" text-pink-800 flex gap-8 font-title text-xl">
		<div class="w-full">
			<Button
				class="w-full cursor-pointer text-8xl"
				onclick={() => steps.next()}>🇺🇸</Button
			>
		</div>
		{#if !spanishSelected}
			<div out:slide={{ axis: 'x', duration: 1000 }} class="w-full">
				<Button
					class="w-full cursor-pointer text-8xl "
					onclick={() => (spanishSelected = true)}>🇪🇸</Button
				>
			</div>
		{/if}
	</div>
</StepWrapper>
