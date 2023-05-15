<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grab1">
    <template v-slot:title>
        Grab Bag I
    </template>
    <template v-slot:problem>
        Multiple.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            The noun form of scum is almost never used as if it were countable: the plural of scum is scum, not scums. (He is scum; they are scum.) Glaring errors such as this knock the reader right out of their immersion, which makes them especially important to fix before release.
        </p>
        <p class="mb-4">
            The second line contains the same type of mistake as the first: luggage is uncountable, and thus cannot be referred to as them. Doing so is akin to saying “Sunshine are warm” instead of “Sunshine is warm.”
        </p>
        <p class="mb-4">
            In the third line, “the option” should be “an option.”
        </p>
        <p class="">
            As for the fourth line: I can't even comprehend how this made it into the game. Aside from the translators, editors, and hypothetical QA completely failing to notice that the line is borderline gibberish, it's even voiced—which means that the character's voice actor was recorded saying this out loud in front of a room of people.
        </p>
    </template>
    </Problems>
</template>
