<script setup>
    import Problems from '../Problems.vue'
    import scripts from './scripts.js';
</script>

<template>
    <Problems :script="scripts.non2">
    <template v-slot:title>
        Nonsense II
    </template>
    <template v-slot:problem>
        Scattered dialogue.
    </template>
    <template v-slot:critique>
        <p class="mb-4">
            These four lines fail to convey a coherent progression of thought:
            shuffle them in any order you please and they'll make about the
            same degree of sense.
        </p>
        <p class="mb-4">
            The human brain is excellent at pulling meaning out of nonsense,
            but this <strong><em>isn't meant to be a puzzle</em></strong>—it's supposed to be enjoyable
            dialogue in one of the best RPGs of the decade.
        </p>
        <p class="mb-4">
            First line: More or less acceptable; included for context.
        </p>
        <p class="mb-4">
            Second line: First off, this line starts with “still,” which
            indicates an incoming contradiction to what was said before... but
            instead it doubles down by reinforcing the previous statement. The
            use of <em class="dazzle">re-enroll</em> is misleading—he isn't enrolling at the same
            institution—and the reference to “a different one” never states
            what the “one” even is (a school).
        </p>
        <p class="mb-4">
            Third line: “be sympathetic with” is a terrible way to say
            <em class="dazzle">sympathize</em>. But even had that not been an issue, this line just
            doesn't flow from the previous one.
        </p>
        <p class="">
            Fourth line: And here we conclude with a non-sequitur. What is
            happening with the verb tenses? What is meant by what it's “like”
            at school? How does this connect with the previous point about
            sympathy?
        </p>
    </template>
    </Problems>
</template>
