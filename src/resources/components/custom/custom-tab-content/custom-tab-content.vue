<template>
  <div
    class="tab"
    :class="[
      { tab2: isActive && tabType == 2 },
      customStyles != undefined ? customStyles : null,
    ]"
    v-show="isActive"
  >
    <slot></slot>
  </div>
</template>


<style src='./custom-tab-content.scss' lang="scss" scoped></style>
<script src='./custom-tab-content.js'></script>