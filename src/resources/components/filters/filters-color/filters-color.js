export default {
    data() {
        return {
            openColor: true,

            colors: [
                '21b73f',
                '333333',
                'e5e5e5',
                '000000',
                'aa755a',
                'ab5151',
                '707070',
                '992a91',
                '9562fb',
                '629ffb',
                'fb6262',
                '62fbf1',
                'adf7b6',
                'fbdb62'
            ],
        }
    },

    methods: {
        circleColor(color) {
            return {
                backgroundColor: `#${color}`
            }
        }
    },
}