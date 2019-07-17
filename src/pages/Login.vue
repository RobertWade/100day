<template>
  <Layout
    class="login"
    :style="{ backgroundImage: 'url(' + require('@/images/background.jpg') + ')' }"
  >
  <div class="login-wrapper">
    <h2>Username</h2>
  <Inputfield class="input"/>
  <h2>Login</h2>
  <Inputfield :type="'password'" class="input"/>
  <button @click="login" class="primary-button">Login</button>
  </div>
    <div>
    </div>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Login.vue";
import Inputfield from '@/components/Inputfield'
export default {
  components: {
    Layout,
    Inputfield
  },
  metaInfo: {
    title: "Hello, world!"
  },
  methods:{
    login(){
      this.$router.push({path:'/instagram'})
    }
  }
};
</script>

<style lang="scss" scoped>

.home-links a {
  margin-right: 1rem;
}

.login {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-image: "../../images/background.jpg";
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-wrapper{
  width:350px;
  max-width: 90vw;
  display:flex;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

h2{
  margin-left: 5px;
}

.input{
  margin-top:5px;
  margin-bottom: 30px;
}
</style>
