import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'
import { watchWidth } from './../../../mixins/watch-width';

export default {

    props: {
        title: {
            type: String,
            required: true
        },

        routeName: {
            type: String,
            default: 'home'
        },

        products: {
            type: Array,
            required: true
        },

        componentOptions: {
            type: Object,
            required: true
        },
    },

    data() {
        return {


            swiperOption: {
                slidesPerGroup: 1,
                speed: 400,
                updateOnWindowResize: true,
                preloadImages: false,
                updateOnImagesReady: true,
                watchSlidesVisibility: true,
                lazy: true,
                loop: true,
                grabCursor: true,
                loopFillGroupWithBlank: false,
                autoplay: true,
                navigation: {
                    nextEl: '.swiper-button-prev',
                    prevEl: '.swiper-button-next'
                },
                breakpoints: {
                    // when window width is >= 320px
                    1525: {
                        slidesPerView: 5,
                        spaceBetween: 25
                    },

                    1100: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },

                    1026: {
                        slidesPerView: 3.75,
                        spaceBetween: 20
                    },

                    992: {
                        slidesPerView: 3.25,
                        spaceBetween: 20
                    },

                    815: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    675: {
                        slidesPerView: 2.75,
                        spaceBetween: 20
                    },

                    610: {
                        slidesPerView: 2.25,
                        spaceBetween: 20
                    },

                    556: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    425: {
                        slidesPerView: 1.65,
                        spaceBetween: 15,
                        navigation: {
                            hiddenClass: 'swiper-button-hidden'
                        },
                    },

                    280: {
                        slidesPerView: 1.5,
                        // slidesPerView: 'auto',
                        initialSlide: 1,
                        centeredSlides: true,
                        coverflowEffect: {
                            rotate: 0,
                            stretch: 0,
                            depth: 800,
                            modifier: 1,
                            slideShadows: true,
                        },
                        // effect: 'flip',
                        // slidesPerColumnFill: 'row',
                        centerInsufficientSlides: true,
                        // centeredSlides: true,
                        centeredSlidesBounds: true,
                        // loop: true,
                        spaceBetween: 20,
                        navigation: {
                            hiddenClass: 'swiper-button-hidden'
                        },
                    },
                }
            }
        }
    },

    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        },

        component_props() {
            return {
                width: this.browserWidth > 768 ? this.componentOptions.width || 30 : this.browserWidth < 576 ? 20 : 25,
                height: this.browserWidth > 768 ? this.componentOptions.height || 30 : this.browserWidth < 576 ? 20 : 25
            }

        }
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

    mixins: [watchWidth],

    components: {
        Swiper,
        SwiperSlide
    },
}