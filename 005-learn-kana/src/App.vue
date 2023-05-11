<script setup>
  import KanaTable from './components/KanaTable.vue'
import { ref, reactive } from 'vue';

const kana = ref('あ');
const showOptions = ref(true);
const input = ref('');
const successes = ref(0);
const total = ref(0);
const error = ref('');

let hiragana = reactive({
  toggles: new Set(),
  display: [
  [["あ", "a"], ["い", "i"], ["う", "u"], ["え", "e"], ["お", "o"]],
  [["か", "ka"], ["き", "ki"], ["く", "ku"], ["け", "ke"], ["こ", "ko"]],
  [["さ", "sa"], ["し", "shi"], ["す", "su"], ["せ", "se"], ["そ", "so"]],
  [["た", "ta"], ["ち", "chi"], ["つ", "tsu"], ["て", "te"], ["と", "to"]],
  [["な", "na"], ["に", "ni"], ["ぬ", "nu"], ["ね", "ne"], ["の", "no"]],
  [["は", "ha"], ["ひ", "hi"], ["ふ", "fu"], ["へ", "he"], ["ほ", "ho"]],
  [["ま", "ma"], ["み", "mi"], ["む", "mu"], ["め", "me"], ["も", "mo"]],
  [["や", "ya"], ["", ""], ["ゆ", "yu"], ["", ""], ["よ", "yo"]],
  [["ら", "ra"], ["り", "ri"], ["る", "ru"], ["れ", "re"], ["ろ", "ro"]],
  [["わ", "wa"], ["", ""], ["", ""], ["", ""], ["を", "wo"]],
  [["", ""], ["", ""], ["", ""], ["", ""], ["ん", "n"]],
  [["が", "ga"], ["ぎ", "gi"], ["ぐ", "gu"], ["げ", "ge"], ["ご", "go"]],
  [["ざ", "za"], ["じ", "ji"], ["ず", "zu"], ["ぜ", "ze"], ["ぞ", "zo"]],
  [["だ", "da"], ["ぢ", "ji"], ["づ", "zu"], ["で", "de"], ["ど", "do"]],
  [["ば", "ba"], ["び", "bi"], ["ぶ", "bu"], ["べ", "be"], ["ぼ", "bo"]],
  [["ぱ", "pa"], ["ぴ", "pi"], ["ぷ", "pu"], ["ぺ", "pe"], ["ぽ", "po"]],
  ]
})

let hiraganaCombinations = reactive({
  toggles: new Set(),
  display: [
    [["きゃ", "kya"], ["きゅ", "kyu"], ["きょ", "kyo"], ],
    [["しゃ", "sha"], ["しゅ", "shu"], ["しょ", "sho"], ],
    [["ちゃ", "cha"], ["ちゅ", "chu"], ["ちょ", "cho"], ],
    [["にゃ", "nya"], ["にゅ", "nyu"], ["にょ", "nyo"], ],
    [["ひゃ", "hya"], ["ひゅ", "hyu"], ["ひょ", "hyo"], ],
    [["みゃ", "mya"], ["みゅ", "myu"], ["みょ", "myo"], ],
    [["りゃ", "rya"], ["りゅ", "ryu"], ["りょ", "ryo"], ],
    [["ぎゃ", "gya"], ["ぎゅ", "gyu"], ["ぎょ", "gyo"], ],
    [["じゃ", "ja"], ["じゅ", "ju"], ["じょ", "jo"], ],
    [["ぢゃ", "ja"], ["ぢゅ", "ju"], ["ぢょ", "jo"], ],
    [["びゃ", "bya"], ["びゅ", "byu"], ["びょ", "byo"], ],
    [["ぴゃ", "pya"], ["ぴゅ", "pyu"], ["ぴょ", "pyo"], ],
  ]
})

