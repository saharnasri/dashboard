<template>
    <div>
        <h1>this is home page</h1>
        <span v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
        <span v-else> | <router-link to="/login">Login</router-link></span>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>

<style scoped>

</style>