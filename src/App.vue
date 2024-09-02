<template>
  <router-view/>
  <navBar-comp/>
  <background-comp/>
</template>

<script>

import NavBarComp from './components/NavBarComp.vue'
import BackgroundComp from './components/BackgroundComp.vue';

export default {
  components:{
    NavBarComp,
    BackgroundComp
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=New+Amsterdam&family=Oswald:wght@200..700&family=Sevillana&display=swap');  
  
  nav {
    padding: 10px;
    align-items: end;
  }

  body{
    background-image: url('/images/canva-untitled-MAEGTRdTBm4.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    /* height: 0vh; */
    font-family: "New Amsterdam", sans-serif;
  }

</style>
