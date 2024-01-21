<template>
  <div id="main-container">
    <shared-header></shared-header>

    <cart-container></cart-container>

    <products-list
      :title="'محصولات پیشنهادی'"
      :products="souvenirsProducts"
      :componentOptions="{ name: 'svg-souvenirs' }"
    ></products-list>

    <shared-footer></shared-footer>
  </div>
</template>

<style src='./views-cart.scss' lang="scss" scoped></style>
<script src='./views-cart.js'></script>