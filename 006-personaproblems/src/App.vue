<script setup>
import Carousel from './components/Carousel.vue';
</script>

<template>
  <div class="w-full min-h-screen bg-black">
    <div class="sm:w-full lg:max-w-[1100px] mx-auto bg-persona-red overflow-x-hidden">
      <section class="mb-16 h-[600px] bg-[url('./assets/bg.png')] bg-cover bg-center flex flex-col justify-center">
        <div class="w-full h-64 bg-black text-white flex flex-col justify-center gap-y-8 items-center">
          <h1 class="text-4xl font-extrabold tracking-wide text-center rotate-[-8deg]">
            Pers<span class="rl-bw !p-0 rotate-[-2deg]">o</span>na 5: Phanto<span class="rl-bw !p-0 rotate-[3deg]">m</span>s <span class="rl-bw !p-0">o</span>f Transl<span class="rl-bw !p-0 rotate-[6deg]">a</span>tion
          </h1>
          <h2 class="text-xl font-extrabold tracking-wide text-center italic rotate-[-5deg]">How Atlus fails fans of a landmark JRPG</h2>
        </div>
      </section>
      <section class="max-w-4xl mx-auto">
        <Carousel>
          <div class="p-quote">
            "It mea<span class="rl-rb rotate-[-1deg]">n</span>s they're hold<span class="rl-rb rotate-[6deg]">i</span>ng nothing<br/> back and <span class="rl-rb rotate-[4deg]">a</span>re serious to kill us!"
          </div>
          <div class="p-quote">
            "You're done for, alon<span class="rl-rb rotate-[-2deg]">g</span> with<br/> this abom<span class="rl-rb rotate-[4deg]">i</span>nous world!"
          </div>
          <div class="p-quote">
            "Suguru Kamos<span class="rl-rb rotate-[-1deg]">h</span>ida was <span class="rl-rb rotate-[5deg]">a</span> scum."
          </div>
          <div class="p-quote">
            "I f<span class="rl-rb rotate-[4deg]">e</span>el a murde<span class="rl-rb rotate-[4deg]">r</span>ous intent!"
          </div>
          <div class="p-quote">
            "Mr. Kamoshida's to<span class="rl-rb rotate-[2deg]">o</span> nice for not<br/> ab<span class="rl-rb rotate-[-2deg]">a</span>ndoning a <span class="rl-rb rotate-[5deg]">p</span>unk like that..."
          </div>
          <div class="p-quote">
            "U<span class="rl-rb rotate-[5deg]">h</span>... Anyway, it can't be he<span class="rl-rb rotate-[2deg]">l</span>ped if that's<br/> the cas<span class="rl-rb rotate-[-1deg]">e</span>. Time for you to go to hel<span class="rl-rb rotate-[4deg]">l</span>."
          </div>
          <div class="p-quote">
            "Y<span class="rl-rb rotate-[6deg]">a</span>kiso<span class="rl-rb rotate-[-1deg]">b</span>a Pa<span class="rl-rb rotate-[2deg]">n</span>."
          </div>
        </Carousel>
        <div class="mt-20 bg-black text-white">Cutting to the Chase</div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
