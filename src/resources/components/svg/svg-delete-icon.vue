<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:svgjs="http://svgjs.com/svgjs"
    version="1.1"
    :width="widthData"
    :height="heightData"
    :color="colorData"
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
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="m406.62 266.939 11.619-122.401c12.034-3.906 20.761-15.219 20.761-28.538 0-13.275-8.671-24.557-20.644-28.498-4.107-26.861-27.366-47.502-55.356-47.502h-57v-10c0-16.542-13.458-30-30-30h-40c-16.542 0-30 13.458-30 30v10h-57c-27.99 0-51.249 20.641-55.356 47.502-11.973 3.941-20.644 15.223-20.644 28.498 0 13.323 8.732 24.639 20.771 28.542l23.894 251.687c-8.774 5.24-14.665 14.829-14.665 25.771v60c0 16.542 13.458 30 30 30s30-13.458 30-30v-20h186v20c0 16.542 13.458 30 30 30s30-13.458 30-30v-60c0-10.939-5.888-20.525-14.658-25.767l3.768-39.693c.52-5.49-3.53-10.38-9.01-10.9-2.8-.27-5.58.66-7.66 2.54-1.85 1.68-3 3.97-3.24 6.46l-3.58 37.684c-14.473 2.126-25.62 14.622-25.62 29.676v20h-186v-20c0-15.053-11.145-27.548-25.616-29.677l-23.384-246.323h92v30c0 5.522 4.477 10 10 10h80c5.523 0 10-4.478 10-10v-30h92.01l-11.31 119.05c-.25 2.66.55 5.26 2.25 7.32 1.7 2.05 4.1 3.33 6.76 3.58 2.8.27 5.58-.66 7.66-2.54 1.86-1.681 3.01-3.98 3.25-6.471zm-37.62 155.061c0-5.514 4.486-10 10-10s10 4.486 10 10v60c0 5.514-4.486 10-10 10s-10-4.486-10-10zm-226 0v60c0 5.514-4.486 10-10 10s-10-4.486-10-10v-60c0-5.514 4.486-10 10-10s10 4.486 10 10zm83-392c0-5.514 4.486-10 10-10h40c5.514 0 10 4.486 10 10v10h-60zm-77 30h214c16.382 0 30.243 10.999 34.587 26h-283.174c4.344-15.001 18.205-26 34.587-26zm137 106h-60v-20h60zm-183-40c-5.514 0-10-4.486-10-10s4.486-10 10-10h306c5.514 0 10 4.486 10 10s-4.486 10-10 10z"
          :fill="colorData"
          data-original="#000000"
          style=""
          class=""
        />
        <circle
          cx="392.405"
          cy="310.79"
          r="10"
          :fill="colorData"
          data-original="#000000"
          style=""
          class=""
        />
      </g>
    </g>
  </svg>
</template>

<script>
import { svgCommon } from "../../mixins";

export default {
  name: "delete-icon",

  mixins: [svgCommon],
};
</script>