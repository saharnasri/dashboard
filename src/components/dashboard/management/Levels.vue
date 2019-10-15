<template>
    <div class="page">
        <div class="pageTitle">
            <h4>افزودن پایه درسی</h4>
        </div>
        <div class="pageForm">
            <form>
                <div class="form-group mb-4">
                    <label for="schoolGradeName">نام پایه درسی</label>
                    <input type="text" class="form-control" id="schoolGradeName" placeholder="">
                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeDescription">توضیحات پایه درسی</label>
                    <textarea class="form-control" id="schoolGradeDescription" rows="3"></textarea>
                </div>
                <div class="form-group mb-4">
                    <label for="schoolGradeIcon">تصویر پایه درسی</label>
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
        name: "Levels"
    }
</script>

<style scoped>

</style>