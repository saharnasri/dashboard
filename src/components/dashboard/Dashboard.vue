<template>
    <div class="dashboard">
        <div class="row">
            <div class="col-2 pl-0">
                <div class="dshbrd-nav-title">
                    <h4>پنل مدیریت</h4>
                </div>
            </div>
            <div class="col-10 pr-0">
                <div class="dshbrd-nav">
                    <nav>
                        top Header
                    </nav>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-2 pl-0">
                <div class="dshbrd-sidebar">
                    <div>
                        <ul class="dshbrd-sidebar-ul">
                            <router-link to="/dashboard/contents" tag="li"><a>محتوا</a></router-link>
                            <router-link to="/dashboard/levels" tag="li"><a>پایه درسی</a></router-link>
                            <router-link to="/dashboard/books" tag="li"><a>کتاب درسی</a></router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-10 pr-0">
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