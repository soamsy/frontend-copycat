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
            The Japanese word for <em class="dazzle">bread</em> is <em
            class="dazzle">pan</em>, which was borrowed from the Portugese <em
            class="dazzle">pão</em> (itself derived from the Latin <em
            class="dazzle">pānis</em>, similar to the French <em
            class="dazzle">pain</em>). That is to say... there's absolutely no
            reason to use “yakisoba pan” instead of “yakisoba bread,” especially if the
            translation also uses “fried bread” and “jam bread,” both of which contain
            <em class="dazzle">pan</em> in Japanese. <span class="ref">1</span>
        </p>
        <p class="mb-4">
            For readers with no knowledge of Japanese, the juxtaposition of <em
            class="dazzle">pan</em> and <em class="dazzle">bread</em>—as if
            they were different things—is likely to suggest that yakisoba pan is
            actually a sheet of metal used for baking something called yakisoba.
        </p>
        <hr class="mb-3"/>
        <p class="text-sm relative">
            <span class="absolute left-[-1rem]">1:</span>
            Consider also that <em class="dazzle">Gyūdon</em> was translated as
            <em class="dazzle">beef bowl</em>, even to the point of awkwardness
            (“beef bowl shop”).
        </p>
    </template>
    </Problems>
</template>
