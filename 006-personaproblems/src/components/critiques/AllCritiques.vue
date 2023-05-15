<script setup>
    import { ref, reactive } from 'vue';
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
  { component: begin, rotation: 1, },
  { component: ce1, rotation: 1, },
  { component: ce2, rotation: 1, },
  { component: ce3, rotation: 1, },
  { component: non1, rotation: -3, },
  { component: non2, rotation: -3, },
  { component: non3, rotation: -3, },
  { component: non4, rotation: -3, },
  { component: grab1, rotation: -3, },
  { component: grab2, rotation: -3, },
  { component: grab3, rotation: -3, },
  { component: grab4, rotation: -3, },
  { component: grab5, rotation: -3, },
  { component: loc1, rotation: -3, },
  { component: loc2, rotation: -3, },
  { component: phrase1, rotation: -3, },
  { component: phrase2, rotation: -3, },
  { component: stock1, rotation: -3, },
  { component: stock2, rotation: -3, },
  { component: grammar1, rotation: -3, },
  { component: voice1, rotation: -3, },
]);

const selectedCritique = ref(0);

</script>


<template>
    <div class="flex justify-between items-center">
        <button @click="prev()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] ml-5">‹</button>
        <div class="flex justify-center items-center">
            <button v-for="(c, index) in critiques" @click="selectedCritique = index" class="group p-1"><div :class="'critique-bullet' + (index % 5 == 0 ? ' big' : '') + (index == selectedCritique ? ' selected' : '')"></div></button>
        </div>
        <button @click="next()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] mr-5">›</button>
    </div>
    <component :is="critiques[selectedCritique].component"></component>
</template>