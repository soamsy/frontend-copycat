<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grab4">
    <template v-slot:title>
        Grab Bag IV
    </template>
    <template v-slot:problem>
        Multiple.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            The first line displays a serious editing error: “anymore more
            than” should be merely “any more than.”
        </p>
        <p class="mb-4">
            The second line is just poor translation and lackluster editorial
            oversight. It's hard to imagine writing this to be even vaguer than
            it already is: “he ate those inside there” means almost nothing.
            Japanese gets away with this because of fundamental differences in
            how speakers communicate, but English gets no such pass.
        </p>
        <p class="mb-4">
            The third line is awkward—people don't talk like this. Even just
            the two-word combination “reported arbitrarily” shows up fewer than
            1,000 times in the 50-100 billion web pages Google has indexed—and
            most results are from medical or scientific texts, not casual
            conversation. One first-page result is actually from Persona 5
            itself.
        </p>
        <p class="">
            The fourth line takes the cake by barely resembling the original
            Japanese:
            <ul>
                <li>
                    To start with, this line is spoken by a newscaster in the
                    background, and is supposed to be conveyed in an even,
                    professional manner. The exclamatory, panicked tone is a
                    fabrication not present in the original.
                </li>
                <li>
                    It's also written in very poor English. A more natural
                    phrasing (that doesn't fix the fundamental interpretation
                    issues) might be: “A city bus was driven against the flow
                    of traffic with its passengers still inside!”
                </li>
            </ul>
        </p>
    </template>
    </Problems>
</template>
