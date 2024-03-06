<script lang="ts">
	import '../app.css';
	import IconLink from '../icons/IconLink.svelte';
	import LoginIcon from '../icons/LoginIcon.svelte';
	import LogoutIcon from '../icons/LogoutIcon.svelte';

	let userId: any;
</script>

<body class="h-screen bg-slate-100 text-slate-900">
	<div class="h-full flex flex-col min-h-0">
		<div
			class="bg-slate-900 border-b border-slate-800 flex items-center justify-between py-4 px-8 box-border"
		>
			<a href="/home" class="block leading-3 w-1/3">
				<div class="font-black text-2xl text-white">Trellix</div>
				<div class="text-slate-500">a SvelteKit Demo</div>
			</a>
			<div class="flex items-center gap-6">
				<IconLink
					href="https://www.youtube.com/watch?v=RTHzZVbTl6c&list=PLXoynULbYuED9b2k5LS44v9TQjfXifwNu&pp=gAQBiAQB"
					icon="/yt_icon_mono_dark.png"
					label="Videos"
				/>
				<IconLink
					href="https://github.com/remix-run/example-trellix"
					label="Source"
					icon="/github-mark-white.png"
				/>
				<IconLink href="https://remix.run/docs/en/main" icon="/r.png" label="Docs" />
			</div>
			<div class="w-1/3 flex justify-end">
				{#if userId}
					<form method="post" action="/logout">
						<button class="block text-center">
							<LogoutIcon />
							<br />
							<span class="text-slate-500 text-xs uppercase font-bold"> Log out </span>
						</button>
					</form>
				{:else}
					<a href="/login" class="block text-center">
						<LoginIcon />
						<br />
						<span class="text-slate-500 text-xs uppercase font-bold"> Log in </span>
					</a>
				{/if}
			</div>
		</div>

		<div class="flex-grow min-h-0 h-full">
			<slot />
		</div>
	</div>
</body>
