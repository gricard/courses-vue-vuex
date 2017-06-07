<template>
    <tr>
        <td>
            <router-link :to="{ name: 'editauthor', params: { id: author.id }}">{{authorName}}</router-link>
        </td>
        <td>{{author.firstName}}</td>
        <td>{{author.lastName}}</td>
        <td>{{author.id}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'AuthorListRow',

        props: {
            author: Object,
            authorKey: String
        },

        computed: {
            authorName: function() {
                return this.author.firstName + ' ' + this.author.lastName;
            }
        },

        methods: {

        }
    }
</script>

<style>

</style>
