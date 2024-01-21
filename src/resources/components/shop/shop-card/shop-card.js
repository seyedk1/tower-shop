import StarRating from 'vue-star-rating'

export default {

    props: {
        shop: {
            type: Object,
            required: true
        },

        classes: {
            type: Array,
            required: false
        }
    },

    data() {
        return {
            // stars
            rating: null,
        }
    },

    components: {
        StarRating,
    },
}