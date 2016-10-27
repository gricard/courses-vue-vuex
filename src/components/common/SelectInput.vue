<template>
    <div class="form-group">
        <label :for="fieldName">{{ label }}</label>
        <div class="field">
            <!--{/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}-->
            <select
                class="form-control"
                :name="fieldName"
                :value="value"
                @change="updateValue($event.target.value)"
            >
                <option value="">{{defaultOption}}</option>
                <option v-for="option in options" :value="option.value" :key="option.value">{{ option.text }}</option>
            </select>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SelectInput',

        props: {
            label: String,
            wrapperClass: String,
            fieldName: String,
            value: String,
//            onChange: String,
            error: String,
            options: Array,
            defaultOption: String
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

        methods: {
            // send events up
            // new value goes back up to parent component
            // parent component can use @textchange="handlerFunc" to get this
            updateValue: function (value) {
                this.$emit('menuchange', value)
            }
        }
    }
</script>

<style>

</style>
