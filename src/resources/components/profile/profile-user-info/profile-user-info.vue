<template>
  <div class="user-info-card-wrapper container-fluid">
    <template v-if="!flag">
      <div class="parent-profile-user-image--edit-btn">
        <div class="parent-profile-user-image">
          <div class="parent-img-profile">
            <img
              src="@/assets/images/products/toy1.jpg"
              alt=""
              class="img-fluid profile-img"
            />
          </div>

          <div class="parent-user-name">
            <p>کیوان نوبخت</p>
            <p>09305107724</p>
          </div>
        </div>

        <div class="parent-profile-edit-btn">
          <button class="btn edit-profile-btn" @click="flag = !flag">
            ویرایش اطلاعات شخصی
          </button>
        </div>
      </div>

      <div class="parent-user-other-info">
        <div class="each-user-info col-md-6">
          <svg-user :width="25" :height="25"></svg-user>
          <p class="info-title">
            آدرس :
            <span class="info-value"
              >خراسان رضوی، مشهد، بلوار خیام، خ. خیام</span
            >
          </p>
        </div>

        <div class="each-user-info col-md-6">
          <svg-user :width="25" :height="25"></svg-user>
          <p class="info-title">
            کد ملی :
            <span class="info-value">09253468965</span>
          </p>
        </div>

        <div class="each-user-info col-md-6">
          <svg-user :width="25" :height="25"></svg-user>
          <p class="info-title">
            ایمیل :
            <span class="info-value">ali.ebrahimi@gmail.com</span>
          </p>
        </div>

        <div class="each-user-info col-md-6">
          <svg-user :width="25" :height="25"></svg-user>
          <p class="info-title">
            عضویت خبرنامه :
            <span class="info-value">ندارم</span>
          </p>
        </div>
      </div>
    </template>

    <div class="parent-edit-profile" v-else>
      <div class="parent-edit-img">
        <img
          src="@/assets/images/products/toy1.jpg"
          alt=""
          class="img-fluid user-img"
        />
      </div>

      <div class="parent-edit-user-info">
        <div class="user-info-first-row">
          <div class="parent-input col-md-4">
            <label for="name" class="input-label">نام و نام خانوادگی</label>
            <input type="text" id="name" class="name-family" />
            <svg-user :width="20" :height="20" class="input-icon"></svg-user>
          </div>

          <div class="parent-input col-md-4">
            <label for="name" class="input-label">پست الکترونیکی</label>
            <input type="text" id="name" class="name-family" />
            <svg-user :width="20" :height="20" class="input-icon"></svg-user>
          </div>

          <div class="parent-input col-md-4">
            <label for="name" class="input-label">کد ملی</label>
            <input type="text" id="name" class="name-family" />
            <svg-user :width="20" :height="20" class="input-icon"></svg-user>
          </div>
        </div>

        <div class="user-info-first-row">
          <div class="parent-input col-md-4">
            <label for="name" class="input-label">شماره تلفن همراه</label>
            <input type="text" id="name" class="name-family" />
            <svg-user :width="20" :height="20" class="input-icon"></svg-user>
          </div>

          <div class="parent-input col-md-8">
            <label for="name" class="input-label">آدرس</label>
            <input type="text" id="name" class="name-family address-input" />
            <svg-user :width="20" :height="20" class="input-icon"></svg-user>
          </div>
        </div>

        <div class="parent-submit-btn-changes">
          <button
            class="btn submit-btn-changes"
            @click="$store.commit('set_is_map', true)"
          >
            ثبت تغییرات
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src='./profile-user-info.scss' lang="scss" scoped></style>
<script src='./profile-user-info.js'></script>