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
    viewBox="0 0 480 480"
    style="enable-background: new 0 0 512 512"
    xml:space="preserve"
    class=""
  >
    <g>
      <link type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
      <link type="text/css" rel="stylesheet" id="dark-mode-general-link" />
      <!-- <style lang="en" type="text/css" id="dark-mode-custom-style" />
      <style lang="en" type="text/css" id="dark-mode-native-style" /> -->
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m404.422 188.937v171.563c0 4.418-3.582 8-8 8s-8-3.582-8-8v-171.563c0-4.418 3.582-8 8-8s8 3.582 8 8zm-8 210.063h-323c-4.418 0-8 3.582-8 8s3.582 8 8 8h315v25c0 13.233-10.767 24-24 24h-310c-13.233 0-24-10.767-24-24v-400c0-13.233 10.767-24 24-24h310c6.411 0 12.438 2.496 16.97 7.029 3.124 3.124 8.189 3.125 11.313.001 3.125-3.124 3.125-8.189.001-11.313-7.554-7.556-17.598-11.717-28.284-11.717h-310c-22.056 0-40 17.944-40 40v400c0 22.056 17.944 40 40 40h310c22.056 0 40-17.944 40-40v-33c0-4.418-3.582-8-8-8zm-180 47c4.418 0 8-3.582 8-8s-3.582-8-8-8h-14c-4.418 0-8 3.582-8 8s3.582 8 8 8zm195.344-307.705c0 8.279-6.691 15-15 15-8.293 0-14.999-6.708-14.999-15 0-8.291 6.707-15 14.999-15 8.29 0 15 6.706 15 15zm-51.77-36.77c-3.124 3.125-3.124 8.189 0 11.314 3.125 3.123 8.189 3.123 11.314 0 14.069-14.069 36.84-14.072 50.911-.001 3.124 3.124 8.189 3.126 11.313.001 3.125-3.124 3.125-8.189.001-11.313-20.321-20.324-53.213-20.325-73.539-.001zm103.239-29.698c-36.74-36.738-96.195-36.739-132.937 0-3.124 3.125-3.124 8.19 0 11.314 3.125 3.123 8.189 3.123 11.314 0 30.48-30.484 79.823-30.489 110.308 0 3.126 3.124 8.189 3.123 11.314 0s3.125-8.189.001-11.314z"
        :fill="colorData"
        data-original="#000000"
        style=""
        class=""
      />
    </g>
  </svg>
</template>

<script>
import { svgCommon } from "../../mixins";

export default {
  name: "tablet",

  mixins: [svgCommon],
};
</script>