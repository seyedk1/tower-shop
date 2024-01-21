export default {
    data() {
        return {
            toyProducts: [
                { id: 1, name: 'لگو1', price: 2000, discount: 0, image: 'toy4.jpg' },
                { id: 2, name: 'رایانه2', price: 2000, discount: 10, image: 'toy1.jpg' },
                { id: 3, name: 'کیتی صورتی3', price: 2000, discount: 10, image: 'toy4.jpg' },
                { id: 4, name: 'رایانه4', price: 2000, discount: 0, image: 'toy1.jpg' },
                { id: 5, name: '5لگو', price: 2000, discount: 0, image: 'toy3.jpg' },
                { id: 6, name: '6سبد خرید سنتی', price: 2000, discount: 0, image: 'toy4.jpg' },
                { id: 7, name: '7کوسن دست دوز', price: 2000, discount: 20, image: 'toy1.jpg' },
                { id: 8, name: 'رایانه8', price: 2000, discount: 35, image: 'toy3.jpg' }
            ],

            souvenirsProducts: [
                { id: 1, name: 'صنایع دستی1', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 2, name: '2سبد خرید سنتی', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 3, name: '3کوسن دست دوز', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 4, name: '4سفال', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 5, name: '5صنایع دستی', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 6, name: '6سبد خرید سنتی', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 7, name: '7کوسن دست دوز', price: 2000, discount: 20, image: 'soghat2.jpg' },
                { id: 8, name: '8سفال', price: 2000, discount: 35, image: 'soghat3.jpg' }
            ],

            tabs: [
                {
                    title: 'توضیحات محصول',
                    slotName: 'awaiting-comment',
                },
                {
                    title: 'نظرات کاربران',
                    slotName: 'my-comment',
                },
                {
                    title: 'مشخصات محصول',
                    slotName: 'features',
                },
            ],
        }
    },
}