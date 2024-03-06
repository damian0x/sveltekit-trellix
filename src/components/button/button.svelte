<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Props, type Events } from './index';

	type $$Props = Props;
	type $$Events = Events;
</script>

<ButtonPrimitive.Root
	class="flex w-full justify-center rounded-md bg-brand-blue px-1 py-1 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
