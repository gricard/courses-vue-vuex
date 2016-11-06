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
    import { fetchCourse } from '../../store/actionCreators';

    export default {
        name: 'ManageCoursePage',

        props: [
            'id'
        ],

        components: {
            CourseForm
        },

        beforeMount () {
            this.$store.dispatch(fetchCourse(this.$route.params.id))
                .then(() => {
                    // load course record if we don't already have it
                    if (!this.$store.state.course.id || (this.course && this.$store.state.course && this.course.id != this.$store.state.course.id)) {
                        this.$store.commit('loadCourse', this.course);
                    }
            });
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

//        data () {
//            return {
//                course: { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', timeLength: '2:00', category: 'code' }
//            };
//        },

        methods: {
            //// Helper/utility functions
            courseFormIsValid() {
                let formIsValid = true;
                let errors = this.$store.state.errors || {};

                if (this.$store.state.course.title.length < 5) {
                    errors.title = 'Title must be at least 5 characters.';
                    formIsValid = false;
                }

                this.$store.commit('SET_ERRORS', errors);
                return formIsValid;
            },

            redirectSave() {
                this.redirect('Course Saved');
            },

            redirectDelete() {
                this.redirect('Course Deleted');
            },

            redirect(msg) {
                toastr.success(msg);
                // redirect to courses page after save
                this.$router.push({name: 'courselist'});
            },


            //// Form handlers
            handleUpdateCourseState(event) {
//                console.log('update course state', arguments);
//                console.log('setting ' + event.target.name + ' to', event.target.value);

                const field = event.target.name;
                let course = this.$store.state.course;
                course[field] = event.target.value;

                // TODO keep a copy of the original data and actually compare changes instead of just assuming it changed
                // if user changes it and then edits it back to normal the form will still think it's dirty

                // mark state as dirty so we can trigger a leave page handler
                this.$store.commit('SET_DIRTY', true);
                return this.$store.commit('SET_COURSE', {course: course});
            },

            handleSaveCourse() {
                if (!this.courseFormIsValid()) {
                    return;
                }

                this.$store.dispatch('SAVE_COURSE', this.$store.state.course)
                    .then(() => {
                        this.redirectSave();
                    })
                    .catch(error => {
                        toastr.error(error);
                    });
            },

            handleDeleteCourse(event) {
                this.$store.dispatch('DELETE_COURSE', this.$store.state.course)
                    .then(course => {
                        this.redirectDelete();
                    })
                    .catch(error => {
                        toastr.error(error);
                    });
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
            },

            // mix the getters into computed with object spread operator
            ...mapState([
                'saving',
                'deleting',
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
