<template>
  <div class="login-wrapper">
    <div class="login-bg"></div>

    <div class="login-card-wrapper container h-75">
      <div class="parent-right-card">
        <div class="parent-logo--text">
          <div class="parent-logo">
            <img
              :src="require('/src/assets/images/logo-mehr.png')"
              alt=""
              class="img-fluid logo-img"
            />
          </div>
          <div class="parent-login-text">
            <h5>ورود/ثبت نام در فروشگاه بزرگ مهرکوهسنگی</h5>
          </div>
        </div>

        <router-view></router-view>
      </div>
      <div class="parent-left-card"></div>
    </div>
  </div>
</template>

<style src='./login-container.scss' lang="scss" scoped></style>
<script src='./login-container.js'></script>