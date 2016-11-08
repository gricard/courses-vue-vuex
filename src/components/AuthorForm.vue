<template>
    <div><!-- need a parent element so that test code can pull the child form -->
        <form>
            <h1>Manage Author</h1>

            <TextInput
                fieldName="firstName"
                label="First Name"
                placeholder="Enter first name"
                :value="author.firstName"
                :error="errors.firstName"
                :onChange="onChange"
                ref="firstNameField"
            />

            <TextInput
                fieldName="lastName"
                label="Last name"
                :value="author.lastName"
                :error="errors.lastName"
                :onChange="onChange"
            />

            <br>

            <input
                type="submit"
                :disabled="saving || Object.keys(this.errors).length > 0"
                :value="saving ? 'Saving...' : 'Save'"
                class="btn btn-primary saver margin-r-5"
                @click.prevent="onSave"
            />

            &nbsp;&nbsp;

            <input
                type="submit"
                :disabled="deleting || !author.id"
                :value="deleting ? 'Deleting...' : 'Delete'"
                class="btn deleter"
                @click.prevent="onDelete"
            />

        </form>
    </div>
</template>

<script>
    export default {
        name: 'AuthorForm',

        props: {
            author: Object,
            errors: Object,
            onSave: Function,
            onChange: Function,
            onDelete: Function,
            saving: Boolean,
            deleting: Boolean
        },

        mounted() {
            // after the next DOM update (when everything should be rendered)
            // focus the lastNameField's input
            this.$nextTick(function() {
                this.$refs.firstNameField.$refs.textInput.focus();
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
