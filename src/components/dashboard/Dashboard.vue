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
                        <p class="mb-0 pt-1 pl-2">
                            <router-link to="/" class="sidebarLi" >نمایش ویدئوها</router-link>
                        </p>
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 pdng-md-l0">
                <div class="dshbrd-sidebar">
                    <div>
                        <ul class="dshbrd-sidebar-ul" id="myDIV">
                            <router-link to="/dashboard/Upload" tag="li" class="sidebarLi" onclick="activeTab(event)"><a>فرم آپلود ویدئو</a></router-link>
                            <router-link to="/dashboard/Videos" tag="li" class="sidebarLi" onclick="activeTab(event)" ><a>لیست ویدئوها</a></router-link>
                            <router-link to="/dashboard/EditVideo" tag="li" class="sidebarLi" onclick="activeTab(event)" ><a>ویرایش و حذف ویدئو</a></router-link>
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
    export default {
    }

</script>

<style scoped>

</style>