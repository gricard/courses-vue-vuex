<template>
    <div :class="getWrapperClass">
        <label :for="fieldName">{{label}}</label>
        <div class="field">
            <input
                type="text"
                class="form-control"
                :name="fieldName"
                :placeholder="placeholder"
                :value="value"
                @input="updateValue($event.target.value, $event)"
                ref="textInput"
            >
            <!--@change updates after blur , @input is on keyup-->

            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'TextInput',

        // props down, events up
        // get these props from parent
        props: {
            label: String,
            wrapperClass: {
                type: String,
                default: 'form-group'
            },
            fieldName: String,
            placeholder: String,
            value: String,
            error: String
        },

        computed: {
            getWrapperClass: function() {
                return this.wrapperClass;
            },

            getName: function() {
                return this.fieldName;
            },

            getPlaceholder: function() {
                return this.placeholder;
            },

            getValue: function() {
                return this.value;
            }
        },

        methods: {
            // send events up
            // new value goes back up to parent component
            // parent component can use @textchange="handlerFunc" to get this
            updateValue: function (value, event) {
                this.$emit('textchange', value, event) // TODO get rid of this eventually
                this.$emit('change', event)
            }
        }

    }
</script>

<style>
</style>
