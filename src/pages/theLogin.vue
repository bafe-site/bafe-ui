<template>
    <div>
        <form class="loginForm" v-on:submit.prevent="onSubmit">
          <div class="logoBafe">
            <a href="/"><img class="logo" src="../assets/img/iconBafe.png"></a>
          </div>
            <div class="isiLoginForm">
                <h4 class="labelLogin">Login</h4>
                <div class="loginInput">
                    <input required v-model="email" type="text" class="form-control" placeholder="Username" label="Username">
                </div>
                <h4 class="labelPassword">Password</h4>
                <div class="passwordInput">
                    <input required v-model="password" type="password" class="form-control" placeholder="Password" label="Password">
                </div>
                <input class="submitLogin" type="submit" name="submit" value="Login">
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'theLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      axios
        .post('http://localhost/bafe/public/api/auth/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          this.$cookie.set('token', res.data.meta.token)
          console.log(res.data.meta.token)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.logo{
  height: 100px;
  width: 300px;
}
.logoBafe {
  margin: 0 auto;
}
.loginForm {
  height: 300px;
  width: 400px;
  background: #f1f1f1;
  margin: 8% auto;
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
}
.isiLoginForm {
    margin: 0 auto;
}
.labelLogin{
    margin: 5px;
}
.labelPassword {
    margin: 5px;
}
.passwordInput{
    margin-bottom: 15px;
}
</style>
