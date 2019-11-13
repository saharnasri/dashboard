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
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label for="email">ایمیل</label>
                                <input type="text" class="form-control" id="email" v-model="email"  placeholder="" required>
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
                                <button class="btn btn-lb lgnbtn">ورود</button>
                            </div>
                        </form>
                    </div>
                    <div class="mt-4 mx-3">
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
    import axios from 'axios'
    export default {
        data(){
            return {
                email: '',
                password: '',
                alert: false,
                alert2: false
            }
        },
        methods: {
            login: function() {
                let data = new FormData();
                data.set('email', this.email);
                data.set('password', this.password);
                console.log('>> formData >> ', data);
                this.$store
                    .dispatch("login", data)
                    .then((res) => {
                        const statusCode = res.status
                        if(statusCode === 200){
                            console.log( 'okkkkkkk');
                            console.log('hello')
                            alert('تایید شما با موفقیت انجام شد، وارد حساب کاربری خود شوید!')
                            this.$router.push("/login")
                        }else if(statusCode === 400){
                            console.log( 'not okkkkkkkkkk');
                            this.alert = true;
                        }else{
                            this.alert2 = true;
                        }

                    })
                    .catch((err) => {
                        console.log(err)
                        this.alert2 = true;
                    });
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