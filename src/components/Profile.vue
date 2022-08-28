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
      lg:w-11/12
      h-3/4
      flex flex-col
      lg:flex-row
      md:justify-center
      lg:items-center
      justify-between
      md:border
      lg:border-0
      p-1
      rounded-3xl
      border-t-zinc-300
      md:border-emerald-500
      bg-zinc-900/[.4]
    "
  >
    <ProfileView class="lg:w-2/5 h-2/5" />
    <ProfileInfo class="lg:w-3/5 h-3/5" />
  </div>
</template>
