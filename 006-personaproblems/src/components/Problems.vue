<script setup>
import { ref, computed, inject } from 'vue';

const lang = ref('EN');

const props = defineProps({
    script: {
        type: Array,
        required: true
    }
})

const altExists = computed(() => {
    return props.script.some(line => line.textALT);
})

const prev = inject('prev');
const next = inject('next');

</script>
<template>
    <div class="p-14 bg-black text-white">
        <h2 class="mb-10 text-3xl font-extrabold text-persona-red">
            <slot name="title"></slot>
        </h2>
        <div class="mx-10 mb-10 flex flex-col gap-y-4 text-lg">
            <div v-for="line in props.script" class="p-4 bg-neutral-800">
                <div v-if="line.character" class="font-extrabold">{{ line.character }}:</div>
                <div v-if="lang === 'EN' && line.text">{{ line.text }}</div>
                <div v-if="lang === 'JP' && line.textJP">{{ line.textJP }}</div>
                <div v-if="lang === 'ALT' && line.textALT">{{ line.textALT }}</div>
                <div v-if="line.narration" class="italic text-center">{{ line.narration }}</div>
            </div>
            <div class="flex justify-center gap-x-2 font-extrabold text-persona-red">
                <button @click="lang = 'EN'" class="py-1 px-4" :class="lang === 'EN' ? 'bg-persona-red text-black' : ''">EN</button>
                <button @click="lang = 'JP'" class="py-1 px-4" :class="lang === 'JP' ? 'bg-persona-red text-black' : ''">JP</button>
                <button v-if="altExists" @click="lang = 'ALT'" class="py-1 px-4" :class="lang === 'ALT' ? 'bg-persona-red text-black' : ''">ALT</button>
            </div>
        </div>
        <div class="mb-4 font-bold text-persona-red tracking-wide">T<span class="rl-br rotate-2">h</span>e Problem:</div>
        <div class="mb-6 ml-10">
            <slot name="problem"></slot>
        </div>
        <div class="mb-4 font-bold text-persona-red tracking-wide">The Criti<span class="rl-br rotate-3">q</span>ue:</div>
        <div class="mb-6 ml-10">
            <slot name="critique"></slot>
        </div>
        <div class="mb-[-1rem] flex justify-between text-lg tracking-wide text-persona-red">
            <div @click="prev()" class="p-2 flex gap-x-2 opacity-80 hover:opacity-100 cursor-pointer group"><span>←</span><span class="group-hover:underline">Previous</span></div>
            <div @click="next()" class="p-2 flex gap-x-2 opacity-80 hover:opacity-100 cursor-pointer group"><span class="group-hover:underline">Next</span><span>→</span></div>
        </div>
    </div>
</template>