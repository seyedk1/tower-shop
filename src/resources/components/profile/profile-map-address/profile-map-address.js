export default {
    methods: {
        addressDetails() {
            this.$store.commit('set_is_map', false)
            this.$store.commit('set_dialog', true)
        }
    },
}