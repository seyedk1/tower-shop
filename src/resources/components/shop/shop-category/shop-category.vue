<template>
  <div class="container-fluid" id="category-filters-wrapper">
    <div class="category-filters-wrapper col-lg-12">
      <!--start right-filters-wrapper-->
      <div class="col-lg-3 right-filters-wrapper">
        <slot name="biography"></slot>

        <slot name="tags"></slot>

        <filters-category
          :subCategories="subCategories"
          v-if="existCategoryFilter"
        ></filters-category>

        <filters-price-range v-if="existPriceRange"></filters-price-range>

        <filters-color v-if="existFilterColor"></filters-color>
      </div>
      <!--end right-filters-wrapper-->

      <!--start left-filters--products-wrapper-->
      <div class="col-lg-9 left-filters--products-wrapper">
        <!--start left-filters-wrapper-->
        <div class="left-filters-wrapper">
          <!--start each-filter-->
          <div class="col-lg-4 each-filter" v-for="i in 3" :key="i">
            <elements-dropdown class="dropdown-component">
              <div class="wrapper-filters-sort" slot="title">
                <div class="filter-title-wrapper">
                  <p>مرتب سازی بر اساس: <span>بیشترین امتیاز</span></p>
                </div>
                <div class="filter-icon-wrapper">
                  <i class="fas fa-caret-down"></i>
                </div>
              </div>
            </elements-dropdown>
          </div>
          <!--end each-filter-->
        </div>
        <!--end left-filters-wrapper-->

        <!--start filters-group-btn-->
        <filters-group-btn></filters-group-btn>
        <!--end filters-group-btn-->

        <div class="products-wrapper">
          <div
            class="col-lg-4 products-card"
            v-for="(shop, index) in shops"
            :key="index"
          >
            <shop-card :shop="shop" :classes="['change-style']"></shop-card>
          </div>
        </div>
      </div>
      <!--end left-filters--products-wrapper-->
    </div>
  </div>
</template>

<style src='./shop-category.scss' lang="scss" scoped></style>
<script src='./shop-category.js'></script>