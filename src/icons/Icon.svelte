<script lang="ts">
  import iconsHref from "./icons.svg?url";

  enum SIZES {
    md,
    xl
  }

  export let name = "";
  export let size: SIZES = SIZES.md;
  export let spin = false;

  let classNames: any = {
    md: "w-4 h-4",
    xl: "w-8 h-8",
  };
</script>

<svg
class={`${classNames[size]} inline self-center ${ spin ? "animate-spin" : ""}`}>
  <use href={`${iconsHref}#${name}`} />
</svg>