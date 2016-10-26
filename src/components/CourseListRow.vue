<template>
    <tr>
        <td><a :href="watchHref" target="_blank">Watch</a></td>
        <td>
            <router-link :to="{ name: 'course', params: { id: course.id }}">{{course.title}}</router-link>
        </td>
        <td>{{authorName}}</td>
        <td>{{course.category}}</td>
        <td>{{course.length}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'CourseListRow',

        props: {
            course: Object,
            key: String
        },

        computed: {
            authorName: function() {
                return this.course.authorId;
            },

            watchHref: function() {
                return this.course.watchHref;
            }
        },

        methods: {
            dumb() {
                console.log('dumb dumb!');

            }
        }
    }
</script>

<style>

</style>
