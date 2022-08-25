<script>
import { RouterLink, RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Skills from "./components/Skills.vue";
import Footer from "./components/Footer.vue";

export default{
    data() {
        return {
            name: "alireza",
        };
    },
    components: { HomeView, Skills, Footer }
}
</script>

<template>
  <div class="flex flex-col justify-around">
    <!-- <RouterView /> -->
    <HomeView class="h-screen"/>
    <Skills class="h-screen"/>
    <Footer/>
  </div>
    
</template>
<style scoped>
div{
  background-image: url('./assets/images/back-sm1.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* height: 100vh; */
}
@media screen and (min-width: 768px){
  div{
  background-image: url('./assets/images/back-md1.jpg');
  }
}
@media screen and (min-width: 1024px){
  div{
  background-image: url('./assets/images/back-lg1.jpg');
  }
}
</style>