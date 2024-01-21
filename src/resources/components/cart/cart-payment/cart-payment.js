import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'

export default {
    data() {
        return {
            swiperOption2: {
                slidesPerGroup: 1,
                speed: 400,
                slidesPerView: 5,
                spaceBetween: 25,
                loop: true,
                grabCursor: true,
                navigation: {
                    nextEl: '.swiper-button-prev',
                    prevEl: '.swiper-button-next'
                },
            }
        }
    },

    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },
    },

    methods: {
        slideNext() {
            this.swiper.slideNext(400, true)
        },

        slidePrevious() {
            this.swiper.slidePrev(400, true)
        }
    },

    directives: {
        swiper: directive
    },

    components: {
        Swiper,
        SwiperSlide
    },
}