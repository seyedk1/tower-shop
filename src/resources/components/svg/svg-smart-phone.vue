<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
    version="1.1"
    :width="widthData"
    :height="heightData"
    :fill="colorData"
    x="0"
    y="0"
    viewBox="0 0 512 512"
    style="enable-background: new 0 0 512 512"
    xml:space="preserve"
    class=""
  >
    <g>
      <link type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
      <link type="text/css" rel="stylesheet" id="dark-mode-general-link" />
      <!-- <style lang="en" type="text/css" id="dark-mode-custom-style" />
      <style lang="en" type="text/css" id="dark-mode-native-style" /> -->
      <g xmlns="http://www.w3.org/2000/svg" id="Smartphone">
        <path
          d="m352 8h-192a40.045 40.045 0 0 0 -40 40v416a40.045 40.045 0 0 0 40 40h192a40.045 40.045 0 0 0 40-40v-416a40.045 40.045 0 0 0 -40-40zm-41.758 16-4.8 24h-98.883l-4.8-24zm65.758 440a24.027 24.027 0 0 1 -24 24h-192a24.027 24.027 0 0 1 -24-24v-416a24.027 24.027 0 0 1 24-24h25.441l6.714 33.569a8 8 0 0 0 7.845 6.431h112a8 8 0 0 0 7.845-6.431l6.714-33.569h25.441a24.027 24.027 0 0 1 24 24z"
          :fill="colorData"
          data-original="#000000"
          style=""
        />
        <path
          d="m208 456h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16z"
          :fill="colorData"
          data-original="#000000"
          style=""
        />
        <path
          d="m240 456h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z"
          :fill="colorData"
          data-original="#000000"
          style=""
        />
      </g>
    </g>
  </svg>
</template>

<script>
import { svgCommon } from "../../mixins";

export default {
  name: "smart-phone",

  mixins: [svgCommon],
};
</script>