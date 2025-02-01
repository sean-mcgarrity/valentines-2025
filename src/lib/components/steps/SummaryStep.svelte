<script>
	import { goto } from '$app/navigation';
	import { result } from '$lib/state/result.svelte';
	import { steps } from '$lib/state/steps.svelte';
	import Button from '../neobrutalism/Button.svelte';
	import Card from '../neobrutalism/Card.svelte';
	import StepWrapper from '../StepWrapper.svelte';

	$inspect(result).with(console.log);

	let hasConfirmed = $state(false);

	const doConfirm = async () => {
		if (!hasConfirmed) {
			hasConfirmed = false;
			await fetch(
				'https://olzutuliykdpdtmknhxx.supabase.co/rest/v1/valentines-dates',
				{
					method: 'Post',
					body: JSON.stringify({
						data: result
					}),
					headers: {
						'Content-Type': 'application/json',
						apikey:
							'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9senV0dWxpeWtkcGR0bWtuaHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTE1MzIsImV4cCI6MjAwNDQyNzUzMn0.IuygV0a-lu8C5cYTsbKtVrSZzu72Behwy6Fw3TAbS8c'
					}
				}
			);
			steps.goto('finished');
		}
	};
</script>

<StepWrapper>
	<Card class="gap-4 text-center">
		<div class=" font-worksans text-4xl font-bold">Summary</div>
		<div>on {result.day}</div>
		{#if result.activity === 'other'}
			<div>we'll enjoy an as-of-yet-undecided activity</div>
		{:else if result.activity === 'dinner'}
			<div>
				we'll enjoy some {result.location} food
			</div>
		{:else if result.activity === 'painting'}
			<div>we'll do our best to engage in some cute painting</div>
		{/if}
		<div>
			while enjoying some {Object.keys(result.extras).join(', ')}
		</div>
	</Card>
	<Button onclick={doConfirm} class="text-3xl">Confirm</Button>
</StepWrapper>
