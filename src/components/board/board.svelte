<script lang="ts">
	import type { ActionData } from './$types';
	import { INTENTS } from '$lib/types';
	import Icon from '../../icons/Icon.svelte';

	export let name: string;
	export let id: number;
	export let color: string;

	export let form: ActionData;
	let isDeleting = form.state !== 'idle';
</script>

{#if !isDeleting}
	<a
		href="/board/{id}"
		class="w-60 h-40 p-4 block border-b-8 shadow rounded hover:shadow-lg bg-white relative"
		style="border-color: {color}"
	>
		<div class="font-bold">{name}</div>
		<form method="POST">
			<input type="hidden" name="intent" value={INTENTS.deleteBoard} />
			<input type="hidden" name="boardId" value={id} />
			<button
				aria-label="Delete board"
				class="absolute top-4 right-4 hover:text-brand-red"
				type="submit"
				on:click|stopPropagation
			>
				<Icon name="trash" />
			</button>
		</form>
	</a>
{/if}
