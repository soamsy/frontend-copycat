<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.stock2">
    <template v-slot:title>
        Stock Translation II
    </template>
    <template v-slot:problem>
        Repetitive stock translation... again.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Can you say 「さすが」?
        </p>
        <p class="">
            Every single one of these lines could have been rewritten to not
            only avoid the stock phrase, but better convey the creator's
            intent. Stock phrases mask character voice by making everyone sound
            homogeneous and mechanical.
        </p>
    </template>
    </Problems>
</template>
