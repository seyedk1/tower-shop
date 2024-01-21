<template>
  <div class="favorite-card-wrapper col-md-3">
    <b-icon-trash class="delete-icon"></b-icon-trash>

    <div class="favorite-card-up">
      <div class="parent-img-favorite">
        <img
          src="@/assets/images/products/toy1.jpg"
          alt=""
          class="img-fluid favorite-img"
        />
      </div>

      <div class="parent-fav-product-name">
        <p>کیف کمری زنانه کد 2047</p>
      </div>
    </div>
    <div class="favorite-card-down">
      <div class="parent-add-to-cart-btn">
        <button class="btn add-to-cart-btn">اضافه کردن به سبد خرید</button>
      </div>

      <div class="parent-product-price">
        <p>2000 تومان</p>
      </div>
    </div>
  </div>
</template>

<style src='./profile-user-favorites.scss' lang="scss" scoped></style>
<script src='./profile-user-favorites.js'></script>