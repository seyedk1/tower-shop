import { watchWidth } from './../../../mixins/watch-width';

export default {

    props: {
        product: {
            type: Object,
            required: true
        },

        classes: {
            type: Array,
            required: false
        },

        isInSlider: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    data() {
        return {
            isGrid: false
        }
    },

    mixins: [watchWidth],

    watch: {
        browserWidth: {
            handler(newVal) {
                newVal <= 600 ? this.isGrid = true : this.isGrid = false
            },

            immediate: true
        }
    }

}