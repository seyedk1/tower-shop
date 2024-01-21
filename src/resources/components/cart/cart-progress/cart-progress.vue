<template>
  <section class="progress-wrapper">
    <ul>
      <li>
        <div class="each-progress-step">
          <div class="parent-icon active">
            <svg-home-address
              :width="50"
              :height="50"
              :color="'#007174'"
            ></svg-home-address>
          </div>

          <p class="step-text active-step">تعیین آدرس</p>
        </div>
      </li>

      <li class="chevron-icon"><b-icon icon="chevron-left" font-scale="1.5"></b-icon></li>

      <li>
        <div class="each-progress-step">
          <div class="parent-icon">
            <svg-save-money
              :width="50"
              :height="50"
              :color="'#333'"
            ></svg-save-money>
          </div>
          <p class="step-text">پرداخت ناظر</p>
        </div>
      </li>

      <li class="chevron-icon"><b-icon icon="chevron-left" font-scale="1.5"></b-icon></li>

      <li>
        <div class="each-progress-step">
          <div class="parent-icon">
            <svg-supervisor-accept
              :width="50"
              :height="50"
              :color="'#333'"
            ></svg-supervisor-accept>
          </div>
          <p class="step-text">تایید ناظر</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style src='./cart-progress.scss' lang="scss" scoped></style>
<script src='./cart-progress.js'></script>