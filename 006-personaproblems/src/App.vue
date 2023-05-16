<script setup>
import { ref, computed, provide } from 'vue';
import Carousel from './components/Carousel.vue';
import WrappingUp from './components/WrappingUp.vue';
import Credits from './components/Credits.vue';
import Faq from './components/faq/Faq.vue';
import AllCritiques from './components/critiques/AllCritiques.vue';
import Defenses from './components/defenses/Defenses.vue';
import bg from './assets/bg.png'
import bgLight from './assets/bg-light.png'

const theme = ref('vivid');
const imgStyle = computed(() => {
  if (theme.value === 'vivid')
    return 'background-image: url(' + bg + ');';
  else
    return 'background-image: url(' + bgLight + ');';
});

provide('theme', theme);

</script>

<template>
  <div class="w-full min-h-screen bg-black text-backdrop-fg" :class="theme">
    <div class="sm:w-full lg:max-w-[1100px] mx-auto bg-backdrop-bg overflow-hidden">
      <section class="mb-16 h-[600px] bg-cover bg-center flex flex-col justify-center" :style="imgStyle">
        <div class="w-full h-64 bg-black text-[#EEE] flex flex-col justify-center gap-y-8 items-center">
          <h1 class="text-4xl font-extrabold tracking-wide text-center rotate-[-8deg]">
            Pers<span class="rl-bw !p-0 rotate-[-2deg]">o</span>na 5: Phanto<span class="rl-bw !p-0 rotate-[3deg]">m</span>s <span class="rl-bw !p-0">o</span>f Transl<span class="rl-bw !p-0 rotate-[6deg]">a</span>tion
          </h1>
          <h2 class="text-xl font-extrabold tracking-wide text-center italic rotate-[-5deg]">How Atlus fails fans of a landmark JRPG</h2>
        </div>
      </section>
      <section class="max-w-4xl mx-auto">
        <Carousel>
          <div class="p-quote">
            "It mea<span class="rl-backdrop rotate-[-1deg]">n</span>s they're hold<span class="rl-backdrop rotate-[6deg]">i</span>ng nothing<br/> back and <span class="rl-backdrop rotate-[4deg]">a</span>re serious to kill us!"
          </div>
          <div class="p-quote">
            "You're done for, alon<span class="rl-backdrop rotate-[-2deg]">g</span> with<br/> this abom<span class="rl-backdrop rotate-[4deg]">i</span>nous world!"
          </div>
          <div class="p-quote">
            "Suguru Kamos<span class="rl-backdrop rotate-[-1deg]">h</span>ida was <span class="rl-backdrop rotate-[5deg]">a</span> scum."
          </div>
          <div class="p-quote">
            "I f<span class="rl-backdrop rotate-[4deg]">e</span>el a murde<span class="rl-backdrop rotate-[4deg]">r</span>ous intent!"
          </div>
          <div class="p-quote">
            "Mr. Kamoshida's to<span class="rl-backdrop rotate-[2deg]">o</span> nice for not<br/> ab<span class="rl-backdrop rotate-[-2deg]">a</span>ndoning a <span class="rl-backdrop rotate-[5deg]">p</span>unk like that..."
          </div>
          <div class="p-quote">
            "U<span class="rl-backdrop rotate-[5deg]">h</span>... Anyway, it can't be he<span class="rl-backdrop rotate-[2deg]">l</span>ped if that's<br/> the cas<span class="rl-backdrop rotate-[-1deg]">e</span>. Time for you to go to hel<span class="rl-backdrop rotate-[4deg]">l</span>."
          </div>
          <div class="p-quote">
            "Y<span class="rl-backdrop rotate-[6deg]">a</span>kiso<span class="rl-backdrop rotate-[-1deg]">b</span>a Pa<span class="rl-backdrop rotate-[2deg]">n</span>."
          </div>
        </Carousel>
        <div class="p-14 mt-20 bg-content-bg text-content-fg lg:rotate-2 text-lg">
          <div class="lg:rotate-[-2deg]">
            <h2 class="mb-6 text-3xl font-extrabold tracking-wide">Cuttin<span class="rl-content rotate-3">g</span> to the C<span class="rl-content rotate-[-2deg]">h</span>ase</h2>
            <p class="mb-6">Persona 5 is out in English, and it's arrived with a shower of praise from critics and fans alike. This should come as little surprise to anyone who played the game in Japanese. It's brilliant and innovative, and very fun.</p>
            <p class="mb-6 font-bold">But, there's a problem: the translation is riddled with errors.</p>
            <p class="mb-6">That's not to say it's unreadable, or completely without merit. But for a massive RPG from a highly successful franchise, it falls incredibly short of the standard it should be held to. A video game is a professional work, no different from any other form of media. Yet no other form of media would ever get away with the number of errors found in Persona 5's English script.</p>
            <p class="mb-10 font-bold">This isn't the 1990s, when localization was still young and errors were endemic. Nor is Persona 5 a small game, or an insignificant one.</p>
            <div class="ml-16 flex items-center gap-x-2">
              <div class="mr-8 text-2xl font-extrabold text-content-fg">Toggle theme:</div>
              <button @click="theme = 'vivid'" class="py-2 px-6 font-extrabold text-alert" :class="theme === 'vivid' ? 'bg-content-highlight text-content-bg' : ''">Vivid</button>
              <button @click="theme = 'relaxed'" class="py-2 px-6 font-extrabold" :class="theme === 'relaxed' ? 'bg-content-highlight text-content-bg' : ''">Relaxed</button>
              <button @click="theme = 'vanilla'" class="py-2 px-6 font-extrabold" :class="theme === 'vanilla' ? 'bg-content-highlight text-content-bg' : ''">Vanilla</button>
            </div>
          </div>
        </div>
        <div class="p-14 mt-2 bg-content-bg text-content-fg border-t-4 border-backdrop-bg lg:rotate-[-2deg] text-lg">
          <div class="lg:rotate-[3deg]">
            <h2 class="mb-6 text-3xl font-extrabold tracking-wide">Ho<span class="rl-content rotate-[-1deg]">w</span> Bad <span class="rl-content rotate-[5deg]">i</span>s Bad?</h2>
            <p class="mb-6">
              The baseline for any translation is this: readers of the
              translation should receive the same experience as readers of the
              original, <span class="italic font-semibold">as if the original
              creators had written it natively in both languages</span>.
            </p>
            <p class="mb-6">
              Persona 5's English localization does not meet this standard.
              Readers are receiving an inferior work containing awkward
              language, mischaracterization, grammatical mistakes, and outright
              translation errors.
            </p>
          </div>
        </div>
      </section>
      <section class="max-w-[52rem] mx-auto">
        <Faq></Faq>
      </section>
      <section class="max-w-4xl mx-auto">
          <AllCritiques></AllCritiques>
      </section>
      <section class="max-w-4xl mx-auto">
          <Defenses></Defenses>
      </section>
      <section class="max-w-4xl mx-auto mb-24">
        <WrappingUp></WrappingUp>
      </section>
      <section class="max-w-4xl mx-auto mb-24">
        <Credits></Credits>
      </section>
    </div>
    <footer class="bg-black w-full">
      <div class="max-w-4xl mx-auto">
        <div class="mt-12 flex flex-center gap-x-4 text-sm text-gray-500">
          <div class="flex-1">
            This site was written and designed by Connor Krammer. If you like it,
            you should follow him on Twitter.
          </div>
          <div class="flex-1">
            “Persona 5 MC Red Version 2” by tonyp2121 is Licensed under CC BY
            3.0. Light theme version is recolored from original.
          </div>
          <div class="flex-1">
            Persona 5 is the property of Atlus.
          </div>
        </div>
        <div class="mt-8 h-1"></div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
