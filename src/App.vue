<script>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div class="bg-zinc-900">
    <v-typical
      class="blink text-white"
      :steps="['Hello', 1000, 'Hello World !', 500, 'Hello World ! 👋', 1000]"
      :loop="Infinity"
      :wrapper="'h2'"
    ></v-typical>
    <RouterView />
  </div>
</template>