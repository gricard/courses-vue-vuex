<template>
    <div>
        <AuthorForm
            :author="author"
            :errors="errors"
            :changeAuthor="changeAuthor"
        />

        <!--<AuthorForm-->
            <!--onChange={this.handleUpdateAuthorState}-->
            <!--onSave={this.handleSaveAuthor}-->
            <!--onDelete={this.handleDeleteAuthor}-->
            <!--author={this.state.author}-->
            <!--errors={this.state.errors}-->
            <!--saving={this.state.saving}-->
            <!--deleting={this.state.deleting}-->
        <!--/>-->
    </div>
</template>


<script>
    import AuthorForm from '../AuthorForm';

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
            addAuthor() {
                console.log('add author!');

            },

            changeAuthor(authorId) {
                console.log('changeAuthor' , authorId);
                this.author.authorId = authorId;
                this.$store.commit('changeAuthor', authorId);
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
