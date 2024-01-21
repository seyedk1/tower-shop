<template>
  <!--start filters-price-range-wrapper-->
  <div class="filters-category-wrapper mt-5" id="accordion">
    <div class="filters-category-wrapper_header-content">
      <a
        class="category-text"
        data-toggle="collapse"
        href="#collapseTwo"
        @click="openPrice = !openPrice"
        >رنج قیمت</a
      >

      <i
        class="fas fa-chevron-up icon-style"
        :class="{ 'rotate-icon': !openPrice }"
      ></i>
    </div>

    <div
      id="collapseTwo"
      class="filters-category-wrapper_body-content"
      :class="{ 'category-filter-open--close': !openPrice }"
      data-parent="#accordion"
    >
      <div class="parent-price-range">
        <!--start parent-from--to-price-->
        <div class="parent-from-price">
          <p class="from-text">از</p>
          <input
            type="text"
            class="from-price-input"
            :disabled="true"
            v-model="slider[0]"
          />
        </div>
        <!--end parent-from--to-price-->

        <!--start parent-from--to-price-->
        <div class="parent-from-price">
          <p class="from-text">تا</p>
          <input
            type="text"
            class="from-price-input"
            :disabled="true"
            v-model="slider[1]"
          />
        </div>
        <!--end parent-from--to-price-->
      </div>

      <!--start parent-range-price-slider-->
      <div class="parent-range-price-slider">
        <vue-slider
          v-model="slider"
          :tooltip="'none'"
          :railStyle="sliderStyle"
          :processStyle="processStyle"
          :max="rangePrice.max"
          :min="rangePrice.min"
        ></vue-slider>
      </div>
      <!--end parent-range-price-slider-->
    </div>
  </div>
  <!--end filters-price-range-wrapper-->
</template>

<style src='./filters-price-range.scss' lang="scss" scoped></style>
<script src='./filters-price-range.js'></script>