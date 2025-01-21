<script lang="ts">
	import { steps } from '$lib/state/steps.svelte';
	import StepWrapper from '../StepWrapper.svelte';
	import cx from 'classnames';

	let firstWrongClicked = $state(false);
	let secondWrongClicked = $state(false);
	let thirdWrongClicks = $state(false);
</script>

<StepWrapper>
	<div class="font-title text-2xl font-semibold text-pink-800">Security question</div>
	<div class="flex flex-col gap-1 text-pink-700">
		<div>
			This site doesnt have a login, so to make sure you're the right person, please select the
			option below that WAS one of our topics of conversations at the Terrace Café.
		</div>
		<div class="my-4 grid grid-cols-2 gap-3">
			<button
				class={cx(
					'flex-start flex cursor-pointer flex-col gap-3 overflow-hidden rounded border border-pink-300 bg-pink-200 pb-2 text-center text-lg font-medium transition-transform',
					firstWrongClicked && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (firstWrongClicked = true)}
			>
				<img
					src="https://www.simplypsychology.org/wp-content/uploads/5-Love-Languages-featured-image-1.jpg"
					alt=""
				/>
				Each other's love language</button
			>
			<button
				class={cx(
					'flex-start flex cursor-pointer flex-col gap-3 overflow-hidden rounded border border-pink-300 bg-pink-200 pb-2 text-center text-lg font-medium transition-transform',
					secondWrongClicked && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (secondWrongClicked = true)}
			>
				<img src="https://thumb.photo-ac.com/2a/2a22c43748403c94aaa68736490388c0_t.jpeg" alt="" />
				Our favourite types of dog</button
			>
			<button
				class={cx(
					'flex-start flex cursor-pointer flex-col gap-3 overflow-hidden rounded border border-pink-300 bg-pink-200 pb-2 text-center text-lg font-medium'
				)}
				onclick={() => steps.next()}
				><img
					src="https://s.france24.com/media/display/2ef398a0-0a82-11e9-b3fd-005056a964fe/w:1280/p:1x1/gaddafi-m_0.jpg"
					alt=""
				/>
				Colonel Muamar Gadaffi's brutal death</button
			>
			<button
				class={cx(
					'flex-start flex cursor-pointer flex-col items-center gap-3 overflow-hidden rounded border border-pink-300 bg-pink-200 pb-2 text-center text-lg font-medium transition-transform',
					thirdWrongClicks && 'pointer-events-none scale-90 opacity-50'
				)}
				onclick={() => (thirdWrongClicks = true)}
			>
				<img
					src="https://easydrawingguides.com/wp-content/uploads/2023/02/how-to-draw-a-summer-vacation-featured-image-1200.png"
					alt=""
				/>
				Vacation ideas</button
			>
		</div>
	</div></StepWrapper
>
