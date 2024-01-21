<template>
  <!--start filters-colors-wrapper-->
  <div class="filters-category-wrapper mt-5" id="accordion">
    <div class="filters-category-wrapper_header-content">
      <a
        class="category-text"
        data-toggle="collapse"
        href="#collapseThree"
        @click="openColor = !openColor"
        >رنگ</a
      >

      <i
        class="fas fa-chevron-up icon-style"
        :class="{ 'rotate-icon': !openColor }"
      ></i>
    </div>

    <div
      id="collapseThree"
      class="filters-category-wrapper_body-content"
      :class="{ 'category-filter-open--close': !openColor }"
      data-parent="#accordion"
    >
      <div class="parent-colors">
        <span
          class="each-color"
          v-for="color in colors"
          :key="color"
          :style="circleColor(color)"
        ></span>
      </div>
    </div>
  </div>
  <!--end filters-colors-wrapper-->
</template>

<style src='./filters-color.scss' lang="scss" scoped></style>
<script src='./filters-color.js'></script>