<script setup>
    import { reactive, ref } from 'vue';
import GoodTranslation from './GoodTranslation.vue';
import WhatIsTranslation from './WhatIsTranslation.vue';
import WhyFlawed from './WhyFlawed.vue';
import WhereNoise from './WhereNoise.vue';
import WhereProblems from './WhereProblems.vue';
const selected = ref('different');
const faq = reactive(new Map());
faq.set('different',   { question: 'How does "translation" differ from "localization"?', component: WhatIsTranslation });
faq.set('looklike',    { question: 'What does does good translation look like?', component: GoodTranslation });
faq.set('flawed',      { question: 'Why did Atlus release such a flawed translation?', component: WhyFlawed });
faq.set('complaining', { question: 'Why aren\'t more people complaining?', component: WhereNoise });
faq.set('wrong',       { question: 'Can you show me what\'s wrong?', component: WhereProblems })

</script>
<template>
    <div class="my-20 ml-12 flex gap-x-20 text-content">
        <div class="flex flex-col justify-around text-5xl font-extrabold">
            <div class="rl-backdrop rotate-2 !p-1 w-min">A</div>
            <div class="rl-backdrop rotate-6 !p-1 w-min">S</div>
            <div class="rl-backdrop rotate-[-3deg] !p-1 w-min">K</div>
        </div>
        <ul class="small-caps text-xl font-black">
            <li v-for="[key, value] in faq" @click="selected = key" class="relative p-1 cursor-pointer hover:underline">
                <span :class="'faq-bullet-red' + ((key === selected) ? ' selected' : '')">{{ value.question }}</span>
            </li>
        </ul>
    </div>
    <component :is="faq.get(selected).component"></component>
</template>