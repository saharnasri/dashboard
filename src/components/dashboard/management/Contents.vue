<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن محتوا</h4>
        </div>
        <div class="pageForm">
            <form>
                <div class="form-group mb-4">
                    <label for="contentName">نام محتوا</label>
                    <input type="text" class="form-control" id="contentName" placeholder="">
                </div>
                <div class="form-group mb-4">
                    <label for="contentDescription">توضیحات محتوا</label>
                    <textarea class="form-control" id="contentDescription" rows="3"></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="bookId">انتخاب کتاب</label>
                    <select id="bookId" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group mb-4">
                    <label for="firstPageId">انتخاب صفحه کتاب</label>
                    <div class="row pr-2">
                        <div class="col-md-6 col-lg-6">
                            <span><small>صفحه شروع:</small></span>
                            <select id="firstPageId" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6 col-lg-6">
                            <span><small>صفحه پایان:</small></span>
                            <select id="lastPageId" class="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeIcon">تصویر محتوا</label>
                    <input type="file" class="form-control-file" id="schoolGradeIcon">
                </div>
                <div class="btn-div">
                    <button type="submit" class="btn btn-lb lgnbtn">افزودن</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contents"
    }
</script>

<style scoped>

</style>