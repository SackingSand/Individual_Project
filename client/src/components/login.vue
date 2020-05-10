<template>
  <div class="page-header header-filter" style="align-items : center; overflow : scroll;">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
          <div class="card card-login">
            <form class="form" @submit.prevent="login">
              <div class="card-header card-header-primary text-center">
                <h4 class="card-title">Login</h4>
                <div class="social-line">
                  <a href="#pablo" class="btn btn-just-icon btn-link">
                    <i class="fa fa-google-plus">
                      </i>
                  </a>
                </div>
              </div>
              <div class="card-body">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">mail</i>
                    </span>
                  </div>
                  <input v-model="email" type="email" class="form-control" placeholder="Email...">
                </div>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input v-model="password" type="password" class="form-control" placeholder="Password...">
                </div>
              </div>
              <p class="description text-center">{{ this.error }}</p>
              <div class="footer text-center">
                <a @click="login" href="#" class="btn btn-primary btn-wd btn-lg">Continue</a>
              </div>
              <!-- <div class="footer text-center">
                <a href="#" class="btn btn-primary btn-link btn-wd btn-lg">Register</a>
              </div> -->
            </form>
            <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure" class="btn btn-block btn-social btn-google"><span class="fa fa-google"></span> Sign in with Google</GoogleLogin>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GoogleLogin from 'vue-google-login';

export default {
    components : {
      GoogleLogin
    },
    name : `login`,
    data() {
        return {
            email : `alan@gbf.go`,
            password : `123456`,
            error : ``,       
            params: {
                    client_id: '121252242533-ejkv268938ffai2al52emoje775v6ap9.apps.googleusercontent.com'
            }
        }
    },
    methods : {
        login() {
          axios({
            method : `post`,
            url : `http://localhost:3000/user/login`,
            data : {
              email : this.email,
              password : this.password
            }
          })  .then(result => {
            console.log(result)
                localStorage.setItem(`access_token`, result.data.token)
                this.$emit(`loggedIn`);
          })  .catch( err => {
                this.error = err.response
          })
        },
        onSuccess(googleUser) {
            // console.log(googleUser);
            // console.log(googleUser.getBasicProfile());
            axios({
                method : `post`,
                url : `http://localhost:3000/user/googleauth`,
                headers : {
                    google_token : googleUser.getAuthResponse().id_token
                }
            })  .then(({data}) => {
                this.$emit(`loggedIn`);
                localStorage.setItem(`access_token`, data.token)
            })  .catch( err => {
                  console.log(err.response)
            })
        },
        onFailure(){}
    }
}
</script>

<style>

</style>