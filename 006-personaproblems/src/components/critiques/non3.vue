<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.non3">
    <template v-slot:title>
        Nonsense III
    </template>
    <template v-slot:problem>
        Everything.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Persona 5 contains an interrogation scene, split into several
            parts, and it suffers from the most consistently poor translation
            of possibly any scene in the game. All the lines seen above are
            from that scene, and all are spoken by the same character.
        </p>
        <p class="mb-4">
            This character is supposed to be intelligent, well-spoken, and
            insightful, but readers of the English translation would be
            forgiven for thinking she's one lightbulb short of a cutlery set.
        </p>
        <p>
            The above lines lack personality, flow poorly even in context, and
            are worded unnaturally—people don't speak like this, even in
            fiction. Characterization and reader understanding are both harmed,
            and the creator's intent isn't conveyed.
        </p>
    </template>
    </Problems>
</template>
