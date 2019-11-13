<template>
    <div class="page">
        <div class="pageTitle">
            <h4>ویرایش و حذف ویدئو ها</h4>
        </div>
        <div class="pageForm">
            <div>
                <div class="form-group mb-4">
                    <label for="parentBookId">انتخاب کتاب درسی</label>
                    <select id="parentBookId" class="form-control" v-model="parentBookId" required>
                        <option v-for="(schoolBookValue) in schoolBookValues" :value="schoolBookValue.id">{{schoolBookValue.name}}</option>
                        <!--                        <option >1</option>-->
                    </select>
                </div>
                <div class="form-group mb-4">
                    <label for="name">نام فصل</label>
                    <input type="text" class="form-control" id="name" v-model="name"  placeholder="" required>
                </div>
                <div>
                    <p class="alert-success alert-msg" v-if="alertSuccess">اطلاعات با موفقیت ثبت شد.</p>
                    <p class="alert-danger alert-msg" v-if="alertDanger1">لطفا تمام فیلدها را با اطلاعات صحیح پر نمایید!</p>
                    <p class="alert-danger alert-msg" v-if="alertDanger2">مشکلی رخ داده است، لطفا مجددا امتحان کنید!</p>
                </div>
                <div class="btn-div">
                    <!--                                <button @click="onSubmit" class="btn btn-lb lgnbtn">ورود</button>-->
                    <button @click="addSchoolBookChapter" class="btn btn-lb lgnbtn">افزودن</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                schoolBookValues: '',
                name: '',
                parentBookId: '',
                alertSuccess: false,
                alertDanger1: false,
                alertDanger2: false
            }
        },
        created(){
            axios.get('/api/v1/SchoolBook/getAllBooks')
                .then((res)=>{
                    console.log(res.data.data)
                    const BooksData = res.data.data
                    console.log(BooksData)

                    this.schoolBookValues = BooksData
                    console.log('here is books:', this.schoolBookValues)
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        methods: {
            addSchoolBookChapter: function() {
                let data = {
                    name: this.name,
                    parentBookId: this.parentBookId
                };
                console.log(data);
                this.$store.dispatch('addSchoolBookChapter', data).then((res) => {
                    const statusCode = res.data.statusCode
                    console.log(res.data);
                    console.log(statusCode);
                    if(statusCode === 200){
                        console.log("okkkkkkk");
                        console.log('200 status')
                        this.alertSuccess = true

                    }else if(statusCode === 400){
                        console.log( 'not okkkkkkkkkk');
                        this.alertDanger1 = true;
                    }else{
                        this.alertDanger2 = true;
                    }
                })
                    .catch((err) => {
                        this.alertDanger2 = true;
                        console.log(err)
                    });
                this.$store.state.username = this.username
            }
        }
    }
</script>

<style scoped>

</style>