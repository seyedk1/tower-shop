<template>
  <section>
    <div class="parent-notif-text--wrong-phone">
      <h5 class="notif-text">کد امنیتی به شماره 09305107724 ارسال شده است</h5>
      <h5 class="wrong-phone">شماره تلفن اشتباه است؟</h5>
    </div>
    <div class="parent-login-input">
      <div class="input-content">
        <label class="input-label">کد امنیتی</label>
        <svg-telephone
          :width="18"
          :height="18"
          class="input-icon-style"
        ></svg-telephone>
        <input type="text" class="input-style" />
      </div>
    </div>
    <div class="parent-login-button">
      <button
        class="btn btn-login"
        @click="$router.push({ name: 'login-register' })"
      >
        تایید کد
      </button>
    </div>
  </section>
</template>

<style src='./login-security-code.scss' lang="scss" scoped></style>
<script src='./login-security-code.js'></script>