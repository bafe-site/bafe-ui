<template>
    <div class="container">
      <div class="login-container">
          <a href="/" class="logo-container"><img src="../assets/img/iconBafe.png"></a>
          <span class="error-message" v-if="errorMsg"> {{ errorMsg }} </span>
          <div class="input-set__vertical">
            <input id="register-name" v-model="message" type="text" class="input" placeholder="Nama">
          </div>
          <div class="input-set__vertical">
            <input id="register-username" v-model="email" type="text" class="input" placeholder="Email">
          </div>
          <div class="input-set__vertical">
             <input id="register-password" v-model="password" type="password" class="input" placeholder="Password">
          </div>
        <button class="button button--main" @click="register" :disabled="!isValid">Register</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data () {
    return {
      message: '',
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    register () {
      let self = this
      axios
        .post('http://localhost/bafe/public/api/auth/register', {
          name: self.message,
          email: self.email,
          password: self.password
        })
        .then(res => {
          console.log(self.data)
        })
        .catch(error => {
          self.errorMsg = 'Username dan password tidak sesuai'
          console.log(error)
        })
    },
    goTo (name) {
      this.$router.push({ name: name })
    }
  },
  computed: {
    isValid () {
      return this.email && this.password
    }
  }
}
</script>

<style lang="scss">

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-message {
  color: #FF4040;
  margin-bottom: 10px;
}

.input-set__vertical {
  & > {
    input {
      text-align: center;
    }
  }
}

.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 400px;
  width: 400px;
  padding: 15px 50px;
  margin: 50px 0px;
  background: #f1f1f1;
}

.logo-container {
  margin-bottom: 45px;
  & > img{
    height: 80px;
  }
}

button {
  margin-top: 10px;
}

::-webkit-input-placeholder {
  text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
  text-align: center;
}

::-moz-placeholder {  /* Firefox 19+ */
  text-align: center;
}

:-ms-input-placeholder {
  text-align: center;
}
</style>
