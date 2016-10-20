<template>
    <div :class="getWrapperClass">
        <label :for="getName">{{label}}</label>
        <div class="field">
            <input
                type="text"
                class="form-control"
                :name="getName"
                :placeholder="getPlaceholder"
                :value="getValue" >
                <!--@keyup=onChange />-->
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',

        data () {
            return {
                message: 'Hello'
            };
        },

        props: {
            label: String,
            wrapperClass: String,
            fieldName: String,
            placeholder: String,
            value: String,
            onChange: String,
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
    }
</script>

<style>

</style>
