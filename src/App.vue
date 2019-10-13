<template>
  <div class="container-fluid txrtl">
          <router-view></router-view>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style>
.txrtl {
    direction: rtl;
    text-align: right;
}
</style>
