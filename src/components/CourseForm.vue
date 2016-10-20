<template>
    <form>
        <h1>Manage Course</h1>

        <text-input
            name="title"
            label="Title"
            :value="getTitle"
            :error="getTitleError"
        />
        <!--onChange={onChange}-->

<!--
        <select-input
            name="authorId"
            label="Author"
            value={course.authorId}
            defaultOption="Select Author"
            options={allAuthors}
            onChange={onChange} error={errors.authorId}/>

        <text-input
            name="category"
            label="Category"
            value={course.category}
            onChange={onChange}
            error={errors.category}/>

        <text-input
            name="length"
            label="Length"
            value={course.length}
            onChange={onChange}
            error={errors.length}/>

        <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary saver margin-r-5"
            onClick={onSave}/>

&nbsp;&nbsp;

        <input
            type="submit"
            disabled={deleting}
            value={deleting ? 'Deleting...' : 'Delete'}
            className="btn deleter"
            onClick={onDelete}/>

            -->
    </form>
</template>

<script>
    import TextInput from './common/TextInput';
    import SelectInput from './common/SelectInput';

    export default {
        name: 'CourseForm',

        props: {
            course: Object,
            errors: Object
        },

        components: {
            'text-input': TextInput,
            'select-input': SelectInput
        },

        computed: {
            getTitle: function() {
                console.log('course', this.course);

                return this.course.title;
            },
            getTitleError: function() {
                return this.errors.title;
            },
        }
    };

</script>

<style>

</style>
