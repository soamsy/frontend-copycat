<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grab3">
    <template v-slot:title>
        Grab Bag III
    </template>
    <template v-slot:problem>
        Multiple.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            First line: Unless the speaker literally means matters of dessert, they want <em class="dazzle">trifling</em>, not <em class="dazzle">trifle</em>.<span
            class="ref">1</span> Additionally, this line uses the best-avoided translation-ism “What [noun]!”
        </p>
        <p class="mb-4">
            Second line: This is an unclear grammatical mess. What's happening with the tenses?
        </p>
        <p class="mb-4">
            Third line: This is a victim of poor translation. It's both overly vague and extremely unnatural.
        </p>
        <p class="mb-4">
            Fourth line: The speaker is attempting to say that every country has its own way of saying “it's raining cats and dogs,” but readers would have to squint hard and maybe tilt their heads to pick up on that. An extremely literal translation.
        </p>
        <p class="mb-4">
            Fifth line: I don't know which capable woman had her aura stolen so that Makoto's sister could overflow with it, but I guarantee that she'd be happier if this line had been better worded.
        </p>
        <hr/>
        <p class="mb-4">
            Trifle: “a dessert typically consisting of plain or sponge cake often soaked with wine or spirits (such as brandy or rum) and topped with layers of preserves, custard, and cream.”
        </p>
    </template>
    </Problems>
</template>
