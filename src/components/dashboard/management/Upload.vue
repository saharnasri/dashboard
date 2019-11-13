<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن ویدئو</h4>
        </div>
        <div class="pageForm">
            <form @submit.prevent="addSchoolGrade">
                <div class="form-group mb-4">
                    <label for="Name">نام ویدئو *</label>
                    <input type="text" class="form-control" id="Name" placeholder="" v-model="Name" required>
                </div>
                <div class="form-group mb-4">
                    <label for="GradeImage">بارگذاری ویدئو *</label><small class="mx-2 text-info">(حداکثر 500Mb)</small>
<!--                    <label for="file">تصویر پایه درسی *</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>-->
                    <input type="file" class="form-control-file" id="GradeImage" ref="file" @change="handleFileUpload()" required>
<!--                    <input type="file" class="form-control-file" id="file" ref="file" @change="handleFileUpload()" required>-->
                </div>
                <div>
                    <p class="alert-success alert-msg" v-if="alertSuccess">اطلاعات با موفقیت ثبت شد.</p>
                    <p class="alert-danger alert-msg" v-if="alertDanger1">لطفا تمام فیلدها را با اطلاعات صحیح پر نمایید!</p>
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
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        methods: {
            handleFileUpload() {
                this.GradeImage = this.$refs.file.files[0];
                console.log(this.GradeImage)
            },
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
        }
    }
</script>

<style scoped>

</style>