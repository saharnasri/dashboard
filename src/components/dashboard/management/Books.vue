<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن کتاب</h4>
        </div>
        <div class="pageForm">
            <form @submit.prevent="onSubmit">
                <div class="form-group mb-4">
                    <label for="gradeId">انتخاب پایه درسی</label>
                    <select id="gradeId" class="form-control" v-model="grade" required>
                        <option v-for="schoolsGrade in schoolsGrades">{{schoolsGrade}}</option>
                    </select>
                </div>
                <div class="form-group mb-4">
                    <label for="bookName">نام کتاب</label>
                    <input type="text" class="form-control" id="bookName" placeholder="" v-model="bookname" required>
                </div>
                <div class="form-group mb-4">
                    <label for="bookDescription">توضیحات کتاب</label>
                    <textarea class="form-control" id="bookDescription" rows="3" v-model="bookdescription" required></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="bookUniqueSymbol">علامت اختصاری</label>
                    <input type="text" class="form-control" id="bookUniqueSymbol" placeholder="" v-model="bookuniquesymbol" required>
                </div>
                <div class="row mb-4">
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="bookPrice">قیمت</label>
                            <input type="number" class="form-control" id="bookPrice" placeholder="" v-model="bookprice" required>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="bookDiscount">تخفیف</label>
                            <input type="number" class="form-control" id="bookDiscount" placeholder="" v-model="bookdiscount" required>
                        </div>

                    </div>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="bookIsActive"  v-model="bookisactive" required>
                    <label class="form-check-label mr-4" for="bookIsActive" >
                        فعال است.
                    </label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="bookHasPdf" v-model="bookhaspdf" required>
                    <label class="form-check-label mr-4" for="bookHasPdf" >
                        pdf دارد.
                    </label>
                </div>
                <div class="form-group mb-4">
                    <label for="bookImage">تصویر کتاب</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>
                    <input type="file" class="form-control-file" id="bookImage" required>
                </div>
                <div class="form-group mb-4">
                    <label for="bookZipFile">فایل zip کتاب</label><small class="mx-2 text-info">(حداکثر 80Mb)</small>
                    <input type="file" class="form-control-file" id="bookZipFile" required>
                </div>
                <div class="form-group mb-4">
                    <label for="bookPdfFile">فایل pdf کتاب</label><small class="mx-2 text-info">(حداکثر 80Mb)</small>
                    <input type="file" class="form-control-file" id="bookPdfFile" required>
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
                schoolsGrades:[],
                grade: '',
                bookname: '',
                bookdescription: '',
                bookuniquesymbol: '',
                bookprice: '',
                bookdiscount: '',
                bookisactive: '',
                bookhaspdf: '',
                bookimage: '',
                bookzipfile: '',
                bookpdffile: '',
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        // created(){
        //     axios.get('/users')
        //         .then((res)=>{
        //             console.log(res.data)
        //             const GradesData = res.data
        //             const GradesDataLng = GradesData.length
        //             console.log(GradesDataLng)
        //             var i =0;
        //             for(i=0; i<GradesDataLng; i++ ){
        //                 const GradesDataItm = GradesData[i];
        //                 this.schoolsGrades.push(GradesDataItm.name);
        //             }
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         })
        // },
        methods: {
            onSubmit(){
                const bookData = {
                    grade: this.grade,
                    bookname: this.bookname,
                    bookdescription:  this.bookdescription ,
                    bookuniquesymbol:  this.bookuniquesymbol ,
                    bookprice:  this.bookprice ,
                    bookdiscount:  this.bookdiscount ,
                    bookisactive:  this.bookisactive ,
                    bookhaspdf:  this.bookhaspdf ,
                    bookimage:  this.bookimage ,
                    bookzipfile:  this.bookzipfile ,
                    bookpdffile:  this.bookpdffile
                }
                console.log(bookData)
                axios.post('/posts') //backend URL
                    .then((res)=>{
                        console.log(res)
                        this.alertSuccess = true
                    })
                    .catch((err)=>{
                        console.log(err)
                        this.alertDanger1 = true

                    })
            }
        }
    }
</script>

<style scoped>

</style>