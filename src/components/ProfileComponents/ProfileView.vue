<template>
  <div class="text-white flex flex-col items-center justify-center">
    <div>
      <img
        src="../../assets/images/alireza.jpg"
        class="w-28 md:w-44 h-auto rounded-full"
        alt="profile image"
      />
    </div>
    <!-- Name text -->
    <v-typical
      class="blink Fira text-zinc-300 text-md md:text-2xl"
      :steps="['Hello!👋', 500, `Im ${UserName}`, 1000]"
      :loop="1"
      :wrapper="'h2'"
    ></v-typical>
    <!-- Job title text -->
    <v-typical
      class="blink Fira text-fuchsia-600 border-b	border-dashed text-sm md:text-xl"
      :steps="['Programer', 500, 'Front-end Developer', 1000]"
      :loop="1"
      :wrapper="'h2'"
    ></v-typical>
  </div>
</template>
<script>
import VTypical from "vue-typical";

export default {
  name: "ProfileView",
  components: {
    VTypical,
  },
  data() {
    return {
        UserName:"Alireza Shahbaziyan"
    }
  },
};
</script>