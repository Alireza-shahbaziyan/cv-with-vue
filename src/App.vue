<script>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./views/Navbar.vue";

export default{
    data() {
        return {
            name: "alireza",
        };
    },
    components: { Navbar }
}
</script>

<template>
  <div class=" h-screen  box-border m-0">
    <Navbar/>
    <RouterView />
  </div>
    
</template>
<style scoped>
div{
  background-image: url('./assets/images/back-lg2.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>