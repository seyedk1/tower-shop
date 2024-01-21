<template>
  <div id="main-container">
    <!--start header shop-->
    <shared-header></shared-header>
    <!--end header shop-->

    <section-slider></section-slider>

    <section-guarantee></section-guarantee>

    <section-category></section-category>

    <products-list
      :title="'طلا و جواهرات'"
      :products="luxuryProducts"
      :componentOptions="{ name: 'svg-diamond' }"
    ></products-list>

    <products-list
      :title="'کیف و کفش'"
      :products="shoesProducts"
      :componentOptions="{ name: 'svg-shoes' }"
    ></products-list>

    <section-suggestion :imagesIndex="[1, 4, 3]"></section-suggestion>

    <products-list
      :title="'پوشاک مردانه'"
      :products="shoesProducts"
      :componentOptions="{ name: 'svg-shirt' }"
    ></products-list>

    <products-list
      :title="'پوشاک زنانه، لوازم آرایشی'"
      :products="womanProducts"
      :componentOptions="{ name: 'svg-cosmetics' }"
    ></products-list>

    <section-suggestion
      :title="'محصولات پیشنهادی مهرکوهسنگی برای شما'"
      :imagesIndex="[2, 5, 6]"
    ></section-suggestion>

    <products-list
      :title="'صنایع دستی و سوغات'"
      :products="souvenirsProducts"
      :componentOptions="{ name: 'svg-souvenirs' }"
    ></products-list>

    <products-list
      :title="'اسباب بازی، موبایل، رایانه'"
      :products="toyProducts"
      :componentOptions="{ name: 'svg-toy' }"
    ></products-list>

    <shared-footer></shared-footer>
  </div>
</template>


<style src='./home.scss' lang="scss" scoped></style>
<script src='./home.js'></script>