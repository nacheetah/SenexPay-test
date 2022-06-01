<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="main-wrapper">
    <div class="main-container mx-auto flex flex-col lg:flex-row items-center">
      <div class="image-section flex flex-col items-start lg:ml-20">
        <div class="flex mb-3">
          <img class="img_one" src="../assets/img_two.png" alt="" />
        </div>
        <div class="flex justify-end">
          <img class="img_two" src="../assets/img_one.png" alt="" />
        </div>
      </div>

      <div class="text-section flex flex-col items-center lg:items-start mb-20">
        <p
          class="
            text-section__preheader
            px-8
            py-2
            rounded-full
            mb-4
            text-center
            lg:text-left
          "
        >
          New
        </p>
        <h1
          class="
            text-section__header
            text-4xl text-white
            font-medium
            mb-4
            text-center
            lg:text-left
          "
        >
          Earn passive income
        </h1>
        <p class="text-section__subheader mb-8 text-center lg:text-left">
          Earn 10 USDT each time you invite a friend to register and perform a
          transaction on SenexPay. There is no limit to what you can earn!
        </p>
        <PrimaryButton>Get started</PrimaryButton>
      </div>
    </div>
  </div>
</template>
<script>
import PrimaryButton from "@/components/extras/PrimaryButton.vue";

export default {
  components: {
    PrimaryButton,
  },
};
</script>
<style scoped>
@media (min-width: 0px) {
  .main-wrapper {
    background: #001d46;
  }

  .main-container {
    padding: 112px 24px 64px;
    width: 100%;
    max-width: 1280px;
  }

  .image-section {
    order: 2;
  }
  .text-section {
    order: 1;
  }

  .text-section__preheader {
    color: #fff;
    background: #00bd42;
  }
  .text-section__header {
    width: 100%;
    line-height: 135%;
  }

  .text-section__subheader {
    width: 100%;
    max-width: 500px;
  }
}
@media (min-width: 460px) {
  img {
    width: 90%;
    max-width: 600px;
  }

  .img_one {
    transform: translateX(10%);
  }
  .img_two {
    transform: translate(-10%, -20%);
  }
}
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  .main-container {
    padding: 112px 24px 64px;
    width: 100%;
    max-width: 1280px;
  }

  .image-section {
    flex: 1 1 50%;
  }

  .image-section {
    order: 1;
  }
  .text-section {
    order: 2;
  }
  img {
    width: 100%;
    max-width: unset;
    height: 250px;
  }
  .img_one {
    transform: translate(20%, 20%);
  }
  .img_two {
    transform: translate(-10%, -20%);
  }
}
@media (min-width: 1280px) {
}
</style>
