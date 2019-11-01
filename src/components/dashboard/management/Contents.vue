<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن محتوا</h4>
        </div>
        <div class="pageForm">
            <form  @submit.prevent="onSubmit">
                <div class="form-group mb-4">
                    <label for="contentName">نام محتوا</label>
                    <input type="text" class="form-control" id="contentName" placeholder="" v-model="contentName" required>
                </div>
                <div class="form-group mb-4">
                    <label for="contentDescription">توضیحات محتوا</label>
                    <textarea class="form-control" id="contentDescription" rows="3" v-model="contentDescription" required></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="bookId">انتخاب کتاب</label>
                    <select id="bookId" class="form-control" v-model="bookId" required>
                        <option v-for="schoolBook in schoolBooks">{{schoolBook}}</option>
                    </select>
                </div>
                <div class="mb-4">
                    <span>انتخاب صفحه کتاب</span>
                    <div class="row pr-2">
                        <div class="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="firstPageId"><small>صفحه شروع:</small></label>
                                <input type="number" class="form-control" id="firstPageId" placeholder="" v-model="firstPageId">
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <div class="form-group">
                                <label for="lastPageId"><small>صفحه پایان:</small></label>
                                <input type="number" class="form-control" id="lastPageId" placeholder="" v-model="lastPageId">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label for="contentImage">تصویر محتوا</label><small class="mx-2 text-info">(حداکثر 2Mb)</small>
                    <input type="file" class="form-control-file" id="contentImage">
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
                schoolBooks:[],
                contentName: '',
                contentDescription: '',
                bookId: '',
                firstPageId: '',
                lastPageId: '',
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        // created(){
        //     axios.get('/users')
        //         .then((res)=>{
        //             console.log(res.data)
        //             const booksData = res.data
        //             const booksDataLng = booksData.length
        //             console.log(booksDataLng)
        //             var i =0;
        //             for(i=0; i<booksDataLng; i++ ){
        //                 const booksDataItm = booksData[i];
        //                 this.schoolBooks.push(booksDataItm.name)
        //             }
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         })
        // },
        methods: {
            onSubmit(){
                const bookData = {
                    contentName: this.contentName,
                    contentDescription: this.contentDescription,
                    bookId:  this.bookId ,
                    firstPageId:  this.firstPageId ,
                    lastPageId:  this.lastPageId
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