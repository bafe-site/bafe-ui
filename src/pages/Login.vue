<template>
    <div class="container">
      <div class="login-container">
          <a href="/" class="logo-container"><img src="../assets/img/iconBafe.png"></a>
          <div class="input-set__vertical">
            <input id="login-username" v-model="email" type="text" class="input" placeholder="Username">
          </div>
          <div class="input-set__vertical">
             <input id="login-password" v-model="password" type="password" class="input" placeholder="Password">
          </div>
        <button class="button button--main">Login</button>
      </div>
    </div>
</template>

<script>
var date = new Date()
date.setDate(date.getDate() + 30)

export default {
  name: 'theLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // onSubmit () {
    //   axios
    //     .post('http://localhost/bafe/public/api/auth/login', {
    //       email: this.email,
    //       password: this.password
    //     })
    //     .then(res => {
    //       this.$cookie.set('token', res.data.token, { expires: date })
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
  }
}
</script>

<style lang="scss">
.input-set__vertical {
  display: flex;
  flex-direction: column;

  & > {
    input {
      text-align: center;
      margin: 10px 0px;
    }
  }
}

.logo-container {
  margin-bottom: 45px;
  & > img{
    height: 80px;
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
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
