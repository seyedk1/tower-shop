<template>
  <div class="cart-container">
    <div class="cart-card-wrapper container-fluid">
      <div class="prent-cart-header">
        <svg-shopping-cart :width="40" :height="40"></svg-shopping-cart>
        <p>سبد خرید من</p>
      </div>

      <div class="parent-cards" v-for="i in 5" :key="i">
        <div class="product-img-wrapper">
          <div class="parent-img">
            <img
              :src="require('/src/assets/images/products/kif2.jpg')"
              alt=""
              class="img-fluid cart-img"
            />
          </div>
        </div>

        <div class="cart-details-wrapper">
          <div class="parent-product-info">
            <div class="parent-product-name">
              <h5>پیراهن بلند مجلسی</h5>
              <p>فروشگاه: مروارید</p>
            </div>

            <div class="parent-product-count">
              <i class="fas fa-plus min-max-icon"></i>
              <span class="count">2</span>
              <i class="fas fa-minus min-max-icon left-icon"></i>
            </div>

            <span class="product-price">120000 ریال</span>

            <span class="product-price">240000 ریال</span>

            <svg-delete-icon :width="20" :height="20"></svg-delete-icon>
          </div>

          <div class="prent-other-options">
            <div class="option">
              <p>رنگ: بنفش</p>
              <span class="color"></span>
            </div>

            <div class="option">
              <p>سایز: 36(L)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="preview-order-wrapper container-fluid">
      <div class="preview-order-content">
        <div class="parent-order-title">
          <svg-text-file :width="40" :height="40"></svg-text-file>
          <p class="order-text">خلاصه سفارش</p>
        </div>

        <div class="parent-up-order">
          <div class="row-order">
            <svg-count-down :width="25" :height="25"></svg-count-down>
            <p>تعداد سفارش ها: 5 محصول</p>
          </div>

          <div class="row-order">
            <svg-seller :width="25" :height="25"></svg-seller>
            <p>فروشنده: مروارید</p>
          </div>
        </div>

        <div class="parent-down-order">
          <div class="parent-row-feature">
            <div class="parent-overall-order">
              <svg-budget
                :width="25"
                :height="25"
                :color="'#333333'"
              ></svg-budget>
              <p>مبلغ کل سفارش:</p>
            </div>

            <div class="price-order">
              <p>2,580,000 ریال</p>
            </div>
          </div>
          <div class="parent-row-feature">
            <div class="parent-overall-order">
              <svg-tax :width="25" :height="25" :color="'#333333'"></svg-tax>
              <p>مالیات افزوده:</p>
            </div>

            <div class="price-order">
              <p>+120,000 ریال</p>
            </div>
          </div>

          <div class="parent-row-feature">
            <div class="parent-overall-order">
              <svg-money-badge
                :width="25"
                :height="25"
                :color="'#333333'"
              ></svg-money-badge>
              <p>مبلغ کل پرداختی:</p>
            </div>

            <div class="price-order">
              <p>270,000 ریال</p>
            </div>
          </div>

          <div class="parent-submit-order">
            <button class="btn btn-submit-order">تایید نهایی سفارش</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src='./cart-container.scss' lang="scss" scoped></style>
<script src='./cart-container.js'></script>