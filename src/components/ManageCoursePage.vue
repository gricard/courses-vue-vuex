<template>
    <div>
        <CourseForm :course="course" :errors="errors"></CourseForm>

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

        props: [
            'id'
        ],

        components: {
            CourseForm
        },

        beforeMount () {
            console.log('loading course id', this.$route.params.id);
//            this.$store.dispatch('FETCH_COURSE', {
//                ids: [this.id]
//            });
        },

//        data () {
//            return {
//                course: { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', timeLength: '2:00', category: 'code' }
//            };
//        },

        methods: {
            addCourse() {
                console.log('add course!');

            },
            doStuff() {
                console.log('store', this.$store);
            }
        },

        computed: {
            errors () {
                return this.$store.state.errors;
            },

            course () {
                let course = this.$store.state.courses[this.$route.params.id]
                console.log('course loaded', course);
                return course;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
