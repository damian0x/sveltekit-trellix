<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { Board } from '../../components/board';
	import { NewBoard } from '../../components/new-board';

	export let boards: PageData;
	export let form: ActionData;
</script>

<div class="h-full">
	<NewBoard form />
	<div class="p-8">
		<h2 class="font-bold mb-2 text-xl">Boards</h2>
		<nav class="flex flex-wrap gap-8">
			{#if boards}
				{#each boards as board (board.id)}
					<Board name={board.name} id={board.id} color={board.color} form />
				{/each}
			{/if}
		</nav>
	</div>
</div>
