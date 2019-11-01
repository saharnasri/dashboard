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
                            <label for="Username">نام کاربری *</label>
                            <input type="text" class="form-control" id="Username" v-model="Username"  placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label for="Password">رمز عبور *</label>
                            <input type="password" class="form-control" id="Password" v-model="Password" placeholder="" required>
                        </div>
                        <div class="form-group">
                            <label for="FullName">نام و نام خانوادگی</label>
                            <input type="text" class="form-control" id="FullName" v-model="FullName"  placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="Email">ایمیل</label>
                            <input type="email" class="form-control" id="Email" v-model="Email" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="PhoneNumber">تلفن همراه</label>
                            <input type="tel" class="form-control" id="PhoneNumber" v-model="PhoneNumber" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="UserRole">سمت کاربر *</label>
                            <select id="UserRole" class="form-control" v-model="UserRole" required>
                                <option>Admin</option>
                                <option>Writer</option>
                                <option>Sales</option>
                                <option>Teacher</option>
                            </select>
                        </div>
                        <div class="form-check mb-2">
                            <input class="form-check-input" type="checkbox" id="IsActive" v-model="IsActive" required>
                            <label class="form-check-label mr-4" for="IsActive" >
                                فعال است. *
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="Image">تصویر کاربر</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>
                            <input type="file" class="form-control-file" id="Image">
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
                Username: '',
                Password: '',
                FullName: '',
                Email: '',
                PhoneNumber: '',
                UserRole: '',
                IsActive: '',
                file: '',
                alert: false,
                alert2: false
            }
        },
        methods: {
            register(){
                // let data = {
                //     Username: this.Username,
                //     Password: this.Password,
                //     FullName: this.FullName,
                //     Email: this.Email,
                //     PhoneNumber: this.PhoneNumber,
                //     UserRole: this.UserRole
                // };
                let data = new FormData();
                data.set('Username', this.Username);
                data.set('Password', this.Password);
                data.set('FullName', this.FullName);
                data.set('Email', this.Email);
                data.set('PhoneNumber', this.PhoneNumber);
                data.set('UserRole', this.UserRole);
                data.set('IsActive', this.IsActive);
                data.append('file', this.file);
                console.log('>> formData >> ', data);
                this.$store
                    .dispatch("register", data)
                    .then((res) => {
                        const statusCode = res.data.statusCode
                        if(statusCode === 200){
                            console.log( 'okkkkkkk');
                            console.log('hello')
                            alert('ثبت نام کاربر جدید با موفقیت انجام شد، وارد حساب کاربری جدید شوید!')
                            this.$router.push("/login")
                        }else if(statusCode === 400){
                            console.log( 'not okkkkkkkkkk');
                            this.alert = true;
                        }else{
                            this.alert2 = true;
                        }
                        console.log('response:',res)

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