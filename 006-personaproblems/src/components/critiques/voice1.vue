<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.voice1">
    <template v-slot:title>
        Character Voice I
    </template>
    <template v-slot:problem>
        Inconsistent character voice.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            Here's a quiz: Each line above is said by one of two characters. Which lines belong to each character? Make a mental note of your guess before continuing on.
        </p>
        <p class="mb-4">
            If you're ready, here's the answer key:
            <ul>
                <li>
                    Line #1: Character A
                </li>
                <li>
                    Line #2: Character B
                </li>
                <li>
                    Line #3: Character A
                </li>
                <li>
                    Line #4: Character A
                </li>
            </ul>
        </p>
        <p class="mb-4">
            Yep, all of them are by the same character, except for the second line—and yet character voice is so inconsistent that the third line feels much closer to the second than to the first or fourth, even though the second is by an entirely different character. That's a <em>huge</em> problem.
        </p>
        <p class="mb-4">
            Note that I even made the quiz easier by including one of the few characters to possess a distinctive voice.<span class="ref">1</span> Most other characters don't just suffer from a lack of consistency, but a lack of voice that often makes them sound virtually interchangeable.
        </p>
        <p class="mb-4">
            This is a significant step down from the Japanese version.
        </p>
        <hr class="mb-3"/>
        <p class="relative text-sm">
            <span class="absolute left-[-1rem]">1:</span>
            Namely Ryuji, who was Character B—notable as having received perhaps the most personality of any character in the translation. Character A was Sojiro.
        </p>
    </template>
    </Problems>
</template>
