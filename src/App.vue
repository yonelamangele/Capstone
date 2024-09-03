<template>
  <navBar-comp/>
  <router-view/>
  <background-comp/>
  <footer-comp/>
</template>

<script>

import NavBarComp from './components/NavBarComp.vue'
import BackgroundComp from './components/BackgroundComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components:{
    NavBarComp,
    BackgroundComp,
    FooterComp
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&family=Oswald:wght@200..700&family=Rubik+Glitch&family=Sevillana&display=swap'); 
  
  body{
    background-image: url('https://yonelamangele.github.io/Capstone/images/Screenshot%202024-09-02%20172305.png');
    background-repeat: no-repeat;
    background-size: cover;
    
    color: white;
  }
</style>
