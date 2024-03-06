<script lang="ts">
	import { Label as LabelPrimitive } from 'bits-ui';

	type $$Props = LabelPrimitive.Props;
	type $$Events = LabelPrimitive.Events;
</script>

<LabelPrimitive.Root
	class="block text-sm font-medium leading-6 text-gray-900"
	{...$$restProps}
	on:mousedown
>
	<slot />
</LabelPrimitive.Root>
