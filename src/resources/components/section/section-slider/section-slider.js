export default {
    data() {
        return {
            images: [
                'slider1.jpg',
                'slider1.jpg',
                'slider1.jpg',
                'slider1.jpg',
            ],
        }
    },

    computed: {
        mySlider() {
            return {
                borderRadius: '20px',
                color: 'red'
            }
        }
    },

    methods: {
        // hello($event) {
        //     console.log(`hello index: ${$event}`)
        // },
    },
}