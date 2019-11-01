<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-md-2 pdng-md-l0">
                <div class="dshbrd-nav-title">
                    <h4>پنل مدیریت</h4>
                </div>
            </div>
            <div class="col-md-10 pdng-md-r0">
                <div class="dshbrd-nav">
                    <nav>
                        <p class="mb-0 pt-1">{{email}}</p>
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 pdng-md-l0">
                <div class="dshbrd-sidebar">
                    <div>
                        <ul class="dshbrd-sidebar-ul" id="myDIV">
                            <router-link to="/dashboard/levels" tag="li" class="sidebarLi" onclick="activeTab(event)"><a>پایه درسی</a></router-link>
                            <router-link to="/dashboard/books" tag="li" class="sidebarLi" onclick="activeTab(event)" ><a>کتاب درسی</a></router-link>
                            <router-link to="/dashboard/contents" tag="li" class="sidebarLi" onclick="activeTab(event)"><a>محتوا</a></router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-md-10 pdng-md-r0">
                <div class="dshbrd-content">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                email: ''
            }
        },
        created() {
            // axios.get('/users/1')
            //     .then((res)=>{
            //         console.log(res.data)
            //         const data = res.data
            //         this.email = data.email
            //     })
            //     .catch((err)=>{
            //         console.log(err)
            //     })
            console.log(this.$store.state.token)
            console.log(this.$store.state.user)

        }
    }

</script>

<style scoped>

</style>