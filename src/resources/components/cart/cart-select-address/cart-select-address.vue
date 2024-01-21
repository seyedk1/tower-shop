<template>
  <div class="select-address-wrapper container-fluid">
    <div class="parent-title-select-address">
      <svg-home-address-title :width="30" :height="30"></svg-home-address-title>
      <h5 class="adress-title">ثبت آدرس برای تحویل</h5>
    </div>

    <div class="all-addresses-wrapper">
      <div
        class="parent-each-address-card--checkbox col-md-6"
        v-for="i in 4"
        :key="i"
      >
        <label
          class="checkbox-parent"
          @click="$router.push({ name: 'define-address' })"
        >
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <div class="each-address-card">
          <div class="each-row-info">
            <svg-user :width="15" :height="15" :color="'#333'"></svg-user>
            <span
              >خراسان رضوی، مشهد، بلوار خیام، خ. خیام 11 آژانس هواپیمایی و
            </span>
          </div>
          <div class="each-row-info">
            <svg-user :width="15" :height="15" :color="'#333'"></svg-user>
            <span> سید کیوان نوبخت</span>
          </div>
          <div class="each-row-info">
            <svg-telephone
              :width="15"
              :height="15"
              :color="'#333'"
            ></svg-telephone>
            <span>09123456789</span>
          </div>

          <div class="parent-each-row-info">
            <div class="each-row-info">
              <svg-telephone
                :width="15"
                :height="15"
                :color="'#333'"
              ></svg-telephone>
              <span>09123456789</span>
            </div>

            <div class="parent-action-card">
              <svg-dustbin
                :width="25"
                :height="25"
                :color="'#e25959'"
                class="action-svg"
              ></svg-dustbin>
              <svg-edit
                :width="25"
                :height="25"
                :color="'#3693b8'"
                class="action-svg"
              ></svg-edit>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src='./cart-select-address.scss' lang="scss" scoped></style>
<script src='./cart-select-address.js'></script>