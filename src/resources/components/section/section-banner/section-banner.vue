<template>
  <div class="container-fluid" id="banners">
    <!--start banners-wrapper-->
    <div class="banners-wrapper col-lg-12">
      <!--start left-banner-->
      <div class="col-lg-3 right-banner">
        <img
          v-for="(banner, i) in banners"
          :key="i"
          :src="require(`/src/assets/images/banner/${banner}.jpg`)"
          alt="banner"
          class="img-fluid small-banner"
        />
      </div>
      <!--end left-banner-->

      <!--start right-banner-->
      <div class="col-lg-9 left-banner">
        <img
          :src="require('/src/assets/images/banner/banner2.jpg')"
          alt="large-banner"
          class="img-fluid large-banner"
        />
      </div>
      <!--end right-banner-->
    </div>
    <!--end banners-wrapper-->
  </div>
</template>

<style src='./section-banner.scss' lang="scss" scoped></style>
<script src='./section-banner.js'></script>