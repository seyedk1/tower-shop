<template>
  <div class="container-fluid" id="banners">
    <!--start banners-wrapper-->
    <div class="banners-wrapper col-lg-12">
      <template v-if="browserWidth > 782">
        <!--start left-banner-->
        <div class="col-lg-6 right-banner">
          <img
            :src="require('/src/assets/images/banner/shop-banner1.jpg')"
            alt="large-banner"
            class="img-fluid right-large-banner"
          />
        </div>
        <!--end left-banner-->

        <!--start right-banner-->
        <div class="col-lg-6 left-banner">
          <img
            :src="require('/src/assets/images/banner/shop-banner2.jpg')"
            alt="large-banner"
            class="img-fluid left-large-banner"
          />
        </div>
        <!--end right-banner-->
      </template>

      <b-carousel
        v-else
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#fff"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333; direction: rtl; overflow: hidden"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
          v-for="(i, index) in 2"
          :key="index"
          :img-src="require(`/src/assets/images/banner/shop-banner${i}.jpg`)"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!--end banners-wrapper-->
  </div>
</template>

<style src='./section-shop-banner.scss' lang="scss" scoped></style>
<script src='./section-shop-banner.js'></script>