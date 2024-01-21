<template>
  <div class="container-fluid">
    <div id="suggestion-wrapper">
      <!--start title wrapper-->
      <div class="title-wrapper">
        <div class="suggest-title">
          <h3>{{ title }}</h3>
        </div>
      </div>
      <!--end title wrapper-->

      <!--start title wrapper-->
      <div class="banner-wrapper">
        <template v-if="browserWidth > 1200">
          <div class="col-lg-4 each-banner" v-for="i in imagesIndex" :key="i">
            <img
              :src="
                require(`../../../../assets/images/suggestion/suggest-(${i}).jpg`)
              "
              alt="banner"
              class="img-fluid"
            />
          </div>
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
          style="
            text-shadow: 1px 1px 2px #333;
            direction: rtl;
            overflow: hidden;
          "
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Slides with image only -->
          <b-carousel-slide
            v-for="(img, index) in imagesIndex"
            :key="index"
            :img-src="
              require(`../../../../assets/images/suggestion/suggest-(${img}).jpg`)
            "
          ></b-carousel-slide>
        </b-carousel>
      </div>
      <!--end title wrapper-->
    </div>
  </div>
</template>

<style src='./section-suggestion.scss' lang="scss" scoped></style>
<script src='./section-suggestion.js'></script>