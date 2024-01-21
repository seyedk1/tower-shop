<template>
  <div
    id="header-wrapper"
    :class="{ 'header-up-wrapper-fixed': isScrollData ? isScrollData : null }"
  >
    <!--start header-up-content-->
    <div class="container-fluid parent-position">
      <div class="header-up-content">
        <!--start logo-parent-->
        <div class="logo-parent">
          <img
            :src="require('/src/assets/images/logo-mehr.png')"
            alt=""
            class="img-fluid"
          />
        </div>
        <!--end logo-parent-->

        <!--start search-input-wrapper-->
        <div class="search-input-wrapper" v-if="!changeInputPosition">
          <!--start parent-search-text-->
          <div class="parent-search-text">
            <span class="search">جستجو</span>
            <span class="triangel-left"></span>
          </div>
          <!--end parent-search-text-->

          <!--start search-input-->
          <elements-input
            :inputType="'text'"
            :placeholder="'کالای مورد نیازتان را از اینجا پیدا کنید'"
            :styles="['search-input']"
          ></elements-input>
          <!--end search-input-->

          <!--start search-input-->
          <div class="parent-search-icon">
            <svg-search :width="20" :height="20" :color="'#fff'"></svg-search>
          </div>
          <!--end search-input-->
        </div>
        <!--end search-input-wrapper-->

        <!--start account--cart-wrapper-->
        <div class="account--cart-wrapper">
          <div class="parent-account">
            <svg-user :width="20" :height="20" :color="'#333'"></svg-user>
            <p>حساب کاربری</p>
          </div>

          <div class="cart-parent">
            <svg-cart
              :width="25"
              :height="25"
              :color="'#000'"
              class="basket-icon"
            ></svg-cart>
            <span class="badge">5</span>
          </div>
        </div>
        <!--end account--cart-wrapper-->
      </div>

      <button class="toggle" @click="drawerVisible = true">
        <svg-drawer-icon
          :width="browserWidth < 485 ? 30 : 40"
          :height="browserWidth < 485 ? 30 : 40"
          :color="'#007174'"
        ></svg-drawer-icon>
      </button>

      <div
        class="right-drawer"
        :style="{
          width:
            drawerVisible && browserWidth > 656
              ? '30vw'
              : drawerVisible && browserWidth <= 656 && browserWidth > 494
              ? '40vw'
              : drawerVisible && browserWidth <= 494 && browserWidth > 439
              ? '45vw'
              : drawerVisible && browserWidth <= 439 && browserWidth > 395
              ? '50vw'
              : drawerVisible && browserWidth <= 395 && browserWidth > 358
              ? '55vw'
              : drawerVisible && browserWidth <= 358 && browserWidth > 314
              ? '63vw'
              : drawerVisible && browserWidth <= 314
              ? '70vw'
              : '0',
          paddingLeft: drawerVisible ? '10px' : '0',
        }"
      >
        <div class="drawer-close-wrapper">
          <button class="close" @click="drawerVisible = false">
            <p>مهر کوهسنگی <span>&#9587;</span></p>
          </button>
        </div>

        <div class="row-menu-item" v-for="(item, index) in routes" :key="index">
          <!-- <component :is="item.menuIcon" v-bind="propsStyle"></component> -->
          <router-link
            :to="{ path: '/' + item.routePath }"
            active-class="active router-link-active"
            exact
            @click.native="closeDrawer"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <!-- We will make the mask fill the screen while the menu is visible. Because its z-index is 1 less than that of the menu, the menu will still be displayed on top of it -->
      <div
        class="drawer-mask"
        :style="{
          width: drawerVisible ? '100vw' : '0',
          opacity: drawerVisible ? '0.6' : '0',
        }"
        @click="drawerVisible = false"
      ></div>
    </div>
    <!--end header-up-content-->
    <div
      class="container"
    >
      <!--start header-down-content-->
      <div class="header-down-content">
        <ul>
          <li>
            طلا و جواهرات
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>

          <li>
            پوشاک زنانه،لوازم آرایشی
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
          <li>
            کیف و کفش
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
          <li>
            پوشاک مردانه
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
          <li>
            اسباب بازی،موبایل، رایانه
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
          <li>
            سوغات و صنایع دستی
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
          <li>
            باشگاه مشتریان
            <i class="fas fa-chevron-down chevron-color"></i>
          </li>
        </ul>
      </div>
      <!--end header-down-content-->

      <!--start search-input-wrapper-->
      <div
        class="search-input-wrapper-change-position"
        v-if="changeInputPosition"
      >
        <!--start parent-search-text-->
        <div class="parent-search-text">
          <span class="search">جستجو</span>
          <span class="triangel-left"></span>
        </div>
        <!--end parent-search-text-->

        <!--start search-input-->
        <elements-input
          :inputType="'text'"
          :placeholder="
            browserWidth <= 420
              ? 'کالا مورد نظر ...'
              : 'کالای مورد نیازتان را از اینجا پیدا کنید'
          "
          :styles="['search-input']"
        ></elements-input>
        <!--end search-input-->

        <!--start search-input-->
        <div class="parent-search-icon">
          <svg-search
            :width="browserWidth <= 420 ? 15 : 20"
            :height="browserWidth <= 420 ? 15 : 20"
            :color="'#fff'"
          ></svg-search>
        </div>
        <!--end search-input-->
      </div>
      <!--end search-input-wrapper-->
    </div>
  </div>
</template>

<style src='./shared-header.scss' lang="scss" scoped></style>
<script src='./shared-header.js'></script>