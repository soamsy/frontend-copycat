<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.stock1">
    <template v-slot:title>
        Stock Translation I  
    </template>
    <template v-slot:problem>
        Repetitive stock translation.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Above are ten examples of the stock translation phrase “it can't be
            helped,” with many more instances in the script than I can list.
            While using the phrase is fine on occasion, relying on it by
            default is lazy and results in dull, repetitive writing.1
        </p>
        <p class="mb-4">
            Also consider: how often do you hear actual human beings use this
            phrase?
        </p>
        <hr/>
        <p class="">
            About as dull and repetitive as if it were done by a machine, in
            fact. Running the second-to-last line through Google Translate
            yields “It can not be helped in order to ascertain the truth” as
            the second suggestion, which is almost word-for-word identical to
            what ended up in the game. And as anyone in the translation
            industry will attest: Google Translate's JP-EN translations of
            creative writing are generally nonsense.
        </p>
    </template>
    </Problems>
</template>
