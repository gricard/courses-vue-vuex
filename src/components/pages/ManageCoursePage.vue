<template>
    <div>
        <CourseForm
            :course="course"
            :errors="errors"
            :allAuthors="authors"
            :onSave="handleSaveCourse"
            :onChange="handleUpdateCourseState"
        />

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
    import CourseForm from '../CourseForm';
    import toastr from 'toastr';

    export default {
        name: 'ManageCoursePage',

        props: [
            'id'
        ],

        components: {
            CourseForm
        },

        beforeMount () {
//            console.log('loading course id', this.$route.params.id);
            this.$store.dispatch('FETCH_COURSE', {
                id: this.$route.params.id
            });
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

            //// Helper/utility functions
            courseFormIsValid() {
                let formIsValid = true;
                let errors = {};

                if (this.state.course.title.length < 5) {
                    errors.title = 'Title must be at least 5 characters.';
                    formIsValid = false;
                }

                this.setState({errors: errors});
                return formIsValid;
            },

            redirectSave() {
                console.log('redirect save');
                this.$store.commit('SET_SAVING', false);
                this.redirect('Course Saved');
            },

            redirectDelete() {
                //console.log('redirect delete');
                this.$store.commit('SET_DELETING', false);
                this.redirect('Course Deleted');
            },

            redirect(msg) {
                toastr.success(msg);
                // redirect to courses page after save
                this.$router.push({name: 'courselist'});
            },

            handleSaveCourse() {

//                if (!this.courseFormIsValid()) {
//                    return;
//                }

                this.$store.commit('SET_SAVING', true);
                this.$store.dispatch('SAVE_COURSE', this.$store.state.course)
                    .then(() => {
                        //this.setState({dirty: false});
                        console.log('saved!');
                        this.redirectSave();
                    })
                    .catch(error => {
                        this.$store.commit('SET_SAVING', false);
                        toastr.error(error);
                    });
            },

            handleUpdateCourseState(event) {
                console.log('update course state', arguments);
                console.log('setting ' + event.target.name + ' to', event.target.value);

                const field = event.target.name;
                let course = this.$store.state.course;
                course[field] = event.target.value;

                // TODO keep a copy of the original data and actually compare changes instead of just assuming it changed
                // if user changes it and then edits it back to normal the form will still think it's dirty

                // mark state as dirty so we can trigger a leave page handler
//                this.commit('SET_DIRTY', true);
                return this.$store.commit('SET_COURSE', {course: course});
            }
        },

        computed: {
            errors () {
                return this.$store.state.errors;
            },

            course () {
                return this.$store.state.course;
            },

            authors() {
                console.log('got authors for course form', this.$store.state.authors);
                const authorList = Array.from(this.$store.state.authors);
                return authorList.map(author => {
                    return {
                        value: author.id,
                        text: author.firstName + ' ' + author.lastName
                    };
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
