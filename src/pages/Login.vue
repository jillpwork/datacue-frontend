<template>
  <div class="row unset-margin fix-size">
    <div class="col-lg-4 col-md-6 col-sm-12 login-lg-back">
      <div class="login-right-container">
        <img src="/images/logo.svg" style="width: 225px;">
        <h5 style="margin: 25px 0 0;">Automatically personalize your</h5>
        <h5>website & email to each visitor</h5>
      </div>
    </div>
    <div class="col-lg-8 col-md-6 col-sm-12">
      <div class="row">
        <div class="col-sm-12 signup-link">
          <p style="margin-top:20px;">Don't have an account? <a href="#" class="yellow-link">Sign up</a></p>
        </div>
        <div class="col-sm-12">
          <div class="login-container">
            <img src="/images/plants-left.svg" class="plants-left">
            <h3 class="text-center">Sign in to Data Cue</h3><hr>
            <fg-input label="Email" v-model="cred.username"></fg-input>

            <div class="row">
              <div class="col-sm-6">
                <label class="control-label">Password</label>
              </div>
              <div class="col-sm-6 text-right">
                <span @click="showPassword" class="show-password"><span class="ti-eye"></span> Show password</span @click="">
              </div>
            </div>
            <fg-input :type="passwordType" v-model="cred.password"></fg-input>    
            <button type="button" class="btn btn-login btn-warning" @click="Login">Login</button>
            <img src="/images/plants-right.svg" class="plants-right">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import domainConfig from '../domain_config.js'
  export default {
    data() {
      return {
        passwordType: 'password',
        cred: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      showPassword: function() {
         this.passwordType = this.passwordType === 'password' ? 'text' : 'password'
      },
      Login: function() {
        this.axios.post(domainConfig.domain + 'login', this.cred).then(response => {
          if (response.data === true) {
            // Localstorage set true for login user
            window.localStorage.setItem('login-status', true)
            // Vuex state set true for login user
            this.$store.commit('load', true)
            this.$router.push({ 'name': 'dashboard' })
            const color = Math.floor((Math.random() * 4) + 1)
            this.$notify({
              message: 'Login Successfull.',
              icon: 'fa fa-gift',
              horizontalAlign: "center",
              verticalAlign: "top",
              type: "success"
            })
          }
        }, response => {
          console.log("Not Logged in")
          // const color = Math.floor((Math.random() * 4) + 1)
          this.$notify({
            message: 'Invalid Username or Password!!',
            icon: 'fa fa-gift',
            horizontalAlign: "center",
            verticalAlign: "top",
            type: "danger"
          })
        })
      }
    }
  }
</script>