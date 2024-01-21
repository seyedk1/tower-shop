export default {
    name: "custom-input",
    props: {
        id: {
            type: String,
            required: false,
        },
        inputType: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            required: false,
        },
        value: {
            type: [String, Number],
            required: false,
        },
        styles: {
            type: Array,
            required: false,
        },
        min: {
            type: Number,
            default: 1,
        },
        max: {
            type: Number,
            default: 5,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        required: {
            type: Boolean,
            required: false,
        },
        restriction: {
            type: Boolean,
            required: false,
        },
    },

    data() {
        return {
            inputValue: this.value,
            minVal: this.min,
            maxVal: this.max,
            limitation: this.restriction,
            type: this.inputType,
        };
    },

    methods: {
        handleInput(e) {
            this.inputValue = e.target.value;
            if (this.limitation && this.type == "number") {
                let value = Number(e.target.value);
                this.inputValue =
                    value < this.minVal
                        ? (value = this.minVal)
                        : value > this.maxVal
                            ? (value = this.maxVal)
                            : value;
            }
            this.$emit("changeInput", this.inputValue);
        },
    },
};