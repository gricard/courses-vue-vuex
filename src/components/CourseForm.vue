<template>
    <div>
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
    </div>
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

        }
    };

</script>

<style>

</style>
