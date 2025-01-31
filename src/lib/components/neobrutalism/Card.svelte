<script lang="ts">
	import c from 'classnames';
	const { children, class: className = '', icon = '' } = $props();
</script>

<div
	class={c(
		'relative flex flex-col rounded-lg border-2 border-black bg-white p-6 drop-shadow-brutal',
		className
	)}
>
	{#if icon !== ''}
		<div class="stroked absolute -right-4 -top-4 rotate-12 text-7xl">
			{icon}
		</div>
	{/if}
	{@render children()}
</div>

<style lang="postcss">
	.stroked {
		-webkit-text-stroke: 3px black;
		text-stroke: 3px black;
		filter: drop-shadow(3px 3px 0 black);
	}
</style>
