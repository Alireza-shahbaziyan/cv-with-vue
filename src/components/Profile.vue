<script>
import ProfileView from "./ProfileComponents/ProfileView.vue";
import ProfileInfo from "./ProfileComponents/ProfileInfo.vue";

export default {
  name: "Profile",
  components: {
    ProfileView,
    ProfileInfo,
  },
};
</script>

<template>
  <div
    class="
      w-5/6
      lg:h-3/4
      h-3/4
      flex flex-col
      lg:flex-row
      md:justify-center
      lg:items-center
      justify-between
      border
      p-1
      rounded-lg
      border-primary
    "
  >
    <ProfileView class="lg:w-2/5 h-2/5" />
    <ProfileInfo class="lg:w-3/5 h-3/5" />
  </div>
</template>
