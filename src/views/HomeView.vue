<script>

import Profile from "../components/Profile.vue";
import Skills from "../components/Skills.vue";
export default {
  name: "HomeView",
  components: {
    Profile,
    Skills,
  },
  
};
</script>

<template>
  <div class="flex flex-col  justify-center items-center">
    <Profile class="my-4"/>
    <!-- <Skills class="my-4"/> -->
  </div>
</template>
