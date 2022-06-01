<template>
  <button>
    <slot name="icon"></slot>
    <slot>button</slot>
  </button>
</template>
<script>
// import { defineComponent } from "vue";
export default {};
</script>
<style scoped>
@media (min-width: 0px) {
  button {
    min-width: 200px;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
    border: none;
    color: white;
    white-space: nowrap;
    /* color: #004dc0; */
    background-color: #0063fd;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.4s;
  }

  button:hover {
    background-color: #0052d6;
  }
}
@media (min-width: 460px) {
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
</style>
