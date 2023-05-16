<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.phrase2">
    <template v-slot:title>
        Phrase Abuse II
    </template>
    <template v-slot:problem>
        Overuse and misapplication of vocabulary.
    </template>
    <template v-slot:critique>
        <p class="">
            For whatever reason, this translation has a fixation on the word
            <em class="dazzle">problematic</em>. Some instances in the game are fine, but many (such as
            those above) only make the line sound unnatural.
        </p>
    </template>
    </Problems>
</template>
