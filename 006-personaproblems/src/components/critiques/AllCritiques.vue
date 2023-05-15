<script setup>
    import { ref, reactive } from 'vue';
import { mod } from '../../utils.js';
import begin from './begin.vue';
import ce1 from './ce1.vue';
import ce2 from './ce2.vue';
import ce3 from './ce3.vue';
import non1 from './non1.vue';
import non2 from './non2.vue';
import non3 from './non3.vue';
import non4 from './non4.vue';
import grab1 from './grab1.vue';
import grab2 from './grab2.vue';
import grab3 from './grab3.vue';
import grab4 from './grab4.vue';
import grab5 from './grab5.vue';
import loc1 from './loc1.vue';
import loc2 from './loc2.vue';
import phrase1 from './phrase1.vue';
import phrase2 from './phrase2.vue';
import stock1 from './stock1.vue';
import stock2 from './stock2.vue';
import grammar1 from './grammar1.vue';
import voice1 from './voice1.vue';

const critiques = reactive([
  { component: begin, rotation: -15, },
  { component: ce1, rotation: -2, },
  { component: ce2, rotation: 11, },
  { component: ce3, rotation: -12, },
  { component: non1, rotation: -6, },
  { component: non2, rotation: 10, },
  { component: non3, rotation: -13, },
  { component: non4, rotation: 16, },
  { component: grab1, rotation: 7, },
  { component: grab2, rotation: 9, },
  { component: grab3, rotation: -10, },
  { component: grab4, rotation: 5, },
  { component: grab5, rotation: 16, },
  { component: loc1, rotation: -17, },
  { component: loc2, rotation: -8, },
  { component: phrase1, rotation: 6, },
  { component: phrase2, rotation: -6, },
  { component: stock1, rotation: 13, },
  { component: stock2, rotation: -10, },
  { component: grammar1, rotation: 11, },
  { component: voice1, rotation: -6, },
]);

const selectedCritique = ref(0);

const prev = () => {
    selectedCritique.value = mod(selectedCritique.value - 1, critiques.length);
}

const next = () => {
    selectedCritique.value = mod(selectedCritique.value + 1, critiques.length);
}

const bulletClass = (index) => {
    let classes = ['critique-bullet'];
    if (index % 5 == 0) {
        classes.push('big');
    }
    if (index == selectedCritique.value) {
        classes.push('selected');
    }
    return classes.join(' ');
}

const rotation = () => {
    return `transform: rotate(${critiques[selectedCritique.value].rotation}deg);`;
}

</script>


<template>
    <div class="mx-8 mt-28 mb-16 flex justify-between items-center">
        <button @click="prev()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] ml-5">‹</button>
        <div class="flex justify-center items-center">
            <button v-for="(c, index) in critiques" @click="selectedCritique = index" class="group p-1 relative">
                <div v-if="selectedCritique === index" class="absolute w-4 h-4 top-0 left-0 right-0 mx-auto origin-bottom flex justify-center rotate-1" :style="rotation(index)">
                    <div class="absolute top-[-1.2rem] flex items-center justify-center">
                        <div class="absolute bottom-0 h-12 w-6 border-b-2 rounded-b-sm border-black font-black text-persona-red bg-black text-xs flex justify-center items-center">
                            {{ index }}
                        </div>
                        <div class="absolute bottom-[-1.12rem] border-l-[0.75rem] border-r-[0.75rem] border-t-[1.2rem] border-l-transparent border-r-transparent border-black"></div>
                    </div>
                </div>
                <div :class="bulletClass(index)"></div>
            </button>
        </div>
        <button @click="next()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] mr-5">›</button>
    </div>
    <component :is="critiques[selectedCritique].component"></component>
</template>