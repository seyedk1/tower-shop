<template>
  <div class="container-fluid mt-5">
    <div class="parent-guarantee">
      <!--start return-guarantee-->

      <div class="guarantee-group">
        <div class="guarantee">
          <svg-return
            :width="250"
            :height="100"
            class="guarantee-icon"
          ></svg-return>
          <p>7 روز ضمانت بازگشت</p>
        </div>
        <!--end return-guarantee-->

        <!--start return-guarantee-->
        <div class="guarantee">
          <svg-guarantee
            :width="250"
            :height="100"
            class="guarantee-icon"
          ></svg-guarantee>
          <p>تضمین امنیت خرید</p>
        </div>
        <!--end return-guarantee-->
      </div>

      <div class="guarantee-group">
        <!--start return-guarantee-->
        <div class="guarantee">
          <svg-support
            :width="250"
            :height="100"
            class="guarantee-icon"
          ></svg-support>
          <p>پشتیبانی 24 ساعته</p>
        </div>
        <!--end return-guarantee-->

        <!--start return-guarantee-->
        <div class="guarantee">
          <svg-call
            :width="215"
            :height="100"
            class="guarantee-icon"
          ></svg-call>
          <p>تماس مستقیم با فروشنده</p>
        </div>
        <!--end return-guarantee-->
      </div>
    </div>
  </div>
</template>

<style src='./section-guarantee.scss' lang="scss" scoped></style>
<script src='./section-guarantee.js'></script>