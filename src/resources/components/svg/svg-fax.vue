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
      <link type="text/css" rel="stylesheet" id="dark-mode-general-link" />
      <link type="text/css" rel="stylesheet" id="dark-mode-custom-link" />
      <!-- <style lang="en" type="text/css" id="dark-mode-custom-style" /> -->
      <g xmlns="http://www.w3.org/2000/svg">
        <path
          d="m467 211h-76v-105c0-41.355-33.645-75-75-75h-180c-8.284 0-15 6.716-15 15v165h-76c-24.813 0-45 20.187-45 45v90c0 24.813 20.187 45 45 45h76v75c0 8.284 6.716 15 15 15h240c8.284 0 15-6.716 15-15v-75h76c24.813 0 45-20.187 45-45v-90c0-24.813-20.187-45-45-45zm-108.58-120h-27.42v-27.42c12.764 4.527 22.893 14.656 27.42 27.42zm-207.42-30h150v45c0 8.284 6.716 15 15 15h45v90h-210zm210 390h-210v-90h210zm121-105c0 8.271-6.729 15-15 15h-76v-15c0-8.284-6.716-15-15-15h-240c-8.284 0-15 6.716-15 15v15h-76c-8.271 0-15-6.729-15-15v-90c0-8.271 6.729-15 15-15h422c8.271 0 15 6.729 15 15z"
          fill="#007174"
          data-original="#000000"
          style=""
        />
        <circle
          cx="376"
          cy="286"
          r="15"
          fill="#007174"
          data-original="#000000"
          style=""
        />
        <circle
          cx="316"
          cy="286"
          r="15"
          fill="#007174"
          data-original="#000000"
          style=""
        />
        <path
          d="m316 391h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
          fill="#007174"
          data-original="#000000"
          style=""
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "fax",

  props: {
    height: Number,
    width: Number,
    color: String,
  },

  data() {
    return {
      heightData: this.height,
      widthData: this.width,
      colorData: this.color,
    };
  },
};
</script>
