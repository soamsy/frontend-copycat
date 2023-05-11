<script setup>
  import KanaTable from './components/KanaTable.vue'
import { ref, reactive, watch, onMounted, onUpdated } from 'vue';
import tables from './tables.js';

let hiragana = reactive({
  toggles: new Set(),
  display: tables.hiragana
})

let hiraganaCombinations = reactive({
  toggles: new Set(),
  display: tables.hiraganaCombinations
})

let katakana = reactive({
  toggles: new Set(),
  display: tables.katakana
})

let katakanaCombinations = reactive({
  toggles: new Set(),
  display: tables.katakanaCombinations,
});

const showOptions = ref(true);
const input = ref('');
const successes = ref(0);
const error = ref('');
const history = reactive([]);

const updateTable = (table, index, value) => {
  if (value) 
    table.toggles.add(index);
  else 
    table.toggles.delete(index);
}

const playAudio = () => {
  const [_, romaji] = selected.value;
  const audio = new Audio(`https://itazuraneko.neocities.org/learn/kana/audio/${romaji}.mp3`);
  audio.play();
};

const getNext = () => {
  let count = hiragana.toggles.size + hiraganaCombinations.toggles.size + katakana.toggles.size + katakanaCombinations.toggles.size;
  console.log(count);
  if (count === 0) {
    hiragana.toggles.add(0);
  }

  let lastAnswered = history?.[history.length - 1]?.[0];
  let options = [];
  for (let { toggles, display } of [hiragana, hiraganaCombinations, katakana, katakanaCombinations]) {
    for (let index of toggles) {
      options.push.apply(options, display[index].filter(([kana, _]) => kana));
    }
  }

  if (options.length === 1) {
    return options[0];
  }

  options = options.filter(([kana, _]) => kana !== lastAnswered);

  let index = Math.floor(Math.random() * options.length);
  return options[index];
}

const selected = ref(getNext());

watch(input, () => {
  if (!input.value)
    return;
  const [kana, romaji] = selected.value;
  if (input.value === romaji) {
    history.push(selected.value);
    selected.value = getNext();
    if (!error.value) {
      successes.value++;
    }
    input.value = '';
    error.value = '';
  } else if (romaji.startsWith(input.value)) {
    return;
  } else {
    error.value = `${kana} = ${romaji}`;
  }
})


</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <a id="top"></a>
    <a href="#top" class="fixed p-5 right-3 bottom-6 rounded bg-neutral-700 hover:bg-neutral-100 hover:text-black">▲</a>
    <div class="py-4 px-2 container mx-auto lg:max-w-3xl">
      <h1 class="text-3xl">Learn kana</h1>
      <hr class="my-6 border-dashed">
      <div class="m-4 p-6 shadow-xl flex flex-col items-center">
        <div class="text-9xl text-center">{{ selected?.[0] }}</div>
        <input v-model="input" class="my-6 w-72 bg-zinc-800 text-center" type="text">
        <div class="min-h-[2rem]">
          <div v-if="!error && history.length == 0" class="text-lg">Hover over the kana to show its romanization and type the answer.</div>
          <div v-if="error" class="text-red-500 text-2xl">{{ error }}</div>
        </div>
        <div class="my-2 self-start flex gap-x-4">
          <button @click="playAudio" class="py-2 px-3 shadow-md underline-button">Play sound</button>
          <button class="py-2 px-3 shadow-md underline-button">Stroke order</button>
        </div>
        <div v-if="history.length > 0" class="mt-6 self-start"> {{ successes }} / {{ history.length }}</div>
      </div>
      <hr class="my-6 border-dashed">
      <button @click="showOptions = !showOptions" class="py-2 px-6 block mx-auto font-semibold shadow-lg underline-button">show/hide options</button>
      <div v-if="showOptions" class="my-8 flex flex-col gap-y-2">
        <KanaTable title="Hiragana" :toggles="hiragana.toggles" @update:toggle="(i, value) => updateTable(hiragana, i, value)" :display="hiragana.display"></KanaTable>
        <KanaTable title="Hiragana combinations" :toggles="hiraganaCombinations.toggles" @update:toggle="(i, value) => updateTable(hiraganaCombinations, i, value)" :display="hiraganaCombinations.display"></KanaTable>
        <KanaTable title="Katakana" :toggles="katakana.toggles" @update:toggle="(i, value) => updateTable(katakana, i, value)" :display="katakana.display"></KanaTable>
        <KanaTable title="Katakana combinations" :toggles="katakanaCombinations.toggles" @update:toggle="(i, value) => updateTable(katakanaCombinations, i, value)" :display="katakanaCombinations.display"></KanaTable>
        <h2 class="my-4 text-xl">Explanation</h2>
        <p class="my-2 text-lg">Grind a row of kana until you stop making mistakes, then add another row. Cross reference the <code class="p-1 font-mono text-sm bg-black">kana audio chart</code> link to make sure you are pronouncing the kana correctly. If you wish to write, the <code class="p-1 font-mono text-sm bg-black">Stroke order</code> link will show you the proper form. You can save a few keystrokes on DJT Kana and your IME with the shortcuts below.</p>
        <img class="w-1/2 mx-auto" src="./assets/shortcuts.png" alt="">
        <p class="my-2 text-lg">The two dots (<a class="link" target="_blank" href="https://en.wikipedia.org/wiki/Dakuten_and_handakuten">dakuten</a>) next to certain kana indicate that the consonant is "muddied". For example, か (ka) becomes が (ga). The consonants transform as follows:</p>
        <ul class="pl-10 text-lg list-disc">
          <li>k -> g</li>
          <li>t -> d</li>
          <li>h/f -> b</li>
          <li>s/ts -> z</li>
          <li>sh/ch -> j</li>
        </ul>
        <p class="my-2 text-lg">A few kana add a circle to indicate a "p" transformation. For example, ほ (ho) becomes ぽ (po).</p>
        <p class="my-2 text-lg">The smaller kana ゅ, ょ, and ゃ are used to combine kana sounds. For example, in ぎゃ the consonant of ぎ (gi) combines with the sound from や (ya): gya. The small っ (distinct from つ/tsu) is not itself pronounced, but lengthens the consonant that follows, as in にっぽん (<a class="link" target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/d/db/Ja-nippon%28%E6%97%A5%E6%9C%AC%29.ogg">nippon</a>); the effect of holding your mouth in the consonant's position resembles a small pause. Tae Kim has more information.</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
