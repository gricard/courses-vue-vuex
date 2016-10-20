<template>
    <div :class="form-group">
        <label :for="labelFor">{{label}}</label>
        <div class="field">
            {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
            <select
                class="form-control"
                :name="getName"
                :placeholder="getPlaceholder"
                :value="getValue"
                :onChange="onChange">
                <option value="">{{defaultOption}}</option>
                <!--{options.map((option) => {-->
                <!--return <option key={option.value} value={option.value}>{option.text}</option>;-->
                <!--})-->
                <!--}-->
            </select>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectInput',

        data () {
            return {
                message: 'Hello'
            };
        },

        props: {
            label: String,
            wrapperClass: String,
            fieldName: String,
            value: String,
            onChange: String,
            error: String
        },

        computed: {
            wrapperClass: function() {
                return this.wrapperClass;
            },
            labelFor: function() {
                return this.fieldName;
            },
            getName: function() {
                return this.fieldName;
            },
            getValue: function() {
                return this.value;
            }
        },
    }
</script>

<style>

</style>
