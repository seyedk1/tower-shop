import StarRating from 'vue-star-rating'

export default {
    data() {
        return {
            sizes: [
                { size: 'S', active: false },
                { size: 'M', active: false },
                { size: 'L', active: true },
                { size: 'XL', active: false },
                { size: 'XXL', active: false },
            ],

            colors: [
                '21b73f',
                '333333',
                'e5e5e5',
                '000000',
                'aa755a',
                'ab5151',
                '707070'
            ],
        }
    },
    methods: {
        increase() {
            console.log('inc')
        },

        decrease() {
            console.log('dec')
        },

        circleColor(color) {
            return {
                backgroundColor: `#${color}`
            }
        }
    },

    components: {
        StarRating
    }
}