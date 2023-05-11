<script setup>
  import { onMounted, ref } from 'vue'

const emit = defineEmits(['update:toggle']);

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  toggles: {
    type: Set,
    required: true,
  },
  display: {
    type: Array,
    required: true,
  },
});

const checkAll = (val) => {
  for (let i = 0; i < props.display.length; i++) {
    emit('update:toggle', i, val);
  }
}


const calculateRowStyle = () => {
    return `grid-template-rows: 2rem repeat(${props.display[0].length}, minmax(0, 1fr));`;
}

</script>

<template>
  <div>
    <div class="my-1 flex justify-evenly items-center font-semibold">
      <div class="text-2xl">{{ title }}</div>
      <div class="p-2">
        <button class="py-2 px-3 mx-2 shadow underline-button" @click="checkAll(true)">check all</button>
        <button class="py-2 px-3 mx-2 shadow underline-button" @click="checkAll(false)">uncheck all</button>
      </div>
    </div>
    <div class="text-xl grid grid-flow-col" :style="calculateRowStyle()">
      <template v-for="(col, index) in display">
        <div class="text-center border border-black bg-zinc-700">
          <input type="checkbox" :checked="toggles.has(index)" @change="emit('update:toggle', index, !toggles.has(index))">
        </div>
        <div class="p-2 border border-black" v-for="[kana, romaji] in col">
          <div>{{ kana }}</div>
          <div>{{ romaji }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
</style>