// アイウエオ
let katakana = reactive({
  toggles: new Set(),
  display: [
    [["ア", "a"], ["イ", "i"], ["ウ", "u"], ["エ", "e"], ["オ", "o"], ],
    [["カ", "ka"], ["キ", "ki"], ["ク", "ku"], ["ケ", "ke"], ["コ", "ko"], ],
    [["サ", "sa"], ["シ", "shi"], ["ス", "su"], ["セ", "se"], ["ソ", "so"], ],
    [["タ", "ta"], ["チ", "chi"], ["ツ", "tsu"], ["テ", "te"], ["ト", "to"], ],
    [["ナ", "na"], ["ニ", "ni"], ["ヌ", "nu"], ["ネ", "ne"], ["ノ", "no"], ],
    [["ハ", "ha"], ["ヒ", "hi"], ["フ", "fu"], ["ヘ", "he"], ["ホ", "ho"], ],
    [["マ", "ma"], ["ミ", "mi"], ["ム", "mu"], ["メ", "me"], ["モ", "mo"], ],
    [["ヤ", "ya"], ["", ""], ["ユ", "yu"], ["", ""], ["ヨ", "yo"], ],
    [["ラ", "ra"], ["リ", "ri"], ["ル", "ru"], ["レ", "re"], ["ロ", "ro"], ],
    [["ワ", "wa"], ["", ""], ["", ""], ["", ""], ["ヲ", "wo"], ],
    [["", ""], ["", ""], ["", ""], ["", ""], ["ン", "n"], ],
    [["ガ", "ga"], ["ギ", "gi"], ["グ", "gu"], ["ゲ", "ge"], ["ゴ", "go"], ],
    [["ザ", "za"], ["ジ", "ji"], ["ズ", "zu"], ["ゼ", "ze"], ["ゾ", "zo"], ],
    [["ダ", "da"], ["ヂ", "ji"], ["ヅ", "zu"], ["デ", "de"], ["ド", "do"], ],
    [["バ", "ba"], ["ビ", "bi"], ["ブ", "bu"], ["ベ", "be"], ["ボ", "bo"], ],
    [["パ", "pa"], ["ピ", "pi"], ["プ", "pu"], ["ペ", "pe"], ["ポ", "po"], ],
  ]
})

let katakanaCombinations = reactive({
  toggles: new Set(),
  display: [
    [["キャ", "kya"], ["キュ", "kyu"], ["キョ", "kyo"], ],
    [["シャ", "sha"], ["シュ", "shu"], ["ショ", "sho"], ],
    [["チャ", "cha"], ["チュ", "chu"], ["チョ", "cho"], ],
    [["ニャ", "nya"], ["ニュ", "nyu"], ["ニョ", "nyo"], ],
    [["ヒャ", "hya"], ["ヒュ", "hyu"], ["ヒョ", "hyo"], ],
    [["ミャ", "mya"], ["ミュ", "myu"], ["ミョ", "myo"], ],
    [["リャ", "rya"], ["リュ", "ryu"], ["リョ", "ryo"], ],
    [["ギャ", "gya"], ["ギュ", "gyu"], ["ギョ", "gyo"], ],
    [["ジャ", "ja"], ["ジュ", "ju"], ["ジョ", "jo"], ],
    [["ヂャ", "ja"], ["ヂュ", "ju"], ["ヂョ", "jo"], ],
    [["ビャ", "bya"], ["ビュ", "byu"], ["ビョ", "byo"], ],
    [["ピャ", "pya"], ["ピュ", "pyu"], ["ピョ", "pyo"], ],
  ],
});

const updateTable = (table, index, value) => {
  if (value) 
    table.toggles.add(index);
  else 
    table.toggles.delete(index);
}

</script>

<template>
  <div class="w-full min-h-screen bg-zinc-900 text-white">
    <div class="py-4 px-2 container mx-auto lg:max-w-3xl">
      <h1 class="text-3xl">Learn Kana</h1>
      <hr class="my-6 border-dashed">
      <div class="m-4 p-6 shadow-xl flex flex-col items-center">
        <div class="text-9xl text-center">{{ kana }}</div>
        <input v-model="input" class="my-6 w-72 bg-zinc-800 text-center" type="text">
        <div v-if="!error && total == 0" class="text-lg">Hover over the kana to show its romanization and type the answer.</div>
        <div class="my-2 self-start flex gap-x-4">
          <button class="py-2 px-3 shadow-md underline-button">Play sound</button>
          <button class="py-2 px-3 shadow-md underline-button">Stroke order</button>
        </div>
      </div>
      <hr class="my-6 border-dashed">
      <button @click="showOptions = !showOptions" class="py-2 px-6 block mx-auto font-semibold shadow-lg underline-button">show/hide options</button>
      <div v-if="showOptions" class="my-8">
        <KanaTable title="Hiragana" :toggles="hiragana.toggles" @update:toggle="(i, value) => updateTable(hiragana, i, value)" :display="hiragana.display"></KanaTable>
        <KanaTable title="Hiragana combinations" :toggles="hiraganaCombinations.toggles" @update:toggle="(i, value) => updateTable(hiraganaCombinations, i, value)" :display="hiraganaCombinations.display"></KanaTable>
        <KanaTable title="Katakana" :toggles="katakana.toggles" @update:toggle="(i, value) => updateTable(katakana, i, value)" :display="katakana.display"></KanaTable>
        <KanaTable title="Katakana combinations" :toggles="katakanaCombinations.toggles" @update:toggle="(i, value) => updateTable(katakanaCombinations, i, value)" :display="katakanaCombinations.display"></KanaTable>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
