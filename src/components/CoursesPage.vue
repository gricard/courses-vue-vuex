<template>
    <div>
        <h1>Courses</h1>
        <input type="submit"
            value="Add Course"
            class="btn btn-primary"
            @click="addCourse()"
        />

        <CourseList :courses="courses" :authors="authors" :errors="errors"></CourseList>
    </div>
</template>


<script>
    import CourseList from './CourseList';

    export default {
        name: 'CoursesPage',

        components: {
            'CourseList': CourseList
        },
//
//        data () {
//            return {
//                courses: [
//                    { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', length: '2:00', category: 'code' },
//                    { id: 2, title: 'bar', author: 'jim', watchHref: 'http://goo.gl', length: '1:10', category: 'db' }
//                ]
//            };
//        },

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
//            this.$store.dispatch('LOAD_COURSES');
        },

        methods: {
            addCourse() {
                console.log('add course!');

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
