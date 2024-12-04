<template>
  <div id="app">
    <login/>
  </div>
</template>

<script>
import login from './components/login.vue';

export default {
  components:{
   login
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
#app{
  width: 100%;
  height: 100%;
}
</style>