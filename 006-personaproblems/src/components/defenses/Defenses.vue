<script setup>
    import { reactive, ref } from 'vue';
import PreferLiteral from './PreferLiteral.vue';
import BitStiff from './BitStiff.vue';
import FeelJapanese from './FeelJapanese.vue';
import GameMassive from './GameMassive.vue';
import NothingWrong from './NothingWrong.vue';

const selected = ref('literal');
const faq = reactive(new Map());
faq.set('literal',   { question: 'I prefer literal translations because they’re more faithful.', component: PreferLiteral });
faq.set('bitstiff',    { question: 'The language is a bit stiff, but everything is still accurate.', component: BitStiff });
faq.set('feeljapanese',      { question: 'I like that I can feel the Japanese behind the translation.', component: FeelJapanese });
faq.set('gamemassive', { question: 'The game is massive, so mistakes were bound to happen.', component: GameMassive });
faq.set('nothingwrong',       { question: 'There\'s nothing wrong.', component: NothingWrong })

</script>
<template>
    <div class="mt-20 mb-16 flex flex-col items-center text-backdrop">
        <h2 class="mb-6 text-4xl font-extrabold tracking-wide">
            Defe<span class="rl-backdrop rotate-3">n</span>ses of Bad Tr<span class="rl-backdrop rotate-[4deg]">a</span>ns<span class="rl-backdrop rotate-[-1deg]">l</span>ation
        </h2>
        <ul class="small-caps text-xl font-black">
            <li v-for="[key, value] in faq" @click="selected = key" class="relative p-1 cursor-pointer hover:underline">
                <span :class="'faq-bullet-red' + ((key === selected) ? ' selected' : '')">{{ value.question }}</span>
            </li>
        </ul>
    </div>
    <div class="mb-24 max-w-3xl mx-auto">
        <component :is="faq.get(selected).component"></component>
    </div>
</template>