<script lang="ts">
	import type { ActionData } from './$types';
	import { Button } from '../button';
	import { Label } from '../label';
	import { LabeledInput } from '../label-input';

	export let form: ActionData;
	let isCreating = form.formData?.get('intent') === 'createBoard';
</script>

<form method="POST" class="p-8 max-w-md">
	<input type="hidden" name="intent" value="createBoard" />
	<div>
		<h2 class="font-bold mb-2 text-xl">New Board</h2>
		<LabeledInput label="Name" name="name" type="text" required />
	</div>

	<div class="mt-4 flex items-center gap-4">
		<div class="flex items-center gap-1">
			<Label for="board-color">Color</Label>
			<input id="board-color" name="color" type="color" value="#cbd5e1" class="bg-transparent" />
		</div>
		<Button type="submit">{isCreating ? 'Creating...' : 'Create'}</Button>
	</div>
</form>
