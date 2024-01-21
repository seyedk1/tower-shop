<template>
  <div id="main-container">
    <shared-header></shared-header>

    <banner-dedicated-shop></banner-dedicated-shop>

    <shop-category :existFilterColor="false" :existPriceRange="false">
      <div class="shop-bio-card-wrapper mb-3" slot="biography">
        <div class="title-bio-wrapper">
          <svg-biography
            :width="25"
            :height="25"
            class="biography-icon"
          ></svg-biography>
          <div class="parent-title">
            <h6>درباره فروشگاه</h6>
          </div>
        </div>

        <div class="parent-shop-description">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            تون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
            در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را
            می طلبد، تا با نرم افزاره شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ
          </p>
        </div>
      </div>

      <div class="tags-card-wrapper mb-3" slot="tags">
        <div class="title-tags-wrapper">
          <svg-tags :width="25" :height="25" class="tags-icon"></svg-tags>
          <div class="parent-title">
            <h6>برچسب ها</h6>
          </div>
        </div>

        <div class="parent-tags-label">
          <label>شلوار زنانه</label>
          <label>پیراهن</label>
        </div>
      </div>
    </shop-category>

    <shared-footer></shared-footer>
  </div>
</template>

<style src='./views-dedicated-shop.scss' lang="scss" scoped></style>
<script src='./views-dedicated-shop.js'></script>