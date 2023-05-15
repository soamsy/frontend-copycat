<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.phrase1">
    <template v-slot:title>
        Phrase Abuse I
    </template>
    <template v-slot:problem>
        An error of rumor.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Rumors play a prominent role in Persona 5, but these translations
            are simply terrible. For the first one alone, consider how much of
            an improvement it is to exchange “Are you really a bad person as
            the rumor says...?” for “Are you really as bad as people say...?”
        </p>
        <p class="">
            And then consider that professional voice actors had to say these
            lines aloud during recording. You can listen to Ann's voice actress
            attempt to sell the first line in her character trailer, but the
            handicap of poor writing really hurts the performance.
        </p>
    </template>
    </Problems>
</template>
