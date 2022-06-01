<template>
  <div>
    <NavBar class="navbar" />
    <TopSection />
    <SecondSection />
  </div>

  <!-- <RouterView /> -->
</template>

<script>
import TopSection from "@/views/TopSection.vue";
import NavBar from "@/components/NavBar.vue";
import SecondSection from "./views/SecondSection.vue";

export default {
  components: {
    TopSection,
    NavBar,
    SecondSection,
  },
};
</script>

<style>
@import "@/assets/base.css";

#app {
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 0;

  font-weight: normal;
}

@media (min-width: 0px) {
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
