<script>
    export default {
        data() {
            return {
                slides: [
                    "src/assets/RBMF2018.png",
                    "src/assets/meister.png",
                    "src/assets/yuzame-join-tokyosento.png",
                    "src/assets/akairo.png",
                    "src/assets/iwanttotellyou_top.png",
                    "src/assets/plusa_top.png"
                ],
                current: 0,
                transitioning: false,
                interval: null
            }
        },
        mounted: function () {
            this.replaceInterval();
        },
        methods: {
            replaceInterval: function () {
                if (this.interval)
                    clearInterval(this.interval);
                this.interval = setInterval(() => {
                    this.updateCurrent(1);
                }, 6500);
            },
            updateCurrent: function(add) {
                this.transitioning = false;
                this.replaceInterval();
                setTimeout(() => {
                    this.current = (this.current + add) % this.slides.length;
                    this.transitioning = true;
                }, 0);
            },
            slideStyle: function(i) {
                let shifted = i - this.current + 1
                let place = this.mod(shifted, this.slides.length) - 1;
                let styles = [];
                switch (place) {
                    case 0:
                        styles.push(`z-index: 3;`);
                        break;
                    case 1:
                        styles.push(`z-index: 2;`);
                        break;
                    case -1:
                        styles.push(`z-index: 1;`);
                        break;
                    default:
                        styles.push(`display: none;`);
                        break;
                }
                styles.push(`transform: translateX(${(place) % this.slides.length * 100}%);`);
                
                if (this.transitioning) {
                    styles.push(`transition: transform 1600ms ease-in-out;`)
                }
                return styles.join(';');
            },
            mod: function(n, m) {
                return ((n % m) + m) % m;
            }
        }
    }
</script>

<template>
    <div class="flex flex-col items-center max-w-[960px] w-full h-[280px] relative overflow-hidden">
        <div v-for="(slide, index) in slides" class="absolute cursor-pointer hover:opacity-50" :style="slideStyle(index)">
            <img class="" :src="slide" alt="">
        </div>
        <a @click="updateCurrent(-1)" class="absolute top-0 bottom-0 left-0 pl-2 flex flex-col justify-center z-10 cursor-pointer">
            <button class="w-8 h-8 rounded-full text-white bg-gray-800"><i class="fa fa-chevron-left fa-xs"></i></button>
        </a>
        <a @click="updateCurrent(1)" class="absolute top-0 bottom-0 right-0 pr-2 flex flex-col justify-center z-10 cursor-pointer">
            <button class="w-8 h-8 rounded-full text-white bg-gray-800"><i class="fa fa-chevron-right fa-xs"></i></button>
        </a>
    </div>
</template>

<style scoped></style>