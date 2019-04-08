<template>
    <div>
        <div class="loginForm">
            <div class="isiLoginForm">
                <h4 class="labelLogin">Login</h4>
                <div class="loginInput">
                    <input type="text" class="form-control" placeholder="Username" label="Username" describedby="basidAddon1">
                </div>
                <h4 class="labelPassword">Password</h4>
                <div class="passwordInput">
                    <input type="text" class="form-control" placeholder="Password" label="Password" describedby="basicAddon2">
                </div>
                <button class="submitLogin" type="submit">Login</button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'theLogin',
  mounted () {
    const Axios = require('axios')
    Axios
      .post('http://localhost/bafe/public/api/auth/login', {
        email: 'broto@gmail.com',
        password: 'brotobroto'
      })
      .then(response => (console.log(response)))
  }
}
</script>

<style>
.loginForm {
    height: 200px;
    width: 400px;
    background: #f1f1f1;
    margin: 10% auto;
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
}
.isiLoginForm {
    margin: auto;
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
