<template>
    <div>
        <div class="row">
                <div class="login">
                    <div class="login-logo">
                        <img src="../../assets/images/logo150.png"  alt="logo" title="log">

                    </div>
                    <div class="login-content">
                        <div class="login-title">
                            <h4>ورود کاربران</h4>
                        </div>
                        <div>
                            <div class="form-group">
                                <label for="username">نام کاربری</label>
                                <input type="text" class="form-control" id="username" v-model="username"  placeholder="" required>
                            </div>
                            <div class="form-group">
                                <label for="password">رمز عبور</label>
                                <input type="password" class="form-control" id="password" v-model="password" placeholder="" required>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="rememberMe">
                                <label class="form-check-label mr-3" for="rememberMe"><small>مرا به خاطر بسپار</small></label>
                            </div>
                            <div>
                                <p class="alert-msg alert-danger" v-if="alert">نام کاربری یا رمز عبور اشتباه وارد شده است!</p>
                                <p class="alert-msg alert-danger" v-if="alert2">مشکلی رخ داده است، لطفا مجددا امتحان کنید!</p>
                            </div>
                            <div class="btn-div">
<!--                                <button @click="onSubmit" class="btn btn-lb lgnbtn">ورود</button>-->
                                <button @click="login" class="btn btn-lb lgnbtn">ورود</button>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4 mx-3">
<!--                        <p><small>-->
<!--                            <span>-->
<!--                                <a href="#">ثبت نام کاربران جدید</a>-->
<!--                            </span> |-->
<!--                            <span>-->
<!--                                <a href="#">رمز عبور خود را فراموش کرده اید ؟</a>-->
<!--                            </span>-->
<!--                        </small></p>-->
                        <p><small>
                                <a href="#">رمز عبور خود را فراموش کرده اید ؟</a>
                        </small></p>
                        <p><small>
                            <router-link to="/Register" >ثبت نام کاربران جدید</router-link>
                        </small></p>
                    </div>

                </div>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios'
    export default {
        data(){
            return {
                username: '',
                password: '',
                alert: false,
                alert2: false
            }
        },
        methods: {
            login: function() {
                // let username = this.username;
                // let password = this.password;
                let data = {
                    username: this.username,
                    password: this.password
                };
                console.log(data);
                // this.$store.dispatch("login", { username, password })
                this.$store.dispatch('login', data).then((res) => {
                    const statusCode = res.data.statusCode
                        console.log(res.data);
                        console.log(statusCode);
                    if(statusCode === 200){
                        console.log("okkkkkkk");
                        console.log('200 status')
                        this.$router.push("/dashboard");

                    }else{
                        console.log("user or pass is not correct");
                        console.log('400 status')
                        this.alert = true
                    }
                    })
                    .catch((err) => {
                        this.alert2 = true;
                        console.log(err)
                    });
                // return this.$router.push("/dashboard");

            },
            // rememberMe: function() {
            //     this.$store.dispatch("rememberMe")
            //         .then(() => {});
            // }

            //halate 2 k ok has
            // onSubmit(){
            //     const loginData = {
            //         username: this.username,
            //         password: this.password
            //     }
            //     console.log(loginData)
            //     axios({
            //         method: 'post',
            //         url: '/api/v1/AdminUser/login',
            //         data: {
            //             "username": this.username,
            //             "password": this.password
            //         }
            //     })
            //         .then(function (response) {
            //             console.log(response);
            //             // window.location.href = "/dashboard";
            //
            //         })
            //         .catch(function (error) {
            //             console.log(error);
            //         });
            //
            //     //halate avaliye(1) ok nis
            //     // axios.post('/api/v1/AdminUser/login') //backend URL
            //     //     .then((res)=>{
            //     //         console.log('response:',res.data)
            //     //         // window.location.href = "/dashboard";
            //     //     })
            //     //     .catch((err)=>{
            //     //         this.alert = true
            //     //         console.log(err)
            //     //     })
            // }
        }

    }
</script>

<style scoped>

</style>