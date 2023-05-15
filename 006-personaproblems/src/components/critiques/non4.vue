<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.non4">
    <template v-slot:title>
        Nonsense IV
    </template>
    <template v-slot:problem>
        This isn't English.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            In the above lines, a romantic interest is asking if it's okay for her to move physically closer to the protagonist.
        </p>
        <p class="mb-4">
            I can't guarantee that I understand what the translator was going for here, but they seem to have written the caveman version of (the awkward but more understandable) “For me to move closer, is that okay?”
        </p>
        <p class="">
            A better writer might translate it as “Is it okay if I scootch over?” or maybe “Okay if I get close?” There are dozens of excellent alternatives, but the translation didn't make use of them.
        </p>
    </template>
    </Problems>
</template>
