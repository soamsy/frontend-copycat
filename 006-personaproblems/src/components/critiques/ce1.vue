<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.ce1">
    <template v-slot:title>
        Comprehension Error I
    </template>
    <template v-slot:problem>
        Translation error.
    </template>
    <template v-slot:critique>
        The detective isn't psychic: he's actually referring to a <em>previous</em>
        call that <em>he</em> had received, not the one Sae is about to receive. And
        his irate command to “get it over with” doesn't refer to the phone
        call, but to the interrogation about to take place. 
    </template>
    </Problems>
</template>
