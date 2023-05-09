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
    <div class="container mx-auto lg:max-w-[960px]">
      <nav class="py-2 flex justify-center items-end font-bold tracking-tighter">
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/home.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          home
        </a>
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/news.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          news
        </a>
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/about.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          about
        </a>
        <a class="mx-12 hover:opacity-50" href="#"><img src="./assets/g-nav-home-logo.png"></a>
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/music.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          music
        </a>
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/shop.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          shop
        </a>
        <a href="#" class="pt-40 px-9 hover:bg-[url('./assets/contact.png')] bg-no-repeat bg-[0_-167px] hover:bg-center transition-[background-position] duration-500 text-black hover:text-opacity-50">
          contact
        </a>
      </nav>
      <div class="my-2 flex justify-center">
        <Carousel></Carousel>
      </div>
      <div class="my-4 flex justify-between gap-x-3">
        <div class="flex-[7_7_0%] p-1">
          <section class="mb-8">
            <div class="mb-2 text-2xl font-semibold italic flex items-center"><span class="w-6 h-6 mr-2 rounded-full stripes inline-block"></span>news</div>
            <hr class="mb-6">
            <ul class="text-gray-700 text-sm flex flex-col gap-y-2">
              <li>
                <span class="mr-4">2018/12/18</span>
                <a class="hover:bg-scarlet hover:text-white" href="#">VTuberフリークが集うナイトイベント「VIRTUAFREAK」が開催。出演者にはYunomi、バーチャルねこをはじめ、豪華アーティストが秋葉原に集結！</a>
              </li>
              <li>
                <span class="mr-4">2018/10/25</span>
                <a class="hover:bg-scarlet hover:text-white" href="#">【2018秋M3出展】東京銭湯と合同出展！銭湯＆サウナブランドの委託頒布も</a>
              </li>
              <li>
                <span class="mr-4">2018/8/21</span>
                <a class="hover:bg-scarlet hover:text-white" href="#">映像作家大橋史が講師として行う「アドビ短期集中ゼミ」に楽曲を提供！</a>
              </li>
              <li>
                <span class="mr-4">2018/8/3</span>
                <a class="hover:bg-scarlet hover:text-white" href="#">RED BULL MUSIC FESTIVAL開催「LOST IN KARAOKE」のワンルームをゆざめレーベルがキュレーション！</a>
              </li>
              <li>
                <span class="mr-4">2018/6/18</span>
                <a class="hover:bg-scarlet hover:text-white" href="#">【入場無料】7/7日（土）開催、100BANCH一周年イベントをプロデュース。パ娘。、羽生まゐご、Utaeらが出演！</a>
              </li>
            </ul>
          </section>
          <section class="mb-8">
            <div class="mb-2 text-2xl font-semibold italic flex items-center"><span class="w-6 h-6 mr-2 rounded-full stripes inline-block"></span>new release</div>
            <hr class="mb-4">
            <div class="grid grid-cols-3 gap-4">
              <a class="hover:opacity-50" href="#"><img src="./assets/jacket1.png" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/jacket2.png" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/jacket3.png" alt=""></a>
            </div>
            <div class="my-4 text-right"><a class="hover:bg-scarlet hover:text-white" href="#"><i class="fa fa-caret-right mr-1"></i>more...</a></div>
          </section>
          <section class="mb-8">
            <div class="mb-2 text-2xl font-semibold italic flex items-center"><span class="w-6 h-6 mr-2 rounded-full stripes inline-block"></span>recommend</div>
            <hr class="mb-4">
            <div class="grid grid-cols-3 gap-4">
              <a class="hover:opacity-50" href="#"><img src="./assets/rec1.png" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec2.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec3.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec4.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec5.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec6.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec7.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec8.jpg" alt=""></a>
              <a class="hover:opacity-50" href="#"><img src="./assets/rec9.jpg" alt=""></a>
            </div>
            <div class="my-4 text-right"><a class="hover:bg-scarlet hover:text-white" href="#"><i class="fa fa-caret-right mr-1"></i>more...</a></div>
          </section>
        </div>
        <div class="flex-[3_3_0%] p-1 flex flex-col gap-y-5">
          <img src="./assets/side1.png" alt="">
          <img src="./assets/side2.png" alt="">
          <img src="./assets/side3.jpg" alt="">
          <img src="./assets/side4.png" alt="">
          <div class="p-3 rounded-sm bg-white">
            <div class="relative h-[30rem] w-full overflow-hidden group">
              <a href="#" class="absolute z-10 top-0 bottom-0 left-0 right-0 flex justify-center items-center group-hover:bg-opacity-20 group-hover:bg-black">
                <button class="px-12 py-3 text-xs rounded-full opacity-0  group-hover:opacity-75 hover:!opacity-100 transition-all bg-white">詳しく見る</button>
              </a>
              <div class="absolute h-[34rem] w-[20rem] left-[-2rem] top-[-2rem] bg-[url('./assets/tote.jpg')] transition-all group-hover:scale-95 group-hover:blur-sm bg-cover bg-center">
              </div>
            </div>
            <div class="mt-3 text-center text-sm tracking-wide font-medium">ゆざめトート</div>
            <div class="my-2 text-center text-xs tracking-wider font-bold">¥1,500</div>
          </div>
          <div>
            <div class="mb-2 text-2xl font-semibold italic flex items-center"><span class="w-6 h-6 mr-2 rounded-full stripes inline-block"></span>twitter</div>
            <hr class="mb-4">
            <a class="my-4 text-xs text-scarlet" href="#">ゆざめレーベル に関するツイート</a>
          </div>
        </div>
      </div>
    </div>
      <footer class="pt-20 bg-repeat-x bg-top" style="background-image: url(/src/assets/footer.png)">
        <div class="bg-black text-white text-xs">
          <div class="p-3 container mx-auto lg:max-w-[960px]">
            <div class="mb-2 font-semibold">ゆざめレーベル - yuzame label -</div>
            <div class="mb-2 flex gap-x-32">
              <ul class="">
                <li><a class="hover:text-scarlet" href="#">news</a></li>
                <li><a class="hover:text-scarlet" href="#">about</a></li>
                <li><a class="hover:text-scarlet" href="#">music</a></li>
                <li><a class="hover:text-scarlet" href="#">shop</a></li>
                <li><a class="hover:text-scarlet" href="#">contact</a></li>
              </ul>
              <ul class="pl-4 border-l-[1px]">
                <li>new release</li>
                <li><a class="hover:text-scarlet" href="#">MEiSTER / V.A.</a></li>
                <li><a class="hover:text-scarlet" href="#">赤色のタイムマシーン / アンテナガール</a></li>
                <li><a class="hover:text-scarlet" href="#">I Want to Tell You / V.A.</a></li>
                <li><a class="hover:text-scarlet" href="#">▶more...</a></li>
              </ul>
              <ul class="pl-4 border-l-[1px]">
                <li>recommend</li>
                <li><a class="hover:text-scarlet" href="#">東京銭湯 – TOKYO SENTO –</a></li>
                <li><a class="hover:text-scarlet" href="#">[KSNN-002] shikisai compilation Vol.2 / V.A.</a></li>
                <li><a class="hover:text-scarlet" href="#">[FERAL MEDIA] Clean Dirt / 0point1 a.k.a. Bob</a></li>
                <li><a class="hover:text-scarlet" href="#">Streckfuss</a></li>
                <li><a class="hover:text-scarlet" href="#">▶more...</a></li>
              </ul>
            </div>
            <div>copyright yuzame label Some Rights Reserved.</div>
          </div>
        </div>
      </footer>
  </div>
</template>

<style scoped></style>
