<template>
    <div>
        <div class="top-menu">
            <div class="row">
                <div class="col-11">
                    <div class="m-3">
                        <router-link to="/dashboard">پنل مدیریت</router-link>
                    </div>

                </div>
                <div class="col-1">
                    <div class="mt-3">
                        <span v-if="isLoggedIn"> | <a @click="logout">LogOut</a></span>
                        <span v-else> | <router-link to="/login">LogIn</router-link></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h4 class="my-4">ویدئوهای آپارات</h4>
            <div class="row video-gallery">
                <div class="col-lg-3 col-md-3 mb-3" v-for="video in videos">
                    <div class="video-container">
                        {{video}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                videos: ['test', 'test1', 'test2', 'test3', 'test4', 'test5']
            }
        },
        computed: {
            isLoggedIn: function() {
                return this.$store.getters.isLoggedIn;
            }
        },
        methods: {
            logout: function() {
                this.$store.dispatch("logout")
                    .then(() => {this.$router.push("/login");});
            }
        },
        // created(){
        //     axios.get('')
        //         .then((res)=>{
        //             console.log(res.data.data)
        //         })
        //         .catch((err)=>{
        //             console.log(err)
        //         })
        // },
    }
</script>

<style scoped>

</style>