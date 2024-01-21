<template>
  <div class="container-fluid mt-5 mb-3">
    <div class="row">
      <div class="parent-header-products-list">
        <div class="parent-title--icon">
          <component
            :is="componentOptions.name"
            v-bind="component_props"
          ></component>
          <h4>{{ title }}</h4>
        </div>
        <div class="parent-text">
          <router-link :to="{ name: routeName }" class="more-products">
            مشاهده محصولات بیشتر <i class="fas fa-chevron-left"></i>
          </router-link>
        </div>
      </div>
      <swiper
        ref="mySwiper"
        class="swiper slider-main"
        :options="swiperOption"
        :auto-update="true"
      >
        <swiper-slide v-for="(product, i) in products" :key="i">
          <products-card :product="product"></products-card>
        </swiper-slide>
        <div
          class="swiper-button-prev swiper-button-black navigation-button"
          :class="{ 'hidden-arrows': browserWidth < 556 }"
          slot="button-prev"
          @click="slidePrevious()"
        ></div>
        <div
          class="swiper-button-next swiper-button-black navigation-button"
          :class="{ 'hidden-arrows': browserWidth < 556 }"
          slot="button-next"
          @click="slideNext()"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<style src='./products-list.scss' lang="scss" scoped></style>
<script src='./products-list.js'></script>