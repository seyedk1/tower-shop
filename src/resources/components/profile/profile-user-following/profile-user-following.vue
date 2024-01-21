<template>
  <div class="user-following-wrapper col-md-2">
    <div class="parent-shop-img">
      <img
        src="@/assets/images/shops/shop3.jpg"
        alt=""
        class="img-fluid shop-img"
      />
    </div>

    <div class="parent-shop-name">
      <p>فروشگاه مروارید شرق</p>
    </div>

    <div class="shop-info-row">
      <svg-telephone :width="20" :height="20"></svg-telephone>
      <p>برج مهر_طبقه سوم_پوشاک مروارید شرق</p>
    </div>

    <div class="shop-info-row last-info">
      <svg-telephone :width="15" :height="15"></svg-telephone>
      <p>0513879-6526-5863482</p>
    </div>

    <div class="parent-observ-shop-btn">
      <button class="btn observ-shop-btn">مشاهده صفحه فروشگاه</button>
    </div>
  </div>
</template>

<style src='./profile-user-following.scss' lang="scss" scoped></style>
<script src='./profile-user-following.js'></script>