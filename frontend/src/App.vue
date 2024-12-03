<template>
  <div class="main">
    <div class="box">
      <div class="box-2">
        <div class="box-0"></div>
        <div class="box-1">
          <div class="about">
            <h2 class="txt-about">Protect yourself and your community with our Community safety with Geolocation map tracking (CSWAPP). Report incidents, connect with emergency services, and access vital safety information, all from the convenience of your device.
Be part of a safer digital future<span> Join us today!</span>
            </h2>
        </div>
          <div class="sign">
            <router-link to="" v-once class="login">Log in</router-link>
            <router-link to="" v-once class="signup">Sign Up</router-link>
          </div>
        </div>
        <div class="box-3">
        <div class="title">
          <div class="txt-title">CSWAPP</div>
        </div>
        <div class="tagline">
          <div class="txt-tag">Your Safety is Our Priority</div>
        </div>
        </div>
        <div class="box-4">
        <div class="box-img">
        </div>
        </div> 
      </div>
    </div>
    <router-view />
  </div>
</template>

<style scope>
.login{
  text-decoration: none;
  
}
.login,.signup{
  font-size: large;
  font-weight: bold;
  padding: 20px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 14px;
  transition: 500ms ease-in-out;
}
.signup{
  text-decoration: none;
  background-color: white;
  color: black;
}
span{
  color: yellow;
}
.txt-about{
  font-size: 28px;
  max-width: 550px;
  text-align: center;
  
}
.about, .sign{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;

}
.login:hover{
  background-color: white;
  color: black;
}
.signup:hover{
  border: 2px solid rgb(255, 255, 255);
}
.about{
  height: 60%;
}
.sign{
  height: 40%;
  align-items: start;
  padding-top: 20px;
  gap: 20px;
}
.txt-tag{
  color: forestgreen;
  text-shadow: 1px 2px 1px rgb(0, 0, 0,.4);
}
.txt-title{
  font-size:9em;
  text-shadow: 1px 2px 6px rgb(0, 0, 0,.4);
}
.tagline{
  font-size: 1.5em;
}
.title, .tagline{
  width: 100%;
  display: flex;
  justify-content: end;
}
.title{
  height: 60%;
  align-items: end;
}
.tagline{
  height: auto;
  z-index: 0;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 600;
  color: #fffcef;
}

.main {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

}

.box {
  width: 100%;
  height: 100%;

}

.H-nav {
  position: sticky;
  top: 0%;
  z-index: 1;
  width: 100%;
  padding: 15px;
  display: flex;
  justify-content: end;
  gap: 5px;
  background-color: #333333;
}

.box .box-1,.box-2,.box-3,.box-4{
  height: 100vh;
}
.box .box-1{
  width:35%;
  border-left: none;
  border-start-end-radius: 244px;
  border-end-end-radius: 244px;
  border-top: none;
  background-color:#cd3c17;
  box-shadow: 1px 2px 7.5px rgb(0, 0, 0,.8);
}
.box-0{
  z-index: -1;
  position: absolute;
  height: 100vh;
  width: 30%;
  background-color: #cd3c17;
  border-start-end-radius: 244px;
  border-end-end-radius: 244px;
  animation-name: flash;
  animation-duration: 3s;
  animation-direction: normal;
  transition: all 2s linear;
}
@keyframes flash {
  from{
    width: 100%;
    background-color: #fffcef;
    position: absolute;
    z-index: 2;
  }
  to{
    width: 0%;
    background-color: #cd3c17;
    position: absolute;
    display: none;
    z-index: 2;
  }
}
.box .box-3,.box-4{
  width: 35%;
}
.box-4{
  display: flex;
  justify-content: start;
  align-items: center;

}
.box .box-2{
  width: 100%;
  background-color: rgb(235, 215, 35);
  display: flex;
}
.box-img{
  width: 600px;
  height: 600px;
  background-image: url(/src/assets/bg\ cp-em-tap.jpg) ;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: drop-shadow(5px 5px 6.5px black);
}


</style>