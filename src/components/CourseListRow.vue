<template>
    <tr>
        <td><a :href="watchHref" target="_blank">Watch</a></td>
        <td>
            {{course.title}}
            <!--<Link to={'/course/' + course.id}>{course.title}</Link>-->
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
