import { watchWidth } from '../../../mixins'

export default {
    data() {
        return {
            slide: 0,
            sliding: null
        }
    },

    methods: {

        onSlideStart() {
            this.sliding = true
        },
        onSlideEnd() {
            this.sliding = false
        }
    },

    mixins: [watchWidth]
}