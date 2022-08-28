<template>
  <div class="pt-4">
    <nav class="h-14 w-full flex items-center bg-black/[.3]">
    <div
      class="
        w-full
        md:w-1/2
        h-full
        text-slate-200
        flex
        justify-evenly
        items-center
      "
    >
      <RouterLink to="/">
        <div class="btn btn-ghost rounded-md hover:bg-black/[.7]">Home</div>
      </RouterLink>
      <RouterLink to="/skills">
        <div class="btn btn-ghost rounded-md hover:bg-black/[.7]">Skills</div>
      </RouterLink>
      <RouterLink to="/CU">
        <div class="btn btn-ghost rounded-md hover:bg-black/[.7]">Contact use</div>
      </RouterLink>
    </div>
  </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "Navbar",
};
</script>