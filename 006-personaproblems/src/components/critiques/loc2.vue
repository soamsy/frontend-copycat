<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.loc2">
    <template v-slot:title>
        Localization II
    </template>
    <template v-slot:problem>
        Ineffective localization.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Generally speaking, readers require a translation because they
            don't understand the original language. How, then, are they
            supposed to make sense of the above? You need significant Japanese
            language skills to know that the Japanese word for dreadnought is a
            loanword from English and is written as ドレッドノート, which
            romanizes to doreddonōto... which is where the “do” comes from.
        </p>
        <p class="mb-4">
            Readers won't understand this, and that means the localization has
            failed at the most basic level.
        </p>
        <p class="">
            Japanese culture shouldn't be removed from the game, but it needs
            to be presented more effectively than it is here. Failing to
            communicate foreign concepts is as bad as or worse than removing
            them entirely.
        </p>
    </template>
    </Problems>
</template>
