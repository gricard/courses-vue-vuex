<template>
    <div>
        <h1>Courses</h1>
        <input type="submit"
            value="Add Course"
            class="btn btn-primary"
            @click="addCourse()"
        />

        <course-list :courses="courses"></course-list>
    </div>
</template>


<script>
    import CourseList from './CourseList';

    export default {
        name: 'CoursesPage',
        components: {
            'course-list': CourseList
        },
        data () {
            return {
                courses: [
                    { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', timeLength: '2:00', category: 'code' },
                    { id: 2, title: 'bar', author: 'jim', watchHref: 'http://goo.gl', timeLength: '1:10', category: 'db' }
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
