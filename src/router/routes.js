export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue'),
    },

    {
        path: '/product-category',
        name: 'product-category',
        component: () => import(/* webpackChunkName: "product-category" */ '../views/product-category/product-category.vue'),
    },

    {
        path: '/shop-category',
        name: 'shop-category',
        component: () => import(/* webpackChunkName: "shop-category" */ '../views/views-shop-category/views-shop-category.vue'),
    },

    {
        path: '/dedicated-shop',
        name: 'dedicated-shop',
        component: () => import(/* webpackChunkName: "dedicated-shop" */ '../views/views-dedicated-shop/views-dedicated-shop.vue'),
    },

    {
        path: '/product-details',
        name: 'product-details',
        component: () => import(/* webpackChunkName: "product-details" */ '../views/views-product-details/views-product-details.vue'),
    },

    {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/views-cart/views-cart.vue'),
    },

    {
        path: '/cart-progress',
        name: 'cart-progress',
        redirect: {
            name: 'define-address'
        },
        component: () => import(/* webpackChunkName: "cart-progress" */ '../views/views-define-address/views-define-address.vue'),
        children: [
            {
                path: 'define-address',
                name: 'define-address',
                component: () => import(/* webpackChunkName: "define-address" */ '../resources/components/cart/cart-send-address/cart-send-address.vue'),
            },
            {
                path: 'payment',
                name: 'payment',
                component: () => import(/* webpackChunkName: "payment" */ '../resources/components/cart/cart-payment/cart-payment.vue'),
            },
            {
                path: 'select-address',
                name: 'select-address',
                component: () => import(/* webpackChunkName: "select-address" */ '../resources/components/cart/cart-select-address/cart-select-address.vue'),
            },
        ]
    },

    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/views-login/views-login.vue'),
        redirect: {
            name: 'login-register',
        },
        children: [
            {
                path: '',
                name: 'login-register',
                component: () => import(/* webpackChunkName: "login-register" */ '../resources/components/login/login-register/login-register.vue'),
            },
            {
                path: '/security-code',
                name: 'security-code',
                component: () => import(/* webpackChunkName: "security-code" */ '../resources/components/login/login-security-code/login-security-code.vue'),
            },
        ]
    },

    {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "profile" */ '../views/views-profile/views-profile.vue'),
    },

    //Not Found
    {
        path: '/404',
        name: 'not-found',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "not-found" */ '../views/not-found/not-found.vue'),
    },
    {
        path: '*',
        redirect: {
            name: 'not-found'
        }
    }
]