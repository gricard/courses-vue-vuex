<template>
    <div>
        <course-form :course="course" :errors="errors"></course-form>
        <!--<h1>Manage Course</h1>-->
        <!--<CourseForm-->
            <!--allAuthors={this.props.authors}-->
            <!--onChange={this.handleUpdateCourseState}-->
            <!--onSave={this.handleSaveCourse}-->
            <!--onDelete={this.handleDeleteCourse}-->
            <!--course={this.state.course}-->
            <!--errors={this.state.errors}-->
            <!--saving={this.state.saving}-->
            <!--deleting={this.state.deleting}-->
        <!--/>-->
    </div>
</template>


<script>
    import CourseForm from './CourseForm';

    export default {
        name: 'ManageCoursePage',

        props: {
//            course: Object
        },

        components: {
            'course-form': CourseForm
        },

        data () {
            return {
                course: { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', timeLength: '2:00', category: 'code' }
            };
        },

        methods: {
            addCourse() {
                console.log('add course!');

            }
        },

        computed: {
            errors: function() {
                return {
                    title: ''
                };
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
