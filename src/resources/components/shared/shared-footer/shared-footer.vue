<template>
  <footer id="footer">
    <div class="container-fluid">
      <!--start up-footer-content-->
      <div class="up-footer-content">
        <div class="col-lg-4 each-colomn">
          <div class="logo--about-shop-wrapper">
            <!--start logo-wrapper-->
            <div class="logo-wrapper">
              <img
                src="../../../../assets/images/logo-mehr.png"
                alt="logo"
                class="img-fluid"
              />
            </div>
            <!--end logo-wrapper-->

            <!--start about-shop-wrapper-->
            <div class="about-shop-wrapper">
              <p>
                پارک بزرگ کوهسنگی، پس از حرم مطــهر رضوی از جایگاه بســیار با
                اهمیتی در شهــر مقدس مشهـــد برخوردار است. جایگاه تاریخی فرهنگی
                و طبیعت شاداب و موسع کوهسنگی که با خاطراتی برای مردم و گردشگران
                پیوند خورده، اهمیت بازدید مجاوران و زائران از این مکان را در طول
                سالیان متمادی ارتقا داده است. بی تردید مشهورترین و زیباترین
                گردشگاه شهر مشهد در دامنه، دو کوه پیوسته به هم به نام (کوهسنگی)
                واقع شده است.
              </p>
            </div>
            <!--end about-shop-wrapper-->
          </div>

          <div class="media-wrapper">
            <div class="parent-media-title">
              <h5>ما را در شبکه های اجتماعی دنبال کنید</h5>
            </div>

            <div class="medias">
              <svg-facebook
                :width="25"
                :height="25"
                :color="'white'"
              ></svg-facebook>
              <svg-google
                :width="30"
                :height="30"
                :color="'white'"
              ></svg-google>
              <svg-linkedin
                :width="25"
                :height="25"
                :color="'white'"
              ></svg-linkedin>
              <svg-telegram
                :width="25"
                :height="25"
                :color="'white'"
              ></svg-telegram>
              <svg-instagram
                :width="25"
                :height="25"
                :color="'white'"
              ></svg-instagram>
            </div>
          </div>
        </div>

        <div class="col-lg-3 each-colomn">
          <div class="title-wrapper">
            <h4>آدرس ما</h4>
          </div>

          <div class="address-info-wrapper">
            <div class="row-wrapper">
              <svg-location
                :width="browserWidth <= 1145 ? 25 : 35"
                :height="browserWidth <= 1145 ? 25 : 35"
                :color="'#007174'"
              ></svg-location>
              <p>
                ایران، مشهد مقدس، خیابان کوهسنگی کوهسنگی 29، بوستان بزگ کوهسنگی
              </p>
            </div>
            <!--end address-wrapper-->

            <!--start phone-wrapper-->
            <div class="row-wrapper">
              <svg-phone
                :width="20"
                :height="20"
                :color="'#007174'"
              ></svg-phone>
              <p>{{ "0513844529" | persianNumber }}</p>
            </div>
            <!--end phone-wrapper-->

            <!--start fax-wrapper-->
            <div class="row-wrapper">
              <svg-fax :width="20" :height="20" :color="'#007174'"></svg-fax>
              <p>{{ "38426205" | persianNumber }}</p>
            </div>
            <!--end fax-wrapper-->

            <!--start clock-wrapper-->
            <div class="row-wrapper">
              <svg-fax :width="20" :height="20" :color="'#007174'"></svg-fax>
              <p>{{ "8:00-20:00" | persianNumber }}</p>
            </div>
            <!--end clock-wrapper-->

            <!--start mail-wrapper-->
            <div class="row-wrapper">
              <svg-mail :width="20" :height="20" :color="'#007174'"></svg-mail>
              <p>info@mehr-Kouhsangi.com</p>
            </div>
            <!--end mail-wrapper-->
          </div>
        </div>

        <div class="col-lg-3 each-colomn">
          <div class="title-wrapper">
            <h4>خبرنامه</h4>
          </div>

          <div class="newsletters--email-wrapper">
            <div class="newsletters-wrapper">
              <p>
                عضو خبرنامه ما شوید و از همه تخفیفات و خبرها زودتر از دیگران با
                خبر شوید
              </p>
            </div>

            <div class="email-wrapper">
              <div class="input-layout-inner">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  class="email-input"
                />
                <svg-mail
                  :width="20"
                  :height="20"
                  :color="'white'"
                  class="email-icon"
                ></svg-mail>
                <button class="btn register-btn">ثبت نام</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--end up-footer-content-->
    </div>

    <!--start down-footer-content-->
    <div class="down-footer-content">
      <h5>
        استفاده از مطالب فروشگاه اینترنتی مهرکوهسنگی فقط برای مقاصد غیرتجاری و
        با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت فراسوشرق
        (فروشگاه آنلاین مهرکوهسنگی) می‌باشد.
      </h5>
      <!--end down-footer-content-->
    </div>
  </footer>
</template>

<style src='./shared-footer.scss' lang="scss" scoped></style>
<script src='./shared-footer.js'></script>