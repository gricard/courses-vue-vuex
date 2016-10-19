<template>
    <div class="goodbye">
        <h1>{{ msg }}</h1>
        <h3>Location: {{ $route.path }}</h3>
    </div>
</template>

<script>

    export default {
        name: 'Goodbye',
        data () {
            return {
                msg: 'Buh bye Vue!'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: #42b983;
    }
</style>
