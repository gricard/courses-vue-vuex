<template>
    <table class="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
            </tr>
        </thead>
        <tbody >
            <AuthorListRow v-for="author in authors" :author="author" :key="author.id" />
        </tbody>
    </table>
</template>

<script>
    import AuthorListRow from './AuthorListRow';

    export default {
        name: 'AuthorList',

        components: {
            'AuthorListRow': AuthorListRow
        },

        props: {
            authors: Array
        },

        methods: {

        }
    }
</script>

<style>

</style>
