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
  <div class=" h-screen overflow-hidden box-border m-0">
    <Navbar/>
    <RouterView />
  </div>
    
</template>
<style scoped>

div{
  background-image: url('./assets/images/back-lg-11.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
@media only screen and (max-width: 768px) {
    div{
      background-image: url('./assets/images/back-sm-11.jpg');
    }
}
</style>