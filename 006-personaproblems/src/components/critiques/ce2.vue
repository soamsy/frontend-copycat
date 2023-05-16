<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.ce2">
    <template v-slot:title>
        Comprehension Error II
    </template>
    <template v-slot:problem>
        Translation error.
    </template>
    <template v-slot:critique>
        This was translated exactly backwards: Character B is actually saying
        that the person addressed is <em>not</em> a part-timer.
    </template>
    </Problems>
</template>
