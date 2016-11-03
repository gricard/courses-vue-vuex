<template>
    <div>
        <AuthorForm
            :author="author"
            :errors="errors"
            :onSave="handleSaveAuthor"
            :onChange="handleUpdateAuthorState"
            :onDelete="handleDeleteAuthor"
            :saving="this.$store.state.saving"
            :deleting="this.$store.state.deleting"
        />
    </div>
</template>


<script>
    import AuthorForm from '../AuthorForm';
    import toastr from 'toastr';

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
            this.$store.dispatch('FETCH_AUTHOR', {
                id: this.$route.params.id
            });
        },

        //        data () {
        //            return {
        //                author: { id: 1, title: 'foo', author: 'bob', watchHref: 'http://google.com', timeLength: '2:00', category: 'code' }
        //            };
        //        },

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
                console.log('redirect save');
                this.$store.commit('SET_SAVING', false);
                this.redirect('Author Saved');
            },

            redirectDelete() {
                //console.log('redirect delete');
                this.$store.commit('SET_DELETING', false);
                this.redirect('Author Deleted');
            },

            redirect(msg) {
                toastr.success(msg);
                // redirect to authors page after save
                this.$router.push({name: 'authorlist'});
            },


            //// Form handlers
            handleSaveAuthor() {
                if (!this.authorFormIsValid()) {
                    return;
                }

                this.$store.commit('SET_SAVING', true);
                this.$store.dispatch('SAVE_AUTHOR', this.$store.state.author)
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

            handleUpdateAuthorState(event) {
                console.log('update author state', arguments);
                console.log('setting ' + event.target.name + ' to', event.target.value);

                const field = event.target.name;
                let author = this.$store.state.author;
                author[field] = event.target.value;

                // TODO keep a copy of the original data and actually compare changes instead of just assuming it changed
                // if user changes it and then edits it back to normal the form will still think it's dirty

                // mark state as dirty so we can trigger a leave page handler
                //                this.commit('SET_DIRTY', true);
                return this.$store.commit('SET_AUTHOR', {author: author});
            },

            handleDeleteAuthor(event) {
                // TODO this needs to go elsewhere
                this.$store.dispatch('BEGIN_AJAX_CALL'); // increment ajax call count

                this.$store.commit('SET_DELETING', true);

                this.$store.dispatch('DELETE_AUTHOR', this.$store.state.author)
                    .then(author => {
                        author = {};
                        this.$store.commit('SET_AUTHOR', { author });
                        this.$store.commit('SET_DELETING', false);
                        this.$store.dispatch('AJAX_CALL_SUCCESS');
                        this.$router.push({name: 'authorlist'});
                    })
                    .catch(error => {
                        this.$store.dispatch('AJAX_CALL_ERROR');
                        this.$store.commit('SET_DELETING', false );
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
