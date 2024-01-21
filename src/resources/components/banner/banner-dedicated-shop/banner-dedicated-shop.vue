<template>
  <div class="container-fluid" id="banners">
    <div class="own-shop-banner col-lg-12 mt-2">
      <!--start right-section-wrapper-->
      <div class="right-section-wrapper col-lg-2">
        <div class="parent-shop-logo">
          <img
            :src="require('/src/assets/images/shops/shop3.jpg')"
            alt="logo"
            class="img-fluid shop-logo"
          />
        </div>

        <div class="parent-shop-title--slogan">
          <p class="shop-title">پوشاک زنانه مروارید</p>
          <p class="slogan-text">رضایت شما اعتبار ماست</p>
        </div>

        <div class="parent-other-info">
          <div class="parent-shop-phone mb-3">
            <svg-telephone :width="15" :height="15"></svg-telephone>
            <span>0513879-6526-5863482</span>
          </div>
          <div class="parent-shop-address">
            <svg-location :width="15" :height="15"></svg-location>
            <span>برج مهر_طبقه سوم_پوشاک مروارید</span>
          </div>
        </div>
      </div>
      <!--end right-section-wrapper-->

      <!--start left-section-wrapper-->
      <div class="left-section-wrapper col-lg-10">
        <div class="parent-shop-stars">
          <star-rating
            :rating="2"
            :read-only="true"
            :increment="0.01"
            :rtl="true"
            :star-size="20"
            :show-rating="false"
          ></star-rating>
        </div>

        <div class="parent-follow-button">
          <button class="btn follow-btn">
            <svg-follow :width="15" :height="15" :color="'white'" class="follow-icon"></svg-follow>
            دنبال کردن
          </button>
        </div>
      </div>
      <!--end left-section-wrapper-->
    </div>
  </div>
</template>

<style src='./banner-dedicated-shop.scss' lang="scss" scoped></style>
<script src='./banner-dedicated-shop.js'></script>