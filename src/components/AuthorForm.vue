<template>
    <form>
        <h1>Manage Author</h1>

        <TextInput
            fieldName="firstName"
            label="First name"
            placeholder="Enter first name"
            :value="author.firstName"
            :error="errors.firstName"
            @textchange="changeFirstName"
            ref="firstNameField"
        />

        <TextInput
            name="lastName"
            label="Last name"
            :value="author.lastName"
            :error="errors.lastName"
            @textchange="changeLastName"
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
    export default {
        name: 'AuthorSForm',

        props: {
            author: Object,
            errors: Object
//            changeAuthor: Function
        },

        beforeMount() {
            if (!this.$store.state.author.id || (this.author && this.$store.state.author && this.author.id != this.$store.state.author.id)) {
                this.$store.commit('loadAuthor', this.author);
            }
        },

        mounted() {
            // after the next DOM update (when everything should be rendered)
            // focus the firstNameField's input
            this.$nextTick(function() {
                this.$refs.firstNameField.$refs.textInput.focus();
            });
        },

        computed: {
            saving() {
                return this.$store.state.saving;
            },

            deleting() {
                return this.$store.state.deleting;
            }
        },

        methods: {

            // mapMutations could be used here
            // change these to dispatch actions instead
            // unify state of this form in the store instead of storing in both places

            // TODO THESE NEED TO BE DISPATCHING EVENTS, NOT COMMITTING MUTATIONS!

            // catch the textchange event for the title field and update it
            changeFirstName(firstName) {
                console.log('changeFirstName' , firstName);
                this.author.firstName = firstName;
                this.$store.commit('changeFirstName', firstName);
            },

            changeLastName(lastName) {
                console.log('changeLastName' , lastName);
                this.author.lastName = lastName;
                this.$store.commit('changeLastName', lastName);
            },

            onSave(event) {
                console.log('onSave', this.author);
                this.$store.dispatch('SAVE_AUTHOR', this.author);
            },

            onDelete(event) {
                console.log('onDelete', this.author);
                this.$store.dispatch('BEGIN_AJAX_CALL'); // increment ajax call count
                this.$store.commit('SET_DELETING', true);
                this.$store.dispatch('DELETE_AUTHOR', this.author).then(author => {
                    author = {};
                    this.$store.commit('SET_AUTHOR', { author });
                    this.$store.commit('SET_DELETING', false);
                    this.$store.dispatch('AJAX_CALL_SUCCESS');
                    this.$router.push({name: 'authorlist'});
                }).catch(error => {
                    this.$store.dispatch('AJAX_CALL_ERROR');
                    this.$store.commit('SET_DELETING', false );
                });
            }
        }
    };

</script>

<style>

</style>
