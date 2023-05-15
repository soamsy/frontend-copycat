<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.non1">
    <template v-slot:title>
        Nonsense I
    </template>
    <template v-slot:problem>
        Scattered dialogue.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
        Readers tend to be pretty smart, so most will figure out what's
        going on here. But this is still pretty much nonsense: what on
        earth does it mean to introduce yourself about something?
        </p>
        <p>
        The principal's lines are awful as well—he starts off almost
        coherent before descending into grammatical incorrectness and
        finally gibberish. “You might have done a variety of things in
        hiding in your hometown”?
        </p>
    </template>
    </Problems>
</template>