<template>
  <section id="category">
    <!--start category-up-section-->
    <div class="category-down-section">
      <!--start right-section-->
      <div class="right-section col-lg-6">
        <div class="small-cards-wrapper col-7">
          <img
            src="../../../../assets/images/categories/luxury-necklace.jpg"
            alt=""
            class="img-fluid necklace-size"
            @click="productCategoryPage"
          />

          <img
            src="../../../../assets/images/categories/girls-hand-bags.jpg"
            alt=""
            class="img-fluid small-card-size"
            @click="productCategoryPage"
          />
        </div>

        <div class="long-card-wrapper col-5">
          <img
            src="../../../../assets/images/categories/woman-dress.jpg"
            alt=""
            class="img-fluid long-card-size"
            @click="productCategoryPage"
          />
        </div>
      </div>
      <!--end right-section-->

      <!--start left-section-->
      <div class="left-section col-lg-6">
        <div class="left-section_small-cards-wrapper">
          <img
            src="../../../../assets/images/categories/shoes.jpg"
            alt=""
            class="img-fluid small-card-size small-card-shoes"
            @click="productCategoryPage"
          />

          <img
            src="../../../../assets/images/categories/stack-men-shirt.jpg"
            alt=""
            class="img-fluid small-card-size"
            @click="productCategoryPage"
          />
        </div>

        <div class="left-section_long-card-wrapper">
          <img
            src="../../../../assets/images/categories/laptop.jpg"
            alt=""
            class="img-fluid long-card-size"
            @click="productCategoryPage"
          />
        </div>
      </div>
      <!--end left-section-->
    </div>
    <!--end category-up-section-->
  </section>
</template>

<style src='./section-category.scss' lang="scss" scoped></style>
<script src='./section-category.js'></script>