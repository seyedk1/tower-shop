<template>
  <div class="parent-order-cost">
    <div class="order-cost-content">
      <div class="up-content">
        <div class="each-row-order" v-for="i in 3" :key="i">
          <div class="parent-title-order">
            <svg-money-badge
              :width="20"
              :height="20"
              :color="'#333'"
            ></svg-money-badge>

            <h6>مبلغ سفارش:</h6>
          </div>

          <div class="parent-price">
            <span>188200 تومان</span>
          </div>
        </div>
      </div>

      <div class="down-content">
        <div class="each-row-order">
          <div class="parent-title-order">
            <svg-money-badge
              :width="20"
              :height="20"
              :color="'#333'"
            ></svg-money-badge>

            <h6>مبلغ کل پرداختی:</h6>
          </div>

          <div class="parent-price">
            <span>260000 تومان</span>
          </div>
        </div>

        <div class="parent-btn-order">
          <button
            class="btn btn-order"
            @click="$router.push({ name: 'payment' })"
          >
            ادامه فرایند خرید
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src='./cart-order-cost.scss' lang="scss" scoped></style>
<script src='./cart-order-cost.js'></script>