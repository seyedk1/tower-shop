<template>
  <section>
    <div class="parent-login-input">
      <div class="input-content">
        <label class="input-label">شماره همراه</label>
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
        @click="$router.push({ name: 'security-code' })"
      >
        ورود/ثبت نام
      </button>
    </div>
  </section>
</template>

<style src='./login-register.scss' lang="scss" scoped></style>
<script src='./login-register.js'></script>