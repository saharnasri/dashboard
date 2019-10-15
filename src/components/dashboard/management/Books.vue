<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن کتاب</h4>
        </div>
        <div class="pageForm">
            <form>
                <div class="form-group mb-4">
                    <label for="bookId">انتخاب پایه درسی</label>
                    <select id="bookId" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div class="form-group mb-4">
                    <label for="contentName">نام کتاب</label>
                    <input type="text" class="form-control" id="contentName" placeholder="">
                </div>
                <div class="form-group mb-4">
                    <label for="contentDescription">توضیحات کتاب</label>
                    <textarea class="form-control" id="contentDescription" rows="3"></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="contentName">علامت اختصاری</label>
                    <input type="text" class="form-control" id="contentName" placeholder="">
                </div>
                <div class="row mb-4">
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="contentName">قیمت</label>
                            <input type="text" class="form-control" id="contentName" placeholder="">
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="form-group">
                            <label for="contentName">تخفیف</label>
                            <input type="text" class="form-control" id="contentName" placeholder="">
                        </div>

                    </div>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label mr-4" for="gridCheck1">
                        فعال است.
                    </label>
                </div>
                <div class="form-check mb-4">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                    <label class="form-check-label mr-4" for="gridCheck1">
                        pdf دارد.
                    </label>
                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeIcon">تصویر کتاب</label>
                    <input type="file" class="form-control-file" id="schoolGradeIcon">
                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeIcon">فایل zip کتاب</label>
                    <input type="file" class="form-control-file" id="schoolGradeIcon">
                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeIcon">فایل pdf کتاب</label>
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
        name: "Books"
    }
</script>

<style scoped>

</style>