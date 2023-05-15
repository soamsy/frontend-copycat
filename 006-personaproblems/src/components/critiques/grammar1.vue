<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grammar1">
    <template v-slot:title>
        Grammar I
    </template>
    <template v-slot:problem>
        Multiple basic errors.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Nice variety of errors on display here:
        </p>
        <p class="mb-4">
            Line 1: The first half of this line is awkward, and the second half
            is incorrect: one cannot “do” a feat. (Substitute accomplished and
            see what a difference it makes.) And the use of feat is dubious in
            the first place—rehabilitation is a process, not a feat; it's the
            completion of rehabilitation that might be considered one.
        </p>
        <p class="mb-4">
            Line 2: Elementary verb-tense agreement failure: “haven't you”
            should be “didn't you.” This line also follows the contradiction in
            the previous line (“Yet...”) with another contradiction (“But...”),
            which makes it unclear exactly what the speaker's point is.
        </p>
        <p class="">
            Line 3: It's incorrect to use myself if I didn't come earlier in
            the sentence; it should instead be me. Compare: “I am not myself”
            and “He is not me.”
        </p>
    </template>
    </Problems>
</template>
