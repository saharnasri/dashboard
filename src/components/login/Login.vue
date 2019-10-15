<template>
    <div>
        <div class="row">
                <div class="login">
                    <div class="login-logo">
                        <img src="../../assets/images/logo150.png"  alt="logo" title="log">

                    </div>
                    <div class="login-content">
                        <div class="login-title">
                            <h3>ورود کاربران</h3>
                        </div>
                        <form @submit="onSubmit">
                            <div class="form-group">
                                <label for="username">نام کاربری</label>
                                <input type="text" class="form-control" id="username" v-model="username"  placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="password">رمز عبور</label>
                                <input type="password" class="form-control" id="password" v-model="password" placeholder="">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label mr-3" for="exampleCheck1"><small>مرا به خاطر بسپار</small></label>
                            </div>
                            <div class="btn-div">
                                <button type="submit" class="btn btn-lb lgnbtn"><router-link to="/dashboard" class="lgnbtn-a">ورود</router-link></button>
                            </div>
                        </form>
                    </div>
                    <div class="mt-4 mx-3">
                        <p><small><a href="#">رمز عبور خود را فراموش کرده اید ؟</a></small></p>
                    </div>

                </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            onSubmit(){
                const loginData = {
                    username: this.username,
                    password: this.password
                }
                console.log(loginData)
                axios.post('http://www.livebook.com/json') //backend URL
                    .then(()=>{


                    })
            }
        }

    }
</script>

<style scoped>

</style>