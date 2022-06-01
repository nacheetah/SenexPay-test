<template>
  <div class="main-container relative overflow-visible">
    <div class="flex cursor-pointer" @click="isVisible = !isVisible">
      <img
        :src="countries[currentIndex].flagPath"
        width="42"
        height="42"
        alt=""
      />
      <svg
        class="down-icon mr-3 ml-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 13"
      >
        <path
          d="M15.199.994H.799A.802.802 0 0 0 .14 2.25l7.2 10.4c.299.431 1.017.431 1.316 0l7.2-10.4A.799.799 0 0 0 15.2.994Z"
        />
      </svg>
    </div>

    <ul
      class="absolute top-0 right-0 py-2 bg-white rounded-lg"
      :class="[isVisible ? 'block' : 'hidden']"
    >
      <li
        class="flex cursor-pointer px-4 py-2 bg-white hover:bg-gray-200"
        :class="[index == countries.length - 1 ? 'mt-2' : '']"
        v-for="(country, index) in countries"
        :key="index"
        @click="selectCountry(index)"
      >
        <img
          class="mr-2"
          :src="country.flagPath"
          alt=""
          width="24"
          height="24"
        />
        <p class="text-gray-800">{{ country.name }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
      currentIndex: 0,
      countries: [
        {
          name: "Nigeria",
          flagPath: "src/assets/nigeria.png",
        },
        {
          name: "Ghana",
          flagPath: "src/assets/ghana.png",
        },
      ],
    };
  },
  methods: {
    selectCountry(index) {
      this.currentIndex = index;
      this.isVisible = !this.isVisible;
    },
  },
};
</script>
<style scoped>
@media (min-width: 0px) {
  .down-icon {
    width: 12px;
    fill: white;
  }
}
@media (min-width: 460px) {
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  ul {
    min-width: 200px;
  }
  li {
    min-width: max-content;
  }
}
@media (min-width: 1280px) {
}
</style>
