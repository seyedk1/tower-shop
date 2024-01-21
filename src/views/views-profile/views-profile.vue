<template>
  <div id="main-container">
    <shared-header></shared-header>

    <div class="profile-wrapper container-fluid">
      <div class="profile-title">
        <div class="my-profile">
          <svg-shopping-cart :width="45" :height="45"></svg-shopping-cart>
          <h5>پروفایل من</h5>
        </div>

        <div class="parent-logout-btn">
          <button class="btn logout-btn">
            <b-icon-box-arrow-right></b-icon-box-arrow-right> خروج
          </button>
        </div>
      </div>

      <profile-user-info></profile-user-info>

      <profile-map-address v-if="getIsMap"></profile-map-address>

      <profile-add-address v-if="getDialog"></profile-add-address>

      <div class="mt-4 mb-4">
        <custom-tab-navigation>
          <custom-tab-content
            v-for="(item, index) in tabs"
            :key="index"
            :title="item.title"
            :icon="item.icon"
            :tabType="1"
          >
            <template v-if="item.slotName == 'latest-order'">
              <div class="parent-last-orders-cards" v-if="!getFlag">
                <profile-user-last-orders
                  v-for="(item, index) in orders"
                  :key="index"
                  :order="item"
                ></profile-user-last-orders>
              </div>

              <div class="parent-details" v-else>
                <div class="first-row-detail">
                  <p v-for="(i, index) in infoRow1" :key="index">
                    {{ i.title }}: <span>{{ i.value }}</span>
                  </p>
                </div>
                <div class="first-row-detail change-color-row">
                  <p v-for="(i, index) in infoRow2" :key="index">
                    {{ i.title }}: <span>{{ i.value }}</span>
                  </p>
                </div>
                <div class="first-row-detail">
                  <p v-for="(i, index) in infoRow3" :key="index">
                    {{ i.title }}: <span>{{ i.value }}</span>
                  </p>
                </div>
                <div class="preview-order-wrapper">
                  <div class="order-preview-content">
                    <v-expansion-panels>
                      <v-expansion-panel>
                        <v-expansion-panel-header>
                          <div class="parent-row-details-text">
                            <span>محصولات سفارش:5 محصول</span>
                          </div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          <swiper
                            ref="mySwiper"
                            class="swiper slider-main"
                            :options="swiperOption2"
                            :auto-update="true"
                          >
                            <swiper-slide v-for="(product, i) in 6" :key="i">
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

            <template v-else-if="item.slotName == 'last-favorites'">
              <div class="parent-last-orders-cards">
                <profile-user-favorites
                  v-for="i in 6"
                  :key="i"
                ></profile-user-favorites>
              </div>
            </template>

            <template v-else-if="item.slotName == 'following'">
              <div class="parent-last-orders-cards">
                <profile-user-following
                  v-for="i in 4"
                  :key="i"
                ></profile-user-following>
              </div>
            </template>
          </custom-tab-content>
        </custom-tab-navigation>
      </div>
    </div>

    <products-list
      :title="'محصولات پیشنهادی'"
      :products="souvenirsProducts"
      :componentOptions="{ name: 'svg-souvenirs' }"
    ></products-list>

    <shared-footer></shared-footer>
  </div>
</template>

<style src='./views-profile.scss' lang="scss" scoped></style>
<script src='./views-profile.js'></script>