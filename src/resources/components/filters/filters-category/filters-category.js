export default {
    props: {
        subCategories: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            openAccordion: true,
            subCat1: true,
        }
    },

    computed: {
        svgStyle() {
            return {
                with: 25,
                height: 25,
                color: '#6d6e71'
            }
        },
    },

}