<script>
import Profile from "../components/Profile.vue";

export default {
  name: "home",
  components: {
    Profile,
},
};
</script>

<template>
  <div class="flex h-full flex-col justify-center items-center">
    <Profile />
  </div>
</template>
