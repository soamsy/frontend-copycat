<script setup>
import { ref, computed, useSlots, onMounted, watch } from 'vue';
import { mod } from '../utils.js';

const slots = useSlots();
const currentIndex = ref(0);
const slidingAway = ref(false);
const hidden = ref(true);
const nextIndex = ref(0);

const count = computed(() => {
    return slots.default().length;
});

const currentSlide = () => {
    return slots.default()[currentIndex.value];
}

let currentTimeout = null;
let elapsed = 0;
let start = 0;
const slideTo = (i) => {
    abortInterval();
    nextIndex.value = i;
    slidingAway.value = true;
    if (currentTimeout) {
        clearTimeout(currentTimeout);
        currentTimeout = null;
        elapsed += Date.now() - start;
    }
    start = Date.now();
    currentTimeout = setTimeout(() => {
        currentIndex.value = nextIndex.value;
        slidingAway.value = false;
        hidden.value = false;
        elapsed = 0;
        currentTimeout = null;
        resetInterval();
    }, Math.max(0, 800 - elapsed));
};

watch(hidden, (newVal) => {
    if (!newVal) {
        setTimeout(() => {
            hidden.value = true;
        }, 10);
    }
});

const prev = () => {
    slideTo(mod(nextIndex.value - 1, count.value));
};

const next = () => {
    slideTo(mod(nextIndex.value + 1, count.value));
}

const slideClass = () => {
    let classes = ['max-w-3xl', 'transition-all', 'duration-700', 'ease'];
    if (slidingAway.value) {
        classes.push('my-dip');
    }

    if (!hidden.value)
        classes.push('opacity-0')
    else
        classes.push('opacity-100');
    return classes.join(' ');
}

const paginationStyle = (index) => {
    if (index === nextIndex.value) {
        return "background-color: black;";
    } else {
        return "background-color: rgba(0,0,0,0.4);";
    }
}

let interval = null;
const abortInterval = () => {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

const resetInterval = () => {
    abortInterval();
    interval = setInterval(() => {
        next();
    }, 3300);
}


onMounted(() => {
    resetInterval();
});

</script>

<template>
    <div class="flex justify-between items-center">
        <button @click="prev()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] ml-5">‹</button>
        <div :class="slideClass()">
            <currentSlide />
        </div>
        <button @click="next()" class="text-[5rem] font-extrabold opacity-30 hover:opacity-100 transition-all duration-200 mt-[-1rem] mr-5">›</button>
    </div>
    <div class="my-3 flex justify-center items-center gap-x-1">
        <div class="pl-2 inline-block cursor-pointer" v-for="index in count">
            <div @click="slideTo(index-1)" class="w-3 h-3 rounded-full hover:!bg-backdrop" :style="paginationStyle(index-1)"></div>
        </div>
    </div>
</template>

<style scoped>
@keyframes dip {
    0% {transform: translateX(0); opacity: 1;} 
    35% {transform: translateX(5rem); opacity: 1;} 
    100% {transform: translateX(-100vw); opacity: 0;} 
} 

.my-dip {
    animation: dip 1.0s forwards;
}

</style>
