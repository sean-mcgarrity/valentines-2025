<script>
	import { result } from '$lib/state/result.svelte';
	import StepWrapper from '../StepWrapper.svelte';
</script>

<StepWrapper
	>SUMMARY STEP
	{JSON.stringify(result, null, 2)}
</StepWrapper>
