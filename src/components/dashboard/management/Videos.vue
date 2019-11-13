<template>
    <div class="page">
        <div class="pageTitle">
            <h4>لیست ویدئوها</h4>
        </div>
        <div class="pageForm">
            <form @submit.prevent="addSchoolBook">
                <div class="form-group mb-4">
                    <label for="schoolGradeName">انتخاب پایه درسی *</label>
                    <select id="schoolGradeName" class="form-control" v-model="SchoolGradeId" required>
                        <option v-for="(schoolGradeValue) in schoolGradeValues" :value="schoolGradeValue.id">{{schoolGradeValue.name}}</option>
<!--                        <option >1</option>-->
                    </select>
                </div>
                <div class="form-group mb-4">
                    <label for="Name">نام کتاب *</label>
                    <input type="text" class="form-control" id="Name" placeholder="" v-model="Name" required>
                </div>
                <div class="form-group mb-4">
                    <label for="Description">توضیحات کتاب *</label>
                    <textarea class="form-control" id="Description" rows="3" v-model="Description" required></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="Metadata">علامت اختصاری</label>
                    <input type="text" class="form-control" id="Metadata" placeholder="" v-model="Metadata" required>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="Price">قیمت *</label>
                            <input type="number" class="form-control" id="Price" placeholder="" v-model="Price" required>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="Discount">تخفیف *</label>
                            <input type="number" class="form-control" id="Discount" placeholder="" v-model="Discount" required>
                        </div>

                    </div>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="IsActive"  v-model="IsActive" required>
                    <label class="form-check-label mr-4" for="IsActive" >
                        فعال است. *
                    </label>
                </div>
                <!--                <div class="form-check mb-4">-->
                <!--                    <input class="form-check-input" type="checkbox" id="bookHasPdf" v-model="bookhaspdf" required>-->
                <!--                    <label class="form-check-label mr-4" for="bookHasPdf" >-->
                <!--                        pdf دارد.-->
                <!--                    </label>-->
                <!--                </div>-->
                <div class="form-group mb-4">
                    <label for="Thumbnail">تصویر کتاب *</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>
                    <input type="file" class="form-control-file" id="Thumbnail" ref="file1" @change="handleFileUpload()" required>
                </div>
                <div class="form-group mb-4">
                    <label for="ZipFile">فایل zip کتاب *</label><small class="mx-2 text-info">(حداکثر 80Mb)</small>
                    <input type="file" class="form-control-file" id="ZipFile" ref="file2" @change="handleFileUpload()" required>
                </div>
                <div class="form-group mb-4">
                    <label for="PdfFile">فایل pdf کتاب *</label><small class="mx-2 text-info">(حداکثر 80Mb)</small>
                    <input type="file" class="form-control-file" id="PdfFile" ref="file3" @change="handleFileUpload()" required>
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
                schoolGradeValues: [],
                schoolGradeNames: [],
                schoolGradeName: '',
                SchoolGradeId: 0,
                Name: '',
                Description: '',
                Metadata: '',
                Price: 0,
                Discount: 0,
                IsActive: '',
                Thumbnail: '',
                ZipFile: '',
                PdfFile: '',
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        created(){
            axios.get('/api/v1/SchoolGrade/getAllGrade')
                .then((res)=>{
                    console.log(res.data.data)
                    const GradesData = res.data.data
                    console.log(GradesData)

                    this.schoolGradeValues = GradesData
                    console.log('here is names:', this.schoolGradeValues)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        methods: {
            handleFileUpload() {
                this.Thumbnail = this.$refs.file1.files[0];
                this.ZipFile = this.$refs.file2.files[0];
                this.PdfFile = this.$refs.file3.files[0];
                console.log(this.Thumbnail)
                console.log(this.ZipFile)
                console.log(this.PdfFile)
            },
            addSchoolBook(){
                // const bookData = {
                //     SchoolGradeId: this.SchoolGradeId,
                //     Name: this.Name,
                //     Description:  this.Description ,
                //     Price:  this.Price ,
                //     Discount:  this.Discount ,
                //     Metadata:  this.Metadata ,
                //     IsActive:  this.IsActive ,
                //     Thumbnail:  this.Thumbnail ,
                //     ZipFile:  this.ZipFile ,
                //     PdfFile:  this.PdfFile
                // }
                console.log('here is school grade id', this.SchoolGradeId)

                let data = new FormData();
                data.set('SchoolGradeId', this.SchoolGradeId);
                data.set('Name', this.Name);
                data.set('Description', this.Description);
                data.set('Price', this.Price);
                data.set('Discount', this.Discount);
                data.set('Metadata', this.Metadata);
                data.set('IsActive', this.IsActive);
                data.append('Thumbnail', this.Thumbnail);
                data.append('ZipFile', this.ZipFile);
                data.append('PdfFile', this.PdfFile);
                console.log('>> formData >> ', data);
                this.$store
                    .dispatch("addSchoolBook", data)
                    .then((res) => {
                        const statusCode = res.data.statusCode
                        if(statusCode === 200){
                            console.log( 'okkkkkkk');
                            console.log('hello')
                            this.alertSuccess = true;
                        }else if(statusCode === 400){
                            console.log( 'not okkkkkkkkkk');
                            this.alertDanger1 = true;
                        }else{
                            this.alertDanger2 = true;
                        }

                    })
                    .catch((err) => {
                        console.log(err)
                        this.alertDanger2 = true;
                    });
            }

            // onSubmit(){
            //     const bookData = {
            //         grade: this.grade,
            //         bookname: this.bookname,
            //         bookdescription:  this.bookdescription ,
            //         bookuniquesymbol:  this.bookuniquesymbol ,
            //         bookprice:  this.bookprice ,
            //         bookdiscount:  this.bookdiscount ,
            //         bookisactive:  this.bookisactive ,
            //         bookhaspdf:  this.bookhaspdf ,
            //         bookimage:  this.bookimage ,
            //         bookzipfile:  this.bookzipfile ,
            //         bookpdffile:  this.bookpdffile
            //     }
            //     console.log(bookData)
            //     axios.post('/posts') //backend URL
            //         .then((res)=>{
            //             console.log(res)
            //             this.alertSuccess = true
            //         })
            //         .catch((err)=>{
            //             console.log(err)
            //             this.alertDanger1 = true
            //
            //         })
            // }
        }
    }
</script>

<style scoped>

</style>