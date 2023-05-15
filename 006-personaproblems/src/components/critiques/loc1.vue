<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.loc1">
    <template v-slot:title>
        Localization I
    </template>
    <template v-slot:problem>
        Inconsistent localization.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            The Japanese word for bread is pan, which was borrowed from the
            Portugese pão (itself derived from the Latin pānis, similar to the
            French pain). That is to say... there's absolutely no reason to use
            “yakisoba pan” instead of “yakisoba bread,” especially if the
            translation also uses “fried bread” and “jam bread,” both of which
            contain pan in Japanese.1
        </p>
        <p class="mb-4">
            For readers with no knowledge of Japanese, the juxtaposition of pan
            and bread—as if they were different things—is likely to suggest
            that yakisoba pan is actually a sheet of metal used for baking
            something called yakisoba.
        </p>
        <hr/>
        <p class="">
            Consider also that Gyūdon was translated as beef bowl, even to the
            point of awkwardness (“beef bowl shop”).
        </p>
    </template>
    </Problems>
</template>
