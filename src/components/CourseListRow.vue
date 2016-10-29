<template>
    <tr>
        <td><a :href="course.watchHref" target="_blank">Watch</a></td>
        <td>
            <router-link :to="{ name: 'editcourse', params: { id: course.id }}">{{course.title}}</router-link>
        </td>
        <td>{{authorName}}</td>
        <td>{{course.category}}</td>
        <td>{{course.length}}</td>
    </tr>
</template>

<script>
    export default {
        name: 'CourseListRow',

        props: {
            course: Object,
            key: String,
            authors: [Array, Object] // TODO Fixme
        },

        computed: {
            // TODO add error checks
            authorName: function() {
                const authors = Array.from(this.authors),
                    author = authors.filter(author => author.id === this.course.authorId)[0];
                return author.firstName + ' ' + author.lastName;
            }
        },

        methods: {
            dumb() {
                console.log('dumb dumb!');

            }
        }
    }
</script>

<style>

</style>
