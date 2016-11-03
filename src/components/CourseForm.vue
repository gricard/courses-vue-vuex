<template>
    <form>
        <h1>Manage Course</h1>

        <TextInput
            fieldName="title"
            label="Title"
            placeholder="Enter title"
            :value="course.title"
            :error="errors.title"
            :onChange="onChange"
            ref="titleField"
        />

        <TextInput
            fieldName="category"
            label="Category"
            :value="course.category"
            :error="errors.category"
            :onChange="onChange"
        />

        <TextInput
            fieldName="length"
            label="Length"
            :value="course.length"
            :error="errors.length"
            :onChange="onChange"
        />

        <SelectInput
            fieldName="authorId"
            label="Author"
            :value="course.authorId"
            defaultOption="Select Author"
            :options="allAuthors"
            :error="errors.authorId"
            :onChange="onChange"
        />

        <br>

        <input
            type="submit"
            :disabled="saving"
            :value="saving ? 'Saving...' : 'Save'"
            class="btn btn-primary saver margin-r-5"
            @click.prevent="onSave"
        />

        &nbsp;&nbsp;

        <input
            type="submit"
            :disabled="deleting"
            :value="deleting ? 'Deleting...' : 'Delete'"
            class="btn deleter"
            @click.prevent="onDelete"
        />

    </form>
</template>

<script>
//    import SelectInput from './common/SelectInput';

//    import { mapMutations } from 'vuex'

    export default {
        name: 'CourseForm',

        props: {
            course: Object,
            errors: Object,
            allAuthors: Array,
            onSave: Function,
            onChange: Function,
            onDelete: Function,
            saving: Boolean,
            deleting: Boolean
        },
//
        // locally included components
//        components: {
////            'SelectInput': SelectInput
//        },

        beforeMount() {
            if (!this.$store.state.course.id || (this.course && this.$store.state.course && this.course.id != this.$store.state.course.id)) {
                this.$store.commit('loadCourse', this.course);
            }
        },

        mounted() {
            // after the next DOM update (when everything should be rendered)
            // focus the titleField's input
            this.$nextTick(function() {
                this.$refs.titleField.$refs.textInput.focus();
            });
        },

        computed: {
//            saving() {
//                return this.$store.state.saving;
//            },
//
//            deleting() {
//                return this.$store.state.deleting;
//            }
        },

        methods: {

            // mapMutations could be used here
            // change these to dispatch actions instead
            // unify state of this form in the store instead of storing in both places

            // TODO THESE NEED TO BE DISPATCHING EVENTS, NOT COMMITTING MUTATIONS!
            // maybe, maybe not

            // TODO mapMutations?

            // catch the textchange event for the title field and update it
            changeTitle(title) {
                console.log('changeTitle' , title);
                this.course.title = title;
                this.$store.commit('changeTitle', title);
            },

            changeCategory(name) {
                console.log('changeCategory' , name);
                this.course.category = name;
                this.$store.commit('changeCategory', name);
            },

            changeLength(val, evt) {
                console.log('changeLength' , val);
                console.log('event args', evt);
                this.course.length = val;
                this.$store.commit('changeLength', val);
            }
//
//            onSave(event) {
//                console.log('onSave', this.course);
//                this.$store.dispatch('SAVE_COURSE', this.course);
//            },
//
//            onDelete(event) {
//                console.log('onDelete', this.course);
//                this.$store.dispatch('BEGIN_AJAX_CALL'); // increment ajax call count
//                this.$store.commit('SET_DELETING', true);
//                this.$store.dispatch('DELETE_COURSE', this.course).then(course => {
//                    course = {};
//                    this.$store.commit('SET_COURSE', { course });
//                    this.$store.commit('SET_DELETING', false);
//                    this.$store.dispatch('AJAX_CALL_SUCCESS');
//                    this.$router.push({name: 'courselist'});
//                }).catch(error => {
//                    this.$store.dispatch('AJAX_CALL_ERROR');
//                    this.$store.commit('SET_DELETING', false );
//                });
//            }
        }
    };

</script>

<style>

</style>
