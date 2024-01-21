export const svgCommon = {
    props: {
        height: Number,
        width: Number,
        color: String,
    },

    data() {
        return {
            heightData: this.height,
            widthData: this.width,
            colorData: this.color,
        };
    },
}