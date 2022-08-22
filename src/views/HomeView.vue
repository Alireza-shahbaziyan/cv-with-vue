<script>
import Profile from "../components/Profile.vue";
export default {
  name: "HomeView",
  components: {
    Profile,
  },
};
</script>

<template>
  <div class="h-screen w-full flex justify-center items-center ">
    <Profile />
  </div>
</template>
