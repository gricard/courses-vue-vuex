<template>
    <div>
        <h1>Courses</h1>
        <input type="submit"
            value="Add Course"
            class="btn btn-primary"
            @click="addCourse()"
        />

        <CourseList :courses="courses" :errors="errors"></CourseList>
    </div>
</template>


<script>
    import CourseList from './CourseList';

    export default {
        name: 'CoursesPage',

        components: {
            'CourseList': CourseList
        },

        data () {
            return {
                courses: [
                    { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', length: '2:00', category: 'code' },
                    { id: 2, title: 'bar', author: 'jim', watchHref: 'http://goo.gl', length: '1:10', category: 'db' }
                ]
            };
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
