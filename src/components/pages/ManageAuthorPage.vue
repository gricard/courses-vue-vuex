<template>
    <div>
        <AuthorForm
            :author="author"
            :errors="errors"
            :onSave="handleSaveAuthor"
            :onChange="handleUpdateAuthorState"
            :onDelete="handleDeleteAuthor"
            :saving="saving"
            :deleting="deleting"
        />
    </div>
</template>


<script>
    import AuthorForm from '../AuthorForm';
    import toastr from 'toastr';
    import { mapState } from 'vuex';
    import { fetchAuthor } from '../../store/actionCreators';

    export default {
        name: 'ManageAuthorPage',

        props: [
            'id'
        ],

        components: {
            AuthorForm
        },


        beforeMount () {
            //            console.log('loading author id', this.$route.params.id);
            this.$store.dispatch(fetchAuthor(this.$route.params.id))
                .then(() => {
                    // load author record if we don't already have it
                    if (!this.$store.state.author.id || (this.author && this.$store.state.author && this.author.id != this.$store.state.author.id)) {
                        this.$store.commit('loadAuthor', this.author);
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

        methods: {
            //// Helper/utility functions
            authorFormIsValid() {
                let formIsValid = true;
                let errors = this.$store.state.errors || {};

                if (this.$store.state.author.firstName.length < 3) {
                    errors.firstName = 'First name must be at least 3 characters.';
                    formIsValid = false;
                }

                this.$store.commit('SET_ERRORS', errors);
                return formIsValid;
            },

            redirectSave() {
                this.redirect('Author Saved');
            },

            redirectDelete() {
                this.redirect('Author Deleted');
            },

            redirect(msg) {
                toastr.success(msg);
                // redirect to authors page after save
                this.$router.push({name: 'authorlist'});
            },


            //// Form handlers
            handleUpdateAuthorState(event) {
                console.log('update author state', arguments);
                console.log('setting ' + event.target.name + ' to', event.target.value);

                const field = event.target.name;
                let author = this.$store.state.author;
                author[field] = event.target.value;

                // TODO keep a copy of the original data and actually compare changes instead of just assuming it changed
                // if user changes it and then edits it back to normal the form will still think it's dirty

                // mark state as dirty so we can trigger a leave page handler
                this.$store.commit('SET_DIRTY', true);
                return this.$store.commit('SET_AUTHOR', {author: author});
            },

            handleSaveAuthor() {
                if (!this.authorFormIsValid()) {
                    return;
                }

                this.$store.dispatch('SAVE_AUTHOR', this.$store.state.author)
                    .then(() => {
                        this.redirectSave();
                    })
                    .catch(error => {
                        toastr.error(error);
                    });
            },

            handleDeleteAuthor(event) {
                this.$store.dispatch('DELETE_AUTHOR', this.$store.state.author)
                    .then(author => {
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

            author () {
                return this.$store.state.author;
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
