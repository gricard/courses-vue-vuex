<template>
    <div>
        <h1>Authors</h1>

        <input type="submit"
            value="Add Author"
            class="btn btn-primary"
            @click.prevent="handleRedirectToAddAuthorPage"
        />

        <AuthorList :authors="authors" :errors="errors"></AuthorList>
    </div>
</template>


<script>
    import AuthorList from '../AuthorList';
    import { loadAuthors } from '../../store/actionCreators';

    export default {
        name: 'AuthorsPage',

        components: {
            'AuthorList': AuthorList
        },

        computed: {
            authors() {
                return this.$store.state.authors;
            },

            errors() {
                return this.$store.state.errors;
            }
        },

        beforeMount() {
            // load author list
            this.$store.dispatch(loadAuthors());
        },

        methods: {
            addAuthor() {
                console.log('add author!');

            },

            handleRedirectToAddAuthorPage() {
                this.$router.push({name: 'newauthor'});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
