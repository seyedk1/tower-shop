import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css'

export default {
    data() {
        return {
            tabs: [
                {
                    title: 'سفارش های اخیر',
                    slotName: 'latest-order',
                },
                {
                    title: 'علاقه مندی های اخیر',
                    slotName: 'last-favorites',
                },
                {
                    title: 'دنبال شوندگان',
                    slotName: 'following',
                },
            ],

            souvenirsProducts: [
                { id: 1, name: 'صنایع دستی1', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 2, name: '2سبد خرید سنتی', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 3, name: '3کوسن دست دوز', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 4, name: '4سفال', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 5, name: '5صنایع دستی', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 6, name: '6سبد خرید سنتی', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 7, name: '7کوسن دست دوز', price: 2000, discount: 20, image: 'soghat2.jpg' },
                { id: 8, name: '8سفال', price: 2000, discount: 35, image: 'soghat3.jpg' }
            ],

            orders: [
                { status: 'پرداخت شده', labelColor: '65aa57' },
                { status: 'لغو شده', labelColor: 'ee4264' },
                { status: 'در انتظار تایید', labelColor: 'fdce4b' },
                { status: 'لغو شده', labelColor: 'ee4264' },
                { status: 'پرداخت شده', labelColor: '65aa57' },
                { status: 'در انتظار تایید', labelColor: 'fdce4b' }
            ],

            infoRow1: [
                { title: 'شماره سفارش', value: '142477994' },
                { title: 'تاریخ ثبت سفارش', value: '۱۶ آبان ۱۳۹۹' },
                { title: 'مبلغ سفارش', value: '18,8200  تومان' },
                { title: 'مبلغ تخفیف', value: '1,880 تومان' },
                { title: 'مبلغ کل', value: '260,000 تومان' },
            ],

            infoRow2: [
                { title: 'تحویل گیرنده', value: 'کیوان نوبخت' },
                { title: 'شماره تماس', value: '09215466777' },
                { title: 'آدرس', value: 'سید رضی، جلال آل احمد' }
            ],

            infoRow3: [
                { title: 'هزینه ارسال', value: '25000 تومان' },
                { title: 'نوع تحویل', value: 'ارسال پستی' },
                { title: 'روز تحویل', value: 'دوشنبه 12 اسفند' },
                { title: 'بازه تحویل', value: '9-24' },
            ],

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
        getFlag() {
            return this.$store.getters.get_flag
        },
       
        getDialog() {
            return this.$store.getters.get_dialog
        },

        getIsMap() {
            return this.$store.getters.get_is_map
        },

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