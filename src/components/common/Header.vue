<template>
    <div class="container-fluid">
        <nav>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/courses">Courses ({{ numCourses }})</router-link>
            |
            <router-link to="/authors">Authors ({{ numAuthors }})</router-link>
            |
            <router-link to="/about">About</router-link>

            <LoadingDots v-if="loading" interval=100 dots=20 />
        </nav>
    </div>
</template>

<script>
    import LoadingDots from './LoadingDots'

    export default {
        name: 'Header',

        components: {
            'LoadingDots': LoadingDots
        },

        computed: {
            loading: function() {
                return this.$store.state.ajaxCallsInProgress > 0;
            },

            numCourses: function() {
                return this.$store.state.courses.length + 0;
            },

            numAuthors: function() {
                return this.$store.state.authors.length + 0;
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-fluid {

    }
</style>
