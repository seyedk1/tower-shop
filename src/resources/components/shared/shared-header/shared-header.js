import { watchWidth } from '../../../mixins'

export default {

    data() {
        return {
            browserScroll: 0,

            windowTop: 0,

            drawerVisible: false,

            isScrollData: false,

            changeInputPosition: false,

            routes: [
                { id: 1, routePath: '', name: 'خانه' },
                { id: 2, routePath: 'product-category', name: 'دسته بندی محصولات' },
                { id: 3, routePath: 'shop-category', name: 'دسته بندی فروشگاه' },
                { id: 4, routePath: 'dedicated-shop', name: 'فروشگاه شخصی' },
            ],
        }
    },

    computed: {
    },

    methods: {
        closeDrawer() {
            setTimeout(() => {
                this.drawerVisible = false
            }, 2500);
        },

        onScroll(e) {
            this.windowTop = e.target.scrollTop;
            this.windowTop > 200 ? this.isScrollData = true : this.isScrollData = false
        },


    },

    mixins: [watchWidth],

    watch: {
        browserWidth: {
            handler(newVal) {
                newVal < 930 ? this.changeInputPosition = true : this.changeInputPosition = false
            },

            immediate: true
        },
    },

    mounted() {
        window.addEventListener("scroll", this.onScroll, true);
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll, true);
    },
}