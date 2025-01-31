<script lang="ts">
	import type { Snippet } from 'svelte';
	import c from 'classnames';

	const {
		children,
		class: className = '',
		padded = true,
		onclick = () => console.log('unimplemented button click'),
		...rest
	}: {
		children: Snippet;
		padded?: boolean;
		class?: string;
		onclick?: () => void;
	} = $props();
</script>

<button
	{onclick}
	{...rest}
	class={c(
		'w-full cursor-pointer rounded border-2 border-black bg-white font-worksans text-black drop-shadow-brutal transition-all duration-300 ease-in active:scale-75 aria-pressed:scale-75',
		padded && 'px-4 py-2',
		className
	)}
>
	{@render children()}
</button>
