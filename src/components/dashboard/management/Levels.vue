<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن پایه درسی</h4>
        </div>
        <div class="pageForm">
            <form @submit.prevent="onSubmit">
                <div class="form-group mb-4">
                    <label for="Name">نام پایه درسی *</label>
                    <input type="text" class="form-control" id="Name" placeholder="" v-model="Name" required>
                </div>
                <div class="form-group mb-4">
                    <label for="Description">توضیحات پایه درسی *</label>
                    <textarea class="form-control" id="Description" rows="3" v-model="Description" required></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="GradeImage">تصویر پایه درسی *</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>
                    <input type="file" class="form-control-file" id="GradeImage" required>
                </div>
                <div>
                    <p class="alert-success alert-msg" v-if="alertSuccess">اطلاعات با موفقیت ثبت شد.</p>
                    <p class="alert-danger alert-msg" v-if="alertDanger1">لطفا تمام فیلدها را پر کنید!</p>
                    <p class="alert-danger alert-msg" v-if="alertDanger2">مشکلی رخ داده است، لطفا مجددا امتحان کنید!</p>
                </div>
                <div class="btn-div">
                    <button type="submit" class="btn btn-lb lgnbtn">افزودن</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                Name: '',
                Description: '',
                GradeImage: '',
                file: '',
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        methods: {
            addSchoolGrade(){
                let data = new FormData();
                data.set('Name', this.Name);
                data.set('Description', this.Description);
                data.append('GradeImage', this.GradeImage);
                console.log('>> formData >> ', data);
                console.log(this.Name);
                console.log(this.Description);
                this.$store
                    .dispatch("addSchoolGrade", data)
                    .then((res) => {
                        const statusCode = res.data.statusCode;
                        if(statusCode === 200){
                            console.log( 'okkkkkkk');
                            this.alertSuccess = true;
                        }else if(statusCode === 400){
                            console.log( 'خطا، اعتبار سنجی مقادبر ارسالی');
                            this.alertDanger1 = true;
                        }else{
                            this.alertDanger2 = true;
                            console.log( 'خطا هنگام وارد شدن رکورد به دیتابیس');
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            },

            onSubmit() {
                let data = new FormData();
                data.set('Name', this.Name);
                data.set('Description', this.Description);
                data.append('file', this.file);
                axios({
                    url: '/api/v1/SchoolGrade/addSchoolGrade',
                    data: data,
                    headers: {'Content-Type': 'multipart/form-data'},
                    method: 'post'
                })
                    .then(function (response) {
                        console.log(response);
                        // window.location.href = "/dashboard";
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            // onSubmit(){
            //     const gradeData = {
            //         gradeName: this.gradeName,
            //         gradeDescription: this.gradeDescription
            //     }
            //     console.log(gradeData)
            //     axios.post('/posts') //backend URL path
            //         .then((res)=>{
            //             console.log(res)
            //             this.alertSuccess = true
            //         })
            //         .catch((err)=>{
            //             this.alertDanger1 = true
            //             console.log(err)
            //         })
            // }
        }
    }
</script>

<style scoped>

</style>