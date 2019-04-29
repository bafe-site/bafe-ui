<template>
    <div class="container">
      <div class="login-container">
          <a href="/" class="logo-container"><img src="../assets/img/iconBafe.png"></a>
          <span class="error-message" v-if="errorMsg"> {{ errorMsg }} </span>
          <div class="input-set__vertical">
            <input id="login-username" v-model="email" type="text" class="input" placeholder="Username">
          </div>
          <div class="input-set__vertical">
             <input id="login-password" v-model="password" type="password" class="input" placeholder="Password">
          </div>
        <button class="button button--main" @click="login">Login</button>
      </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    login () {
      let self = this
      const user = {
        email: self.email,
        password: self.password
      }
      if (self.isValid) {
        this.$store.dispatch('authRequest', user).then(() => {
          self.goTo('admin')
        }).catch(() => {
          self.errorMsg = 'Username atau password salah'
        })
      }
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

<style lang="scss" scoped>

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
  margin: 80px auto;
  padding: 15px 50px;
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
