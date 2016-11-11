<template>
    <nav class="container-fluid">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/courses">Courses ({{ numCourses }})</router-link>
            |
            <router-link to="/authors">Authors ({{ numAuthors }})</router-link>
            |
            <router-link to="/about">About</router-link>

            <Spinner :show="loading"></Spinner>
    </nav>
</template>

<script>
    import Spinner from './Spinner.vue'

    export default {
        name: 'Header',

        components: {
            'Spinner': Spinner
        },

        computed: {
            loading: function() {
                return this.$store.state.ajaxCallsInProgress > 0;
            },

            numCourses: function() {
                return isNaN(this.$store.state.courses.length) ? 0 : parseInt(this.$store.state.courses.length);
            },

            numAuthors: function() {
                return isNaN(this.$store.state.authors.length) ? 0 : parseInt(this.$store.state.authors.length);
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-fluid {

    }
</style>
