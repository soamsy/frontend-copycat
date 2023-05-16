<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.grab2">
    <template v-slot:title>
        Grab Bag II
    </template>
    <template v-slot:problem>
        Multiple.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            The first line manages to bundle a stock translation phrase with a
            strange, apparently truncated form of “transfer student.”
        </p>
        <p class="mb-4">
            The second line is highly unnatural: <em class="dazzle">film
                shoot</em>, <em class="dazzle">TV shoot</em>, or almost any
            replacement for <em class="dazzle">filming</em> would improve it
            immensely.
        </p>
        <p class="mb-4">
            The third line manages to mess up film terminology in yet another
            way: a <em class="dazzle">TV set</em> is a physical television,
            i.e. a box with a screen on which one watches TV. They wanted <em
            class="dazzle">movie set</em> or <em class="dazzle">film set</em>.
        </p>
        <p class="mb-4">
            The fourth line is likely to fly under the radar for those
            accustomed to bad translations of shounen anime, but it's rather
            unnatural: nobody ever says “I feel <em>an</em> intent.” Consider
            also that English has the perfectly serviceable <em
            class="dazzle">bloodlust</em>.
        </p>
        <p class="mb-4">
            As for the fifth line: <em class="dazzle">abominous</em> is not, in
            fact, a real word. <em class="dazzle">Horrendous</em>, yes; <em
            class="dazzle">abominable</em>, also yes. But alas,<span
            class="ref">1</span> never the twain shall meet.
        </p>
        <p class="mb-4">
            Now, one possible explanation might be that the speaker was simply
            making up a word for comedic effect, or that it's a quirk of their
            character. Unfortunately, neither is the case: the context is
            supposed to be serious and dramatic, not comedic, and the character
            has no such quirk.
        </p>
        <hr/>
        <p class="mb-4">
            1: Or maybe not; we have enough words for terrible things in the
            English language.
        </p>
    </template>
    </Problems>
</template>
