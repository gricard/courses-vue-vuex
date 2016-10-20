<template>
    <tr>
        <td><a :href="watchHref" target="_blank">Watch</a></td>
        <td>
            <!--<a :href="courseLink" target="_blank">{{course.title}}</a>-->
            <router-link :to="{ name: 'course', params: { id: course.id }}">{{course.title}}</router-link>
        </td>
        <td>{{authorName}}</td>
        <td>{{course.category}}</td>
        <td>{{course.timeLength}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'CourseListRow',
        data () {
            return {
                message: 'Hello'
            };
        },
        props: {
            course: Object
        },
        computed: {
            authorName: function() {
                return this.course.author;
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
