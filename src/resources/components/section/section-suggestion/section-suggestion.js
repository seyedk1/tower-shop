import { watchWidth } from '../../../mixins'

export default {
    props: {
        imagesIndex: {
            type: Array,
            required: true
        },

        title: {
            type: String,
            default: 'محصولات تخفیف دار برای شما'
        }
    },

    data() {
        return {
            slide: 0,
            sliding: null
        }
    },

    methods: {
        // onChange(a, b, c) {
        //     console.log('a, b, c:', a, b, c);
        // },

        onSlideStart() {
            // console.log('slide start', slide)
            this.sliding = true
        },
        onSlideEnd() {
            // console.log('slide end', slide)
            this.sliding = false
        }
    },

    // components: {
    //     'a-carousel': Carousel,
    //     'a-icon': Icon,
    // },


    mixins: [watchWidth]
}