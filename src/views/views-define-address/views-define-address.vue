<template>
  <div id="main-container">
    <shared-header></shared-header>
    <cart-progress></cart-progress>

    <router-view></router-view>

    <shared-footer></shared-footer>
  </div>
</template>


<style src='./views-define-address.scss' lang="scss" scoped></style>
<script src='./views-define-address.js'></script>