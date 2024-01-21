<template>
  <div class="products-details-wrapper col-md-12">
    <div class="product-breadcrumb-wrapper">
      <div class="parent-breadcrumb-text">
        <svg-path
          :width="35"
          :height="35"
          :color="'#007174'"
          class="path-icon"
        ></svg-path>
        <span>مهرکوهسنگی/ پوشاک زنانه، لوازم آرایشی/ پوشاک زنانه</span>
      </div>
    </div>

    <div class="product-details-content">
      <!--start show images-->
      <div class="show-images-wrapper col-md-5">
        <div class="show-small-cards-image-wrapper">
          <div class="each-small-card">
            <img
              :src="require('/src/assets/images/products/toy3.jpg')"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="each-small-card">
            <img
              :src="require('/src/assets/images/products/toy3.jpg')"
              alt=""
              class="img-fluid"
            />
          </div>
          <div class="each-small-card">
            <img
              :src="require('/src/assets/images/products/toy3.jpg')"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>

        <div class="show-large-card-image-wrapper">
          <img
            :src="require('/src/assets/images/products/toy3.jpg')"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <!--end show images-->

      <!--start add product to cart images-->
      <div class="product-features-wrapper col-md-4">
        <div class="each-row-features">
          <div class="parent-title--points">
            <h5>پیراهن بلند مجلسی</h5>
            <star-rating
              :rating="2"
              :read-only="true"
              :increment="0.01"
              :rtl="true"
              :star-size="20"
              :show-rating="false"
            ></star-rating>
          </div>

          <div class="parent-shop-name">
            <p>فروشنده: <span>پوشاک زنانه هانا</span></p>
          </div>
        </div>

        <div class="each-row-features">
          <div class="price-wrapper">
            <p class="price-title">قیمت برای فروش:</p>
            <p class="price">2000 تومان</p>
            <p class="discount-price">20000 تومان</p>
          </div>
        </div>

        <div class="each-row-features">
          <div class="product-buy-wrapper">
            <p class="buy-count">تعداد برای خرید:</p>

            <div class="increase--decrease-count-wrapper">
              <div class="parent-icon">
                <i class="fas fa-plus min-max-icon" @click="increase()"></i>
              </div>
              <span class="product-count"> 1</span>
              <div class="parent-icon">
                <i
                  class="fas fa-minus min-max-icon left-icon"
                  @click="decrease()"
                ></i>
              </div>
            </div>
          </div>
        </div>

        <div class="each-row-features">
          <div class="product-size-wrapper">
            <p class="size-title">سایز انتخابی:</p>
            <span
              class="each-card-size"
              :class="{ 'selected-size': size.active }"
              v-for="(size, index) in sizes"
              :key="index"
            >
              {{ size.size }}
            </span>
          </div>
        </div>

        <div class="each-row-features">
          <div class="colors-select-wrapper">
            <p class="color-title">رنگ انتخابی:</p>

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

        <div class="add-cart--wishlist-wrapper">
          <div class="parent-add-cart">
            <button class="btn add-cart-btn">
              <svg-add-to-cart
                :width="20"
                :height="20"
                :color="'#fff'"
                class="cart-icon"
              ></svg-add-to-cart>
              افزودن کالا به سبد خرید
            </button>
          </div>

          <div class="parent-wishlist">
            <button class="btn wishlist-btn">
              <svg-heart
                :width="25"
                :height="25"
                :color="'#e25959'"
              ></svg-heart>
            </button>
          </div>
        </div>
      </div>

      <!--end add product to cart-->

      <!--start call to salesperson -->
      <div class="more-information-product-wrapper col-md-2">
        <div class="parent-follow-seller-btn">
          <button class="btn follow-seller-btn">دنبال کردن فروشنده</button>
        </div>

        <div class="shop-info-wrapper">
          <div class="parent-shop-image-name">
            <img
              :src="require('/src/assets/images/shops/shop1.jpg')"
              alt=""
              class="img-fluid shop-image"
            />

            <p class="shop-name">پوشاک زنانه هانا</p>
          </div>

          <div class="parent-shop-description">
            <p class="shop-description">
              راحتی و آرامش در عین حال قیمت مناسب برای خرید شما عزیزان در این
              فروشگاه فراهم است
            </p>
          </div>
        </div>

        <div class="guarantee-texts-wrapper">
          <div class="parent-icon--text-guarantee">
            <svg-badge :width="20" :height="20" :color="'#333333'"></svg-badge>

            <p>گارانتی اصالت ورسالت فیزیکی</p>
          </div>

          <svg-tick :width="15" :height="15" :color="'#007174'"></svg-tick>
        </div>

        <div class="guarantee-texts-wrapper">
          <div class="parent-icon--text-guarantee">
            <svg-trolley
              :width="15"
              :height="15"
              :color="'#333333'"
            ></svg-trolley>

            <p>امکان خرید حضوری و موجود بودن کالا</p>
          </div>

          <svg-tick :width="15" :height="15" :color="'#007174'"></svg-tick>
        </div>

        <div class="guarantee-texts-wrapper">
          <div class="parent-icon--text-guarantee">
            <svg-gift :width="15" :height="15" :color="'#333333'"></svg-gift>

            <p>تحویل به موقع کالا درب منزل</p>
          </div>

          <svg-tick :width="15" :height="15" :color="'#007174'"></svg-tick>
        </div>

        <div class="guarantee-texts-wrapper">
          <div class="parent-icon--text-guarantee">
            <svg-person
              :width="15"
              :height="15"
              :color="'#333333'"
            ></svg-person>

            <p>رضایت از خرید</p>
          </div>

          <svg-tick :width="15" :height="15" :color="'#007174'"></svg-tick>
        </div>

        <div class="guarantee-texts-wrapper">
          <div class="parent-icon--text-guarantee">
            <svg-rating
              :width="18"
              :height="18"
              :color="'#333333'"
            ></svg-rating>

            <p>امتیاز این فروشگاه</p>
          </div>

          <star-rating
            :rating="2"
            :read-only="true"
            :increment="0.01"
            :rtl="true"
            :star-size="20"
            :show-rating="false"
          ></star-rating>
        </div>

        <div class="parent-call-seller-btn">
          <button class="btn call-seller-btn">تماس با فروشنده</button>
        </div>

        <div class="parent-see-shop-page">
          <p class="see-shop-page">مشاهده صفحه فروشگاه</p>
        </div>
      </div>
      <!--end call to salesperson -->
    </div>
  </div>
</template>

<style src='./products-details.scss' lang="scss" scoped></style>
<script src='./products-details.js'></script>