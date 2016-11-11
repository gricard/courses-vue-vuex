<template>
  <svg class="spinner" :class="{ showspinner: show }" width="25px" height="25px" viewBox="0 0 40 40">
    <circle class="path" fill="none" stroke-width="3" stroke-linecap="round" cx="22" cy="22" r="10"></circle>
  </svg>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style>
    .spinner {
        /*position: fixed;*/
        /*right: 15px;*/
        /*bottom: 15px;*/
        position: relative;
        display: inline-block;
        top: 0;
        bottom: 0;
        /*z-index: 999;*/
        opacity: 0;
        transition: opacity 0.15s ease;
        animation: rotator 1.4s linear infinite;
        animation-play-state: paused;
    }

    .spinner.showspinner {
        opacity: 1;
        animation-play-state: running;
        display: inline-block;
    }

    .spinner .path {
        stroke: #f60;
        stroke-dasharray: 126;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash 1.4s ease-in-out infinite;
    }

    @-moz-keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }

        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }

    @-webkit-keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }

        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }

    @-o-keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }

        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }

    @keyframes rotator {
        0% {
            transform: scale(0.5) rotate(0deg);
        }

        100% {
            transform: scale(0.5) rotate(270deg);
        }
    }

    @-moz-keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }

        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }

        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }

    @-webkit-keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }

        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }

        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }

    @-o-keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }

        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }

        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: 126;
        }

        50% {
            stroke-dashoffset: 63;
            transform: rotate(135deg);
        }

        100% {
            stroke-dashoffset: 126;
            transform: rotate(450deg);
        }
    }
</style>
