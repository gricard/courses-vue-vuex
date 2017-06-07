<template>
    <div>
        <CourseForm
            :course="course"
            :errors="errors"
            :allAuthors="authors"
            :onSave="handleSaveCourse"
            :onChange="handleUpdateCourseState"
            :onDelete="handleDeleteCourse"
            :saving="saving"
            :deleting="deleting"
        />
    </div>
</template>


<script>
    import CourseForm from '../CourseForm';
    import toastr from 'toastr';
    import { mapState } from 'vuex';
    import { fetchCourse, saveCourse, resetErrors } from '../../store/actionCreators';

    export default {
        name: 'ManageCoursePage',

        props: [
            'id'
        ],

        components: {
            CourseForm
        },

        beforeMount () {
            // clear errors
            this.$store.dispatch(resetErrors());

            if (this.$route.params.id && this.$route.params.id.length > 0) {
                this.$store.dispatch(fetchCourse(this.$route.params.id))
                    .then(() => {
                        // load course record if we don't already have it
                        // already handled via fetchCourse (this.course is the copy in the store)
                        //this.$store.commit('LOAD_COURSE', this.course);
                    });
            } else {
                // clear previous form data
                this.$store.commit('LOAD_COURSE', {});
            }
        },

        // confirm leaving page if the form is dirty
        beforeRouteLeave (to, from, next) {
            if (this.$store.state.dirty) {
                // could do the form below, but better to be clear than clever
                //next(window.confirm('You have unsaved changes. Are you sure you want to leave this page?'));
                if (!window.confirm('You have unsaved changes. Are you sure you want to leave this page?')) {
                    // stay on this page then
                    next(false);
                    return;
                }
            }
            // ok to leave
            // reset dirty state
            this.$store.commit('SET_DIRTY', false);
            next();
        },

        methods: {
            //// Helper/utility functions
            redirect() {
                // redirect to courses page after save
                this.$router.push({name: 'courselist'});
            },

            courseFormIsValid() {
                let formIsValid = true;
                const errors = this.$store.state.errors || {};

                if (!this.$store.state.course.title || this.$store.state.course.title.length < 5) {
                    errors.title = 'Title must be at least 5 characters.';
                    formIsValid = false;
                } else {
                    delete errors["title"];
                }

                if (!this.$store.state.course.category || this.$store.state.course.category.length < 5) {
                    errors.category = 'Category must be at least 5 characters.';
                    formIsValid = false;
                } else {
                    delete errors["category"];
                }

                if (!this.$store.state.course.length || this.$store.state.course.length.length < 4  ) {
                    errors.title = 'Length must be at least 4 characters.';
                    formIsValid = false;
                } else {
                    delete errors["length"];
                }

                if (!this.$store.state.course.length || !this.$store.state.course.length.match(/[0-9\;]/)  ) {
                    errors.length = 'Length must be in the format HH:MM.';
                    formIsValid = false;
                } else {
                    delete errors["length"];
                }

                if (!this.$store.state.course.authorId.length || this.$store.state.course.authorId.length < 4  ) {
                    errors.authorId = 'Please choose an author.';
                    formIsValid = false;
                } else {
                    delete errors["authorId"];
                }

                this.$store.dispatch('UPDATE_ERRORS',{errors});
                return formIsValid;
            },


            //// Form handlers
            handleUpdateCourseState(event) {
                const field = event.target.name;
                const course = this.$store.state.course;
                course[field] = event.target.value;

                // TODO keep a copy of the original data and actually compare changes instead of just assuming it changed
                // if user changes it and then edits it back to normal the form will still think it's dirty

                // mark state as dirty so we can trigger a leave page handler
                this.$store.commit('SET_DIRTY', true); // TODO this should be tracking the original value
                this.$store.commit('SET_COURSE', {course: course});
                return this.courseFormIsValid();
            },

            handleSaveCourse() {
                if (!this.courseFormIsValid()) {
                    return;
                }

                this.$store.dispatch(saveCourse(this.$store.state.course))
                    .then(() => {
                        this.redirect();
                    })
                    .catch(error => {
                        toastr.error(error);
                    });
            },

            handleDeleteCourse(event) {
                this.$store.dispatch('DELETE_COURSE', this.$store.state.course)
                    .then(course => {
                        this.redirect();
                    })
                    .catch(error => {
                        toastr.error(error);
                    });
            }
        },

        computed: {
            authors() {
                const authorList = Array.from(this.$store.state.authors);
                return authorList.map(author => {
                    return {
                        value: author.id,
                        text: author.firstName + ' ' + author.lastName
                    };
                });
            },

            // mix the getters into computed with object spread operator
            ...mapState([
                'saving',
                'deleting',
                'errors',
                'course'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
