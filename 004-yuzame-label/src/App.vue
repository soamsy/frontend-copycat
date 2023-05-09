<script >
  import Carousel from './components/Carousel.vue'
  
  export default {
    components: {
      Carousel
    }
  }
</script>

<template>
  <div class="min-h-screen h-full w-full bg-[url('./assets/bg.jpg')]">
    <div class="container mx-auto">
      <nav class="py-2 flex justify-center items-end font-bold tracking-tighter">
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/home.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          home
        </a>
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/news.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          news
        </a>
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/about.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          about
        </a>
        <a class="mx-10 hover:opacity-50" href="#"><img class="mx-10" src="./assets/g-nav-home-logo.png"></a>
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/music.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          music
        </a>
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/shop.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          shop
        </a>
        <a href="#" class="pt-40 px-10 hover:bg-[url('./assets/contact.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          contact
        </a>
      </nav>
      <div class="flex justify-center">
        <Carousel></Carousel>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
