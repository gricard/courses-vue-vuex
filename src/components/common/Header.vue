<template>
    <div class="container-fluid">
        <nav>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/courses">Courses</router-link>
            |
            <router-link to="/authors">Authors</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link :to="{name:'bye'}">Goodbye</router-link>
            |
            <router-link :to="{name:'hi'}">Hello</router-link>

            <!--{loading && <LoadingDots interval={100} dots={20} />}-->
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-fluid {

    }
</style>
