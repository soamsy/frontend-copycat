<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grab5">
    <template v-slot:title>
        Grab Bag V
    </template>
    <template v-slot:problem>
        Multiple.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            The first line is very poor English: “as if they're same.”
        </p>
        <p class="mb-4">
            The second line is... also very poor English. “What awful society
            ...”
        </p>
        <p class="mb-4">
            The third line is a good example of how people don't speak. It
            isn't even difficult to fix: “I hope it doesn't delay the
            trains...” is one simple option; “I hope the trains run on time...”
            is another.
        </p>
        <p class="mb-4">
            For the fourth line, there was almost certainly a way to render
            this without invoking Fate/stay night levels of memetic paradox or
            redundancy.
        </p>
        <p class="">
            And I guess the fifth line feels obliged to leave an exception for
            thieves who don't steal from others. Perhaps they only steal things
            they already own?
        </p>
    </template>
    </Problems>
</template>
