<template>
    <span>{{loadingDots}}&nbsp;</span>
</template>

<script>

    export default {
        name: 'LoadingDots',

        data() {
            return {
                frame: 0,
                intervalRef: null
            }
        },

        // props down, events up
        // get these props from parent
        props: {
            interval: {
                'type': [Number, String],
                'default': 300
            },
            dots: {
                'type': [Number, String],
                'default': 3
            }
        },

        mounted() {
            this.intervalRef = setInterval(() => {
                this.frame++;
                this.$store.dispatch('UPDATE_LOADING_FRAME', { frame: this.frame });
            }, this.interval);
        },

        beforeDestroy() {
            clearInterval(this.intervalRef);
        },

        computed: {
            loadingDots: function() {
                let numDots = parseInt(this.dots) + 1;
                let dots = this.$store.state.loadingFrame % (numDots);
                let text = '';
                while (dots > 0) {
                    text += '.';
                    dots--;
                }

                return text;
            }
        }

    }
</script>

<style>
</style>
