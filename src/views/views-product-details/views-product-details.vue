<template>
  <div id="main-container">
    <shared-header></shared-header>

    <products-details></products-details>

    <section-guarantee></section-guarantee>

    <div class="mt-4">
      <custom-tab-navigation>
        <custom-tab-content
          v-for="(item, index) in tabs"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :tabType="1"
        >
          <template v-if="item.slotName == 'awaiting-comment'">
            <products-descriptions></products-descriptions>
          </template>

          <template v-else-if="item.slotName == 'my-comment'">
            <users-comments></users-comments>
          </template>

          <template v-else-if="item.slotName == 'features'">
            <products-features></products-features>
          </template>
        </custom-tab-content>
      </custom-tab-navigation>
    </div>

    <div class="mt-2">
      <products-list
        :title="'محصولات مورد علاقه'"
        :products="toyProducts"
        :componentOptions="{ name: 'svg-toy' }"
      ></products-list>
    </div>

    <div class="mt-2">
      <products-list
        :title="'محصولات مرتبط'"
        :products="souvenirsProducts"
        :componentOptions="{ name: 'svg-souvenirs' }"
      ></products-list>
    </div>

    <shared-footer></shared-footer>
  </div>
</template>

<style src='./views-product-details.scss' lang="scss" scoped></style>
<script src='./views-product-details.js'></script>