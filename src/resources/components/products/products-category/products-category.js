export default {
    data() {
        return {
            products: [
                { id: 1, name: 'صنایع دستی1', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 2, name: '2سبد خرید سنتی', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 3, name: '3کوسن دست دوز', price: 2000, discount: 10, image: 'soghat2.jpg' },
                { id: 4, name: '4سفال', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 5, name: '5صنایع دستی', price: 2000, discount: 0, image: 'soghat3.jpg' },
                { id: 6, name: '6سبد خرید سنتی', price: 2000, discount: 0, image: 'soghat1.jpg' },
                { id: 7, name: '7کوسن دست دوز', price: 2000, discount: 20, image: 'soghat2.jpg' },
                { id: 8, name: '8سفال', price: 2000, discount: 35, image: 'soghat3.jpg' }
            ],

            subCategories: [
                { id: 1, title: 'موبایل', svgIcon: 'svg-smart-phone', href: 'collapseCategoryOne', features: ['گوشی موبایل'] },
                { id: 2, title: 'تبلت و کتاب خوان', svgIcon: 'svg-tablet', href: 'collapseCategoryTwo', features: ['تبلت', 'کتاب خوان و کاغذ دیجیتالی', 'رهیاب ماهواره ای'] },
                { id: 3, title: 'لپ تاپ', svgIcon: 'svg-laptop', href: 'collapseCategoryThree', features: ['لپ تاپ و الکترابوک', 'لوازم جانبی لپ تاپ'] },
                { id: 4, title: 'اسباب بازی', svgIcon: 'svg-rocking-horse', href: 'collapseCategoryFour', features: ['تشک بازی و پارک بازی', 'تاب و سرسره', 'آویز تخت کودک'] },
            ],         
            
        }
    },


  
}