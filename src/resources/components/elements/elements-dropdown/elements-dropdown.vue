<template>
  <component
    class="dropdown"
    :is="tag"
    :class="[
      { show: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' },
    ]"
    aria-haspopup="true"
    :aria-expanded="isOpen"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title">
      <a
        class="dropdown-toggle nav-link"
        :class="{ 'no-caret': hideArrow }"
        data-toggle="dropdown"
      >
        <i
          :class="
            icon || [
              { 'fas fa-caret-up': isOpen },
              { 'fas fa-caret-down': !isOpen },
            ]
          "
        ></i>
        <span class="no-icon">{{ title }}</span>
      </a>
    </slot>
    <ul
      class="dropdown-menu"
      ref="menu"
      :class="[
        { 'dropdown-menu-right': position === 'right' },
        { show: isOpen },
        menuClasses,
      ]"
    >
      <slot></slot>
    </ul>
  </component>
</template>

<style src='./elements-dropdown.scss' lang="scss" scoped></style>
<script src='./elements-dropdown.js'></script>
