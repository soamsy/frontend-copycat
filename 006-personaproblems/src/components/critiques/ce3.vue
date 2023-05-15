<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.ce3">
    <template v-slot:title>
        Comprehension Error III
    </template>
    <template v-slot:problem>
        Translation error.
    </template>
    <template v-slot:critique>
        This is backwards: the character in question actually mistook “someone
        like her” for “Character A's Ann,” not the other way around.
    </template>
    </Problems>
</template>
