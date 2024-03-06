<script lang="ts">
	import { Label } from '../../components/label';
	import { Input } from '../../components/input';
	import { Button } from '../../components/button';

	export let actionResult: any;
</script>

<div class="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<h2
			id="signup-header"
			class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
		>
			Sign up
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
		<div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
			<form class="space-y-6" method="post">
				<div>
					<Label for="email">
						Email address{' '}
						{#if actionResult?.errors?.email}
							<span id="email-error" class="text-brand-red">
								{actionResult.errors.email}
							</span>
						{/if}
					</Label>
					<Input
						autofocus
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						aria-describedby={actionResult?.errors?.email ? 'email-error' : 'signup-header'}
						required
					/>
				</div>

				<div>
					<Label for="password">
						Password{' '}
						{#if actionResult?.errors?.password}
							<span id="password-error" class="text-brand-red">
								{actionResult.errors.password}
							</span>
						{/if}
					</Label>
					<Input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						aria-describedby="password-error"
						required
					/>
				</div>

				<Button type="submit">Sign in</Button>

				<div class="text-sm text-slate-500">
					Already have an account?{' '}
					<a class="underline" href="/login"> Log in </a>
					.
				</div>
			</form>
		</div>
		<div class="mt-8 space-y-2 mx-2">
			<h3 class="font-bold text-black">Privacy Notice</h3>
			<p>
				We won't use your email address for anything other than authenticating with this demo
				application. This app doesn't send email anyway, so you can put whatever fake email address
				you want.
			</p>
			<h3 class="font-bold text-black">Terms of Service</h3>
			<p>
				This is a demo app, there are no terms of service. Don't be surprised if your data
				dissappears.
			</p>
		</div>
	</div>
</div>
