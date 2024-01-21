export default {
  props: {
    title: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: false,
    },

    customStyles: {
      type: Array,
      required: false
    },

    tabType: {
      type: Number,
      default: 1,
      /*
       tabType: 1 => used in product details
       tabType: 2 => used in user profile's comment
      */
    },
  },

  data() {
    return {
      isActive: true,
    };
  },
};