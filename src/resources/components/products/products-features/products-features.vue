<template>
  <div class="product-features-wrapper">
    <ul class="col-md-3">
      <li v-for="(desc, index) in descriptions" :key="index">
        {{ desc.title }}: <span> {{ desc.desc }} </span>
      </li>
    </ul>
  </div>
</template>

<style src='./products-features.scss' lang="scss" scoped></style>
<script src='./products-features.js'></script>