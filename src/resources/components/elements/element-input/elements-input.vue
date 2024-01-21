<template>
  <input
    :id="id"
    :type="inputType"
    :placeholder="placeholder"
    @input="handleInput"
    :value="value"
    :min="min"
    :max="max"
    :disabled="disabled"
    :required="required"
    :class="[styles != undefined ? styles : null]"
  />
</template>

<style src="./elements-input.scss" lang="scss" scoped></style>
<script src="./elements-input.js"></script>