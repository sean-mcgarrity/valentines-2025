<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import { slide } from 'svelte/transition';
	import StepWrapper from '../StepWrapper.svelte';
	import c from 'classnames';
	import Button from '../neobrutalism/Button.svelte';
	import Card from '../neobrutalism/Card.svelte';

	const countdown =
		new Date('2025-02-14').getTime() < Date.now()
			? 0
			: Math.round(
					Math.abs(
						(new Date('2025-02-14').getTime() - Date.now()) /
							(24 * 60 * 60 * 1000)
					)
				);

	let clickedNo = $state(false);
</script>

<StepWrapper>
	<Card class="gap-8">
		<div class="text-center text-4xl underline underline-offset-4">
			Hey Shannen
		</div>
		<div class="mx-auto flex w-4/5 flex-col gap-4 text-center">
			<div class="flex flex-col text-xl">With valentine's just</div>
			<div class="heart mx-auto flex flex-col">
				<div class="m-auto -translate-y-3">
					<div
						class="stroked text-out font-redhat text-6xl font-extrabold tracking-widest text-white"
					>
						{countdown}
					</div>
				</div>
			</div>
			<div class="text-pink-700 flex flex-col text-center text-xl">
				days away, shall we go on a wee romantic valentines date?
			</div>
		</div>
	</Card>
	<div class=" font-bol text-pink-800 flex text-xl tracking-wide">
		<button
			out:slide={{ axis: 'x', duration: 1000 }}
			class={c(
				'cursor-pointer text-white underline underline-offset-4 drop-shadow-outline filter transition-all duration-1000 ease-in',
				clickedNo ? 'm-0 w-0 overflow-hidden p-0' : 'mr-8 w-full px-4 py-2',
				'!duration-1000'
			)}
			onclick={() => (clickedNo = true)}
		>
			No
		</button>
		<Button
			onclick={steps.next}
			class={c(
				clickedNo ? 'px-4 py-4 text-4xl' : 'px-4 py-2 text-xl',
				'!duration-1000'
			)}>Yes</Button
		>
	</div>
</StepWrapper>

<style lang="postcss">
	.heart {
		--c: theme('colors.nb.pink');
		width: 160px;
		aspect-ratio: 1;
		background:
   /* 1 */
			radial-gradient(circle at 60% 65%, var(--c) 64%, #0000 65%) top left/50%
				50%,
			/* 2 */ radial-gradient(circle at 40% 65%, var(--c) 64%, #0000 65%) top
				right/50% 50%,
			/* 3 */ conic-gradient(from -45deg at 50% 85.5%, var(--c) 90deg, #0000 0)
				bottom/100% 50%;
		background-repeat: no-repeat;
		filter: drop-shadow(3px 0px 0px black) drop-shadow(-3px 0px 0px black)
			drop-shadow(0px 3px 0px black) drop-shadow(0px -3px 0px black)
			drop-shadow(2px 0px 0px black) drop-shadow(4px 0px 0px black)
			drop-shadow(5px 0px 0px black) drop-shadow(5px 5px 0px black);
	}

	.stroked {
		-webkit-text-stroke: 3px black;
		text-stroke: 3px black;
	}
</style>
