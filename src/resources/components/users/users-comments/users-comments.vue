<template>
  <div class="comments-wrapper">
    <div class="parent-features-points--charts">
      <div class="parent-features-points col-md-10">
        <div class="each-feature col-md-6" v-for="i in 6" :key="i">
          <p class="feature-title">دریافت کالا در دسته بندی و وضعیت مناسب:</p>

          <vue-slider
            v-model="value"
            :data="data"
            :marks="true"
            :width="'40%'"
            :direction="'rtl'"
            :railStyle="sliderStyle"
            :processStyle="processStyle"
            :tooltip="'none'"
            :hide-label="true"
            :clickable="false"
            :dragOnClick="false"
          ></vue-slider>

          <span> {{ value }} </span>
        </div>
      </div>

      <div class="parent-charts col-md-2"></div>
    </div>

    <div class="parent-show-comments--add-comment">
      <div class="parent-show-comments">
        <div class="each-comment" v-for="i in 4" :key="i">
          <span class="comment-number"> {{ i }}</span>
          <svg-user-circle
            :width="25"
            :height="25"
            :color="'#333333'"
          ></svg-user-circle>

          <p class="comment">خیلی خوب و عالی بود ، پیشنهاد میکنم بخرین</p>
        </div>
      </div>

      <div class="parent-add-comment"></div>
    </div>
  </div>
</template>

<style src='./users-comments.scss' lang="scss" scoped></style>
<script src='./users-comments.js'></script>