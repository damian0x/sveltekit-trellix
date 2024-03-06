<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import { Label } from '../label/index';
	import { Input } from '../input/index';

	export let label: any;
	let uid = uuidv4();
	export let id: any = undefined;
	let compId = id ?? uid;
</script>

<div>
	<Label for={compId}>{label}</Label>
	<div class="mt-2">
		<Input {...$$restProps} id={compId} />
	</div>
</div>
