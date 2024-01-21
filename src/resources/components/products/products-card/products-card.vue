<template>
  <div
    class="parent-each-product col-12 mt-5 h-75"
    :class="[
      classes != undefined ? classes : null,
      { 'parent-each-product-grid': !isInSlider },
    ]"
  >
    <div class="up-product-info">
      <div class="parent-image">
        <img
          :src="require(`/src/assets/images/products/${product.image}`)"
          alt="image"
          class="img-fluid product-image"
        />
      </div>
    </div>

    <div
      class="down-product-info"
      :class="[
        { 'discount-exist': product.discount > 0 },
        { 'down-product-info-Grid': !isInSlider },
      ]"
    >
      <div class="parent-product-title">
        <p>{{ product.name }}</p>
      </div>

      <div
        class="parent-product-discount"
        v-if="product.discount > 0 && (isInSlider ? isInSlider : !isGrid)"
      >
        <div class="product-price">
          <p>{{ (product.price + " تومان") | persianNumber }}</p>
        </div>
        <div class="disount-wrapper">
          <p>{{ (product.discount + "%") | persianNumber }}</p>
        </div>
      </div>

      <div class="parent-price--wishlist">
        <div class="parent-wishlist">
          <svg-heart :width="20" :height="20" :color="'#dd7979'"></svg-heart>
        </div>

        <div :class="{ 'parent-price--discount': isGrid && !isInSlider }">
          <div
            class="parent-product-discount"
            v-if="product.discount > 0 && isGrid && !isInSlider"
          >
            <div class="product-price">
              <p>{{ (product.price + " تومان") | persianNumber }}</p>
            </div>
            <div class="disount-wrapper">
              <p>{{ (product.discount + "%") | persianNumber }}</p>
            </div>
          </div>

          <div class="parent-price">
            <p>{{ (product.price + " تومان") | persianNumber }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src='./products-card.scss' lang="scss" scoped></style>
<script src='./products-card.js'></script>