<template>
  <div class="container-fluid parent-sliders-container mt-5">
    <div class="parent-sliders">
      <slider
        :animation="'normal'"
        class="col-lg-10 own-slider"
        :style="mySlider"
        :control-btn="false"
        :interval="5000"
        :stopOnHover="true"
        :height="'auto'"
      >
        <slider-item
          v-for="(image, index) in images"
          :key="index"
          :style="mySlider"
        >
          <img
            :src="require(`../../../../assets/images/slider/${image}`)"
            alt=""
            class="img-fluid each-slider-image"
          />
        </slider-item>
      </slider>

      <div class="left-slider-wrapper col-lg-2">
        <div class="parent-discount-badge">
          <img
            src="../../../../assets/images/slider/discount-badge.png"
            alt=""
            class="img-fluid discount-badge"
          />
          <span> {{ "10%" | persianNumber }} </span>
        </div>

        <span class="right-slide-circle"></span>
        <span class="left-slide-circle"></span>
        <!--start parent image-->
        <div class="parent-image">
          <img
            src="../../../../assets/images/slider/kerem.jpg"
            alt=""
            class="img-fluid"
          />
        </div>
        <!--end parent image-->

        <!--start content slider-->
        <div class="parent-content-slider">
          <div class="parent-title">
            <h6>کرم ضدعفونی دست</h6>
          </div>

          <div class="parent-description">
            <p>قیمت پس از تخفبف: {{ "20000" | persianNumber }} تومان</p>
          </div>

          <div class="parent-time">
            <span> {{ "14:05:33:21" | persianNumber }} </span>
          </div>
        </div>
        <!--end content slider-->
      </div>
    </div>
  </div>
</template>

<style src='./section-slider.scss' lang="scss" scoped></style>
<script src='./section-slider.js'></script>