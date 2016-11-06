<template>
    <div>
        <h1>Courses</h1>

        <input type="submit"
            value="Add Course"
            class="btn btn-primary"
            @click.prevent="handleRedirectToAddCoursePage"
        />

        <CourseList :courses="courses" :authors="authors" :errors="errors"></CourseList>
    </div>
</template>


<script>
    import CourseList from '../CourseList';
    import toastr from 'toastr';
    import { loadCourses } from '../../store/actionCreators';

    export default {
        name: 'CoursesPage',

        components: {
            'CourseList': CourseList
        },

        computed: {
            courses() {
                return this.$store.state.courses;
            },

            authors() {
                return this.$store.state.authors;
            },

            errors() {
                return this.$store.state.errors;
            }
        },

        beforeMount() {
            // load course list
            this.$store.dispatch(loadCourses());
        },

        methods: {
            addCourse() {
                console.log('add course!');

            },

            handleRedirectToAddCoursePage() {
                this.$router.push({name: 'newcourse'});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
