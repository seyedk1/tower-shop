export default {
  props: {
    customClasses: {
      type: Array,
      required: false
    }
  },

  data() {
    return {
      tabs: [], // all of the tabs
      selectedIndex: 0, // the index of the selected tab,
      detectTabType: false, // used for add style to ul with attention to tabType prop
    };
  },

  methods: {
    selectTab(i) {
      this.selectedIndex = i;

      // loop over all the tabs
      this.tabs.map((tab, index) => {
        tab.isActive = index === i; // this row return boolean that which tab is active
      });
    },
  },

  mounted() {
    this.selectTab(0);

    if (this.tabs[0].tabType == 2) this.detectTabType = true;
  },

  created() {
    this.tabs = this.$children;
    console.log("this.tabs: ", this.tabs);
  },
};