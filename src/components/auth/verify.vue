<template>
    <div>
        <div class="row">
                <div class="login">
                    <div class="login-logo">
                        <img src="../../assets/images/logo150.png"  alt="logo" title="log">

                    </div>
                    <div class="login-content">
                        <div class="login-title">
                            <h4>تایید کاربران</h4>
                        </div>
                        <form @submit.prevent="verify">
                            <div class="form-group">
                                <label for="mobile">شماره تلفن همراه</label>
                                <input type="text" class="form-control" id="mobile" v-model="mobile"  placeholder="" required>
                            </div>
                            <div class="form-group">
                                <label for="verify_code">کد تاییدیه</label>
                                <input type="text" class="form-control" id="verify_code" v-model="verify_code" placeholder="" required>
                            </div>
                            <div>
                                <p class="alert-msg alert-danger" v-if="alert">نام کاربری یا رمز عبور اشتباه وارد شده است!</p>
                                <p class="alert-msg alert-danger" v-if="alert2">مشکلی رخ داده است، لطفا مجددا امتحان کنید!</p>
                            </div>
                            <div class="btn-div">
<!--                                <button @click="onSubmit" class="btn btn-lb lgnbtn">ورود</button>-->
                                <button class="btn btn-lb lgnbtn">ورود</button>
                            </div>
                        </form>
                    </div>
                    <div class="mt-4 mx-3">
                        <p><small>
                                <a href="#">کد برایتان ارسال نشده است ؟</a>
                        </small></p>
                        <p><small>
                            <router-link to="/Register" >هنوز ثبت نام نکرده اید؟</router-link>
                        </small></p>
                    </div>

                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                mobile: '',
                verify_code: '',
                alert: false,
                alert2: false
            }
        },
        methods: {
            verify(){
                let data = new FormData();
                data.set('mobile', this.mobile);
                data.set('verify_code', this.verify_code);
                console.log('>> formData >> ', data);
                this.$store
                    .dispatch("verify", data)
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
            }

        }

    }
</script>

<style scoped>

</style>