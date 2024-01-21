<template>
  <div
    class="parent-each-product col-12 mt-5 h-75"
    :class="[classes != undefined ? classes : null]"
  >
    <div class="up-product-info">
      <div class="parent-image">
        <img
          :src="require(`/src/assets/images/shops/${shop.image}`)"
          alt="image"
          class="img-fluid product-image"
        />
      </div>
    </div>

    <div class="down-product-info">
      <div class="parent-shop-title">
        <p>{{ shop.name }}</p>
      </div>

      <div class="parent-shop-point--star--seen">
        <p>امتیاز فروشگاه:</p>

        <star-rating
          :rating="shop.point"
          :read-only="true"
          :increment="0.01"
          :rtl="true"
          :star-size="20"
          :show-rating="false"
        ></star-rating>
      </div>

      <div class="parent-shop-point--star--seen seen-style">
        <p>تعداد بازدید :</p>

        <span>بازدید 568 </span>
      </div>
    </div>
  </div>
</template>

<style src='./shop-card.scss' lang="scss" scoped></style>
<script src='./shop-card.js'></script>