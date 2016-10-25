<template>
    <form>
        <h1>Manage Course</h1>

        <TextInput
            fieldName="title"
            label="Title"
            placeholder="Enter title"
            :value="course.title"
            :error="errors.title"
            @textchange="changeTitle"
        />

        <TextInput
            name="category"
            label="Category"
            :value="course.category"
            :error="errors.category"
            @textchange="changeCategory"
        />

        <TextInput
            name="length"
            label="Length"
            :value="course.length"
            :error="errors.length"
            @textchange=changeLength
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


        <div>
            <br>
            <button class="btn"
                @click.prevent="doStuff">
                Do a thing
            </button>
        </div>





        <!--

                <SelectInput
                    name="authorId"
                    label="Author"
                    value={course.authorId}
                    defaultOption="Select Author"
                    options={allAuthors}
                    onChange={onChange} error={errors.authorId}/>

                    -->
    </form>
</template>

<script>
//    import SelectInput from './common/SelectInput';

    import { mapMutations } from 'vuex'

    export default {
        name: 'CourseForm',

        props: {
            course: Object,
            errors: Object
        },

        components: {
//            'SelectInput': SelectInput
        },

        beforeMount() {
//            if (!this.$store.state.course.id || (this.course && this.$store.state.course && this.course.id != this.$store.state.course.id)) {
//                console.log('loading course', this.course)
                this.$store.commit('loadCourse', this.course);
//            }
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
            doStuff () {
                console.log('do stuff', arguments);
                this.$store.commit('changeName', 'NEW NAME');
                this.course.title = 'NEW NAME';
                this.$store.dispatch('DUMP_STATE');
            },

            // catch the textchange event for the title field and update it
            changeTitle(title) {
                console.log('changeTitle' , title);
                this.course.title = title;
                this.$store.commit('changeTitle', title);
            },

            changeCategory(name) {
                console.log('changeCategory' , name);
                this.course.category = name;
                this.$store.commit('changeCategory', name);
            },
            changeLength(name) {
                console.log('changeLength' , name);
                this.course.category = name;
                this.$store.commit('changeLength', name);
            },

            onSave() {
                console.log('onSave', arguments);
            }
        }
    };

</script>

<style>

</style>
