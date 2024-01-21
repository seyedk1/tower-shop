<template>
  <!--start filters-category-wrapper-->
  <div class="filters-category-wrapper" id="accordion">
    <div class="filters-category-wrapper_header-content">
      <a
        class="category-text"
        data-toggle="collapse"
        href="#collapseOne"
        @click="openAccordion = !openAccordion"
        >دسته بندی</a
      >

      <i
        class="fas fa-chevron-up icon-style"
        :class="{ 'rotate-icon': !openAccordion }"
      ></i>
    </div>

    <div
      id="collapseOne"
      class="filters-category-wrapper_body-content"
      :class="{ 'category-filter-open--close': !openAccordion }"
      data-parent="#accordion"
    >
      <template v-for="cat in subCategories">
        <div class="parent-subcategory" :key="cat.id">
          <div class="parent-subcategory-title">
            <component :is="cat.svgIcon" v-bind="svgStyle"></component>
            <a
              data-toggle="collapse"
              :href="`#${cat.href}`"
              @click="subCat1 = !subCat1"
            >
              {{ cat.title }}
            </a>
          </div>

          <i class="fas fa-chevron-up icon-style"></i>
        </div>

        <ul
          :id="cat.href"
          class="parent-category-features"
          :class="[!subCat1 ? 'not-show' : undefined]"
          :key="cat.href"
        >
          <li v-for="(feature, i) in cat.features" :key="i">
            {{ feature }}
          </li>
          <li>+ موارد بیشتر</li>
        </ul>
      </template>
    </div>
  </div>
  <!--end filters-category-wrapper-->
</template>

<style src='./filters-category.scss' lang="scss" scoped></style>
<script src='./filters-category.js'></script>