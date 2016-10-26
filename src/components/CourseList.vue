<template>
    <table class="table">
        <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Length</th>
            </tr>
        </thead>
        <tbody >
            <course-list-row v-for="course in courses" :course="course" :key="course.id" />
        </tbody>
    </table>
</template>

<script>
    import CourseListRow from './CourseListRow';

    export default {
        name: 'CourseList',

        components: {
            'course-list-row': CourseListRow
        },

        props: {
            courses: Array
        },

        methods: {
            dumb() {
                console.log('dumb');

            }
        }
    }
</script>

<style>

</style>
