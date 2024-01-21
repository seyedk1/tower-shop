export const watchWidth = {
    data() {
        return {
            browserWidth: window.innerWidth,
        }
    },

    methods: {
        onResize(e) {
            this.browserWidth = e.target.innerWidth
        }
    },

    mounted() {
        window.addEventListener('resize', this.onResize, true);
    },

    destroyed() {
        window.removeEventListener('resize', this.onResize, true);
    },
}