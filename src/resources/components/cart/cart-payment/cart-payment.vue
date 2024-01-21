<template>
  <div class="payment-wrapper container-fluid">
    <div class="parent-title-payment mt-5">
      <svg-home-address-title :width="30" :height="30"></svg-home-address-title>
      <h5 class="payment-title">شیوه پرداخت را انتخاب کنید</h5>
    </div>

    <div class="select-payment--order-cost-wrapper">
      <div class="parent-select-payment">
        <div class="select-payment-content">
          <div class="payment-select-row">
            <label class="checkbox-parent">
              <input type="checkbox" checked="checked" />
              <span class="checkmark"></span>
            </label>

            <svg-money-badge
              :width="60"
              :height="60"
              class="payment-icon"
            ></svg-money-badge>

            <h6>پرداخت اینترنتی</h6>
          </div>

          <div class="payment-select-row">
            <label class="checkbox-parent">
              <input type="checkbox" />
              <span class="checkmark"></span>
            </label>

            <svg-money-badge
              :width="60"
              :height="60"
              class="payment-icon"
            ></svg-money-badge>

            <h6>پرداخت در محل تحویل به صورت نقدی</h6>
          </div>
        </div>
      </div>

      <cart-order-cost></cart-order-cost>
    </div>

    <div class="parent-title-payment mt-5 mb-5">
      <svg-home-address-title :width="30" :height="30"></svg-home-address-title>
      <h5 class="payment-title">مشاهده خلاصه سفارش</h5>
    </div>

    <div class="preview-order-wrapper">
      <div class="order-preview-content">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div class="parent-row-details-text">
                <span>سفارش: 5 کالا</span>
                <span>ارسال: پستی</span>
                <span>بازه ارسال: چهارشنبه 12 اسفند 9-22</span>
                <span>مبلغ سفارش: 15000 تومان</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <swiper
                ref="mySwiper"
                class="swiper slider-main"
                :options="swiperOption2"
                :auto-update="true"
              >
                <swiper-slide v-for="(product, i) in 12" :key="i">
                  <div class="parent-each-product">
                    <div class="parent-img">
                      <img
                        :src="
                          require('/src/assets/images/products/zanane1.jpg')
                        "
                        alt=""
                        class="img-fluid"
                      />
                    </div>

                    <div class="parent-product-info">
                      <h5>پیراهن بلند مجلسی</h5>
                      <p class="price">12000 تومان</p>
                    </div>
                  </div>
                </swiper-slide>
                <div
                  class="swiper-button-prev swiper-button-black navigation-button"
                  slot="button-prev"
                  @click="slidePrevious()"
                ></div>
                <div
                  class="swiper-button-next swiper-button-black navigation-button"
                  slot="button-next"
                  @click="slideNext()"
                ></div>
              </swiper>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
  </div>
</template>

<style src='./cart-payment.scss' lang="scss" scoped></style>
<script src='./cart-payment.js'></script>