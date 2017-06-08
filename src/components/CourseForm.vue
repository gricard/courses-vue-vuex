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

        <!-- TODO move this into a custom component since we'd have to have the same logic in the author form as well -->
        <input
            type="submit"
            :disabled="saving || Object.keys(this.errors).length > 0"
            :value="saving ? 'Saving...' : 'Save'"
            class="btn btn-primary saver margin-r-5"
            @click.prevent="onSave"
        />

        <input
            type="submit"
            :disabled="deleting || !course.id"
            :value="deleting ? 'Deleting...' : 'Delete'"
            class="btn btn-danger deleter"
            @click.prevent="onDelete"
        />

    </form>
    </div>
</template>

<script>
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

        mounted() {
            // after the next DOM update (when everything should be rendered)
            // focus the titleField's input
            this.$nextTick(function() {
                this.$refs.titleField.$refs.textInput.focus();
            });
        },

        computed: {

        },

        methods: {

        }
    };

</script>

<style>

</style>
