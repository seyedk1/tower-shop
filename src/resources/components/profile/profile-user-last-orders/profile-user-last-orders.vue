<template>
  <div class="last-orders-card col-md-3">
    <div class="parent-label-order">
      <p class="order-label" :style="setLabelColor(order.labelColor)">
        {{ order.status }}
      </p>
    </div>

    <div class="each-order-row first-order-row">
      <div class="parent-order-title">
        <svg-user :width="18" :height="18"></svg-user>
        <p class="order-title">شماره سفارش :</p>
      </div>

      <div class="parent-order-value">
        <p class="order-value">142477994</p>
      </div>
    </div>

    <div class="each-order-row">
      <div class="parent-order-title">
        <svg-user :width="18" :height="18"></svg-user>
        <p class="order-title">تاریخ ثبت سفارش :</p>
      </div>

      <div class="parent-order-value">
        <p class="order-value">۱۶ آبان ۱۳۹۹</p>
      </div>
    </div>

    <div class="each-order-row">
      <div class="parent-order-title">
        <svg-user :width="18" :height="18"></svg-user>
        <p class="order-title">مبلغ کل :</p>
      </div>

      <div class="parent-order-value">
        <p class="order-value">۸۷,۴۰۰ تومان</p>
      </div>
    </div>

    <div class="each-order-row">
      <div class="parent-order-title">
        <svg-user :width="18" :height="18"></svg-user>
        <p class="order-title">فروشنده :</p>
      </div>

      <div class="parent-order-value">
        <p class="order-value">فروشگاه مروارید</p>
      </div>
    </div>

    <div class="each-order-row">
      <div class="parent-order-title">
        <svg-user :width="18" :height="18"></svg-user>
        <p class="order-title">نحوه تحویل :</p>
      </div>

      <div class="parent-order-value">
        <p class="order-value">حضوری</p>
      </div>
    </div>

    <div class="parent-details-order-btn">
      <button class="btn details-order-btn" @click="details">
        جزئیات سفارش
        <b-icon-chevron-left></b-icon-chevron-left>
      </button>
    </div>
  </div>
</template>


<style src='./profile-user-last-orders.scss' lang="scss" scoped></style>
<script src='./profile-user-last-orders.js'></script>