<template>
    <div>
        <div class="row">
            <div class="register">
                <div class="login-logo">
                    <img src="../../assets/images/logo150.png"  alt="logo" title="log">

                </div>
                <div class="login-content">
                    <div class="login-title">
                        <h4>ثبت نام کاربران</h4>
                    </div>

                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="fname">نام *</label>
                            <input type="text" class="form-control" id="fname" v-model="fname"  placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label for="lname">نام خانوادگی *</label>
                            <input type="text" class="form-control" id="lname" v-model="lname"  placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label >جنسیت *</label>
                                <div class="radio">
                                    <label><input type="radio" name="gender" v-model="gender" value="1" checked>زن</label>
                                </div>
                                <div class="radio">
                                    <label><input type="radio" name="gender" v-model="gender" value="2">مرد</label>
                                </div>
                        </div>
                        <div class="form-group">
                            <label for="national_code">کد ملی </label>
                            <input type="text" class="form-control" id="national_code" v-model="national_code"  placeholder="" >
                        </div>
                        <div class="form-group">
                            <label for="mobile">تلفن همراه</label>
                            <input type="text" class="form-control" id="mobile" v-model="mobile"  placeholder="" >
                        </div>
                        <div class="form-group">
                            <label for="email">ایمیل</label>
                            <input type="text" class="form-control" id="email" v-model="email" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="state">کد شهر</label>
                            <input type="text" class="form-control" id="state" v-model="state" placeholder="">
                        </div>

                        <div>
                            <p class="alert-msg alert-danger" v-if="alert">برای ثبت کاربر جدید ابتدا باید وارد حساب کاربری خود شوید!</p>
                            <p class="alert-msg alert-danger" v-if="alert2">نام کاربری وارد شده قبلا ثبت شده است، لطفا نام کاربری دیگری را وارد کنید!</p>
                        </div>
                        <div class="btn-div">
                            <button type="submit" class="btn btn-lb lgnbtn">ثبت نام</button>
                        </div>
                    </form>
                </div>
                <div class="mt-4 mx-3">
                    <p><small>
                        <span class="ml-2">قبلا ثبت نام کرده اید؟</span>
                        <router-link to="/login" >ورود کاربران</router-link>
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
                fname: '',
                lname: '',
                gender: 1,
                national_code: 0,
                mobile: 0,
                email: '',
                state: '',
                alert: false,
                alert2: false
            }
        },
        methods: {
            handleFileUpload() {
                this.Image = this.$refs.file.files[0];
                console.log(this.Image)
            },
            register(){
                let data = new FormData();
                data.set('fname', this.fname);
                data.set('lname', this.lname);
                data.set('gender', this.gender);
                data.set('national_code', this.national_code);
                data.set('mobile', this.mobile);
                data.set('email', this.email);
                data.set('state', this.state);
                console.log('>> formData >> ', data);
                this.$store
                    .dispatch("register", data)
                    .then((res) => {
                        const statusCode = res.status
                        if(statusCode === 200){
                            console.log( 'okkkkkkk');
                            console.log('hello')
                            alert('ثبت نام کاربر جدید با موفقیت انجام شد، وارد حساب کاربری جدید شوید!')
                            this.$router.push("/verify")
                        }else if(statusCode === 400){
                            console.log( 'not okkkkkkkkkk');
                            this.alert = true;
                        }else{
                            this.alert2 = true;
                        }
                        // console.log('response:',res.data)

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