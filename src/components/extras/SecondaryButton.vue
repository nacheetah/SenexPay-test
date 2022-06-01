<template>
  <button class="flex items-center justify-center">
    <!-- :style="{ backgroundColor: bgColor, color: color }" -->
    <slot name="icon" :message="test"></slot>
    <slot>button</slot>
  </button>
</template>
<script>
// import { defineComponent } from "vue";
export default {
  data() {
    return {
      test: {
        make: "Fuck",
      },
    };
  },
  props: {
    bgColor: {
      type: String,
      default: "white",
    },
    color: {
      type: String,
      default: "#004dc0e8",
    },
  },
};
</script>
<style scoped>
@media (min-width: 0px) {
  button {
    min-width: 120px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    white-space: nowrap;
    background: white;
    color: #004dc0;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.4s;
  }

  button:hover {
    color: white;
    background: linear-gradient(to left, #5237e0, #1265fb);
  }

  button:hover :slotted(svg) {
    fill: white;
  }
}
@media (min-width: 460px) {
}
@media (min-width: 640px) {
  button {
    min-width: 200px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    white-space: nowrap;
    /* color: #004dc0; */
    background-color: white;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.4s;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
</style>
