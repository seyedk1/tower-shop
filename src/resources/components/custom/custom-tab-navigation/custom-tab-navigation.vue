<template>
  <section>
    <div id="tab-navigation">
      <div class="container">
        <div class="row">
          <div
            class="parent-header-tabs"
            :class="[
              { 'parent-tabs': detectTabType == true },
              customClasses != undefined ? customClasses : null,
            ]"
          >
            <ul :class="{ 'ul-content': detectTabType == true }">
              <li
                v-for="(tab, index) in tabs"
                :key="tab.title"
                @click="selectTab(index)"
                class="li-style"
                :class="{
                  'is-selected': index == selectedIndex && tab.tabType == 1,
                  'active-selected': index == selectedIndex && tab.tabType == 2,
                  'li-content': tab.tabType == 2,
                  'first-li':
                    selectedIndex == 0 && index == 0 && tab.tabType == 1,
                }"
              >
                <i class="tab-icon-style" :class="tab.icon"></i>
                {{ tab.title }}
              </li>
            </ul>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style src='./custom-tab-navigation.scss' lang="scss" scoped></style>
<script src='./custom-tab-navigation.js'></script>