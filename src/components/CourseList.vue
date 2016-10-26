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
            <CourseListRow v-for="course in courses" :course="course" :key="course.id" :authors="authors" />
        </tbody>
    </table>
</template>

<script>
    import CourseListRow from './CourseListRow';

    export default {
        name: 'CourseList',

        components: {
            'CourseListRow': CourseListRow
        },

        props: {
            courses: [Object, Array], // TODO fix this, it should only be an array!
            authors: [Object, Array]
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
