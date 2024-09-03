<template>
    <div class="para">
      <h3> Hello There! We're Capture Words, a world of powerful anime quotes <br> where you can capture words of your interest to customize your home, your office or any of your personal spaces. <br> Explore our amazing deals and have fun.</h3> 
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
   h3 {
    text-align: center;
    font-family: "Rubik Glitch", system-ui;
    font-size: larger;
  }

    @keyframes swing {
      20% {
        transform: rotate3d(0,0,1,10deg);
      }
      40% {
        transform: rotate3d(0,0,1,-10deg);
      }
      60% {
        transform: rotate3d(0,0,1,5deg);
      }
      80% {
        transform: rotate3d(0,0,1,-5deg);
      }
      to {
        transform: rotate3d(0,0,1,0deg);
      }
    }

    .para {
      animation: swing ease-in-out 8s;
      transform-origin: center -20px;
    }

</style>
