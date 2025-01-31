<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import Button from '../neobrutalism/Button.svelte';
	import Card from '../neobrutalism/Card.svelte';
	import StepWrapper from '../StepWrapper.svelte';
	import cx from 'classnames';

	let firstWrongClicked = $state(false);
	let secondWrongClicked = $state(false);
	let thirdWrongClicks = $state(false);
</script>

<StepWrapper>
	<div class="text-pink-700 flex flex-col gap-1">
		<Card class="" icon="🔒">
			<div class="text-pink-800 font-title text-2xl font-semibold">
				Safety first
			</div>
			<div>
				This site doesnt have a login, so confirm your identity, please select
				the option below that WAS one of our topics of conversations at the
				Terrace Café.
			</div>
		</Card>
		<div class="my-4 grid grid-cols-2 gap-3">
			<Button
				padded={false}
				class={cx(
					'flex-start flex cursor-pointer flex-col items-center gap-3 pb-2 text-center text-lg font-medium transition-transform',
					firstWrongClicked && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (firstWrongClicked = true)}
			>
				<img
					src="https://www.simplypsychology.org/wp-content/uploads/5-Love-Languages-featured-image-1.jpg"
					alt=""
				/>
				Love languages</Button
			>
			<Button
				padded={false}
				class={cx(
					'flex-start flex cursor-pointer flex-col items-center gap-3 pb-2 text-center text-lg font-medium transition-transform',
					secondWrongClicked && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (secondWrongClicked = true)}
			>
				<img
					src="https://thumb.photo-ac.com/2a/2a22c43748403c94aaa68736490388c0_t.jpeg"
					alt=""
				/>
				Dogs</Button
			>
			<Button
				padded={false}
				class={cx(
					'flex-start flex cursor-pointer flex-col items-center gap-3 pb-2 text-center text-lg font-medium transition-transform'
				)}
				onclick={() => steps.next()}
				><img
					src="https://s.france24.com/media/display/2ef398a0-0a82-11e9-b3fd-005056a964fe/w:1280/p:1x1/gaddafi-m_0.jpg"
					alt=""
				/>
				Gadaffi's death</Button
			>
			<Button
				padded={false}
				class={cx(
					'flex-start flex cursor-pointer flex-col items-center gap-3 pb-2 text-center text-lg font-medium transition-transform',
					thirdWrongClicks && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (thirdWrongClicks = true)}
			>
				<img
					src="https://easydrawingguides.com/wp-content/uploads/2023/02/how-to-draw-a-summer-vacation-featured-image-1200.png"
					alt=""
				/>
				Dream vacations</Button
			>
		</div>
	</div></StepWrapper
>
