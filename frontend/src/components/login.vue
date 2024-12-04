<template>
  <div class="login" >
    <input type="email" name="username" placeholder="log in" >
    <input type="password" name="password" placeholder="password">
    <button type="submit" id="btn">
      submit
    </button>   
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return {
      username: '',
      password: ''
    }
  },
}
</script>
<style>
</style>
