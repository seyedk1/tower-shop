<template>
  <div class="send-address-wrapper container-fluid">
    <div class="parent-title-define-address">
      <svg-home-address-title :width="30" :height="30"></svg-home-address-title>
      <h5 class="adress-title">ثبت آدرس برای تحویل</h5>
    </div>

    <div class="parent-tabs-navigation">
      <custom-tab-navigation :customClasses="['custom-width']">
        <custom-tab-content
          v-for="(item, index) in tabs"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :customStyles="['change-height']"
          :tabType="1"
        >
          <template v-if="item.slotName == 'send-by-mail'">
            <div class="send-by-mail-wrapper">
              <div class="each-row">
                <svg-path
                  :width="20"
                  :height="20"
                  :color="'#707070'"
                ></svg-path>
                <h6
                style="cursor:pointer"
                  class="text-title"
                  @click="$router.push({ name: 'select-address' })"
                >
                  آدرس: خراسان رضوی، مشهد، بلوار خیام، خ. خیام 11 آژانس
                  هواپیمایی و مسافرتی سپهرسیر، پلاک ۸۵
                </h6>
              </div>

              <div class="each-row">
                <svg-person
                  :width="20"
                  :height="20"
                  :color="'#707070'"
                ></svg-person>
                <h6 class="text-title">گیرنده: کیوان نوبخت</h6>
              </div>
            </div>
          </template>

          <template v-else-if="item.slotName == 'receive-in-person'">
            <div class="send-by-mail-wrapper">
              <div class="each-row">
                <svg-path
                  :width="20"
                  :height="20"
                  :color="'#707070'"
                ></svg-path>
                <h6 class="text-title">
                  آدرس: خراسان رضوی، مشهد، بلوار خیام، خ. خیام 11 آژانس
                  هواپیمایی و مسافرتی سپهرسیر، پلاک ۸۵
                </h6>
              </div>

              <div class="each-row">
                <svg-person
                  :width="20"
                  :height="20"
                  :color="'#707070'"
                ></svg-person>
                <h6 class="text-title">گیرنده: کیوان نوبخت</h6>
              </div>

              <div class="parent-receive-checkbox">
                <div class="each-row-checkbox">
                  <svg-telephone
                    :width="20"
                    :height="20"
                    :color="'#707070'"
                  ></svg-telephone>
                  <h6 class="text-title">گیرنده: کیوان نوبخت</h6>
                </div>

                <div class="checkbox-row">
                  <input type="checkbox" />
                  خریدم را حضوری تحویل میگیرم
                </div>
              </div>
            </div>
          </template>
        </custom-tab-content>
      </custom-tab-navigation>
    </div>

    <div class="parent-title-define-address mt-5">
      <svg-home-address-title :width="30" :height="30"></svg-home-address-title>
      <h5 class="adress-title">انتخاب زمان ارسال</h5>
    </div>

    <div class="date--order-cost-wrapper mb-5">
      <div class="parent-date">
        <div class="each-col-date" v-for="i in 5" :key="i">
          <h6>دوشنبه 12 اسفند</h6>

          <div class="date-box">
            <p class="date-text">بازه 9-12</p>
            <p class="date-text">25000 تومان</p>
          </div>
        </div>
      </div>

      <cart-order-cost></cart-order-cost>
    </div>
  </div>
</template>


<style src='./cart-send-address.scss' lang="scss" scoped></style>
<script src='./cart-send-address.js'></script>