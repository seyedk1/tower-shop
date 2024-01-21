export default {
    props: {
        order: {
            type: Object,
            required: true
        }
    },

    methods: {
        setLabelColor(value) {
            return {
                backgroundColor: `#${value}`
            }
        },

        details() {
            this.$store.commit('set_flag', true)
        }
    }
}