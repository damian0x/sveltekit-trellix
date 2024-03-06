<script lang="ts">
    export let icon: string;
    export let href: string;
    export let label: string;
</script>

<a href={href} class="text-slate-500 text-xs uppercase font-bold text-center">
    <img src={icon} aria-hidden class="inline-block h-8" />
    <span class="block mt-2">{label}</span>
</a>
  