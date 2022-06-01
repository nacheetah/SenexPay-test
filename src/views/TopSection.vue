<template>
  <!-- eslint-disable prettier/prettier -->
  <div class="main-wrapper">
    <div class="main-container mx-auto flex flex-col xl:flex-row">
      <!-- Hero header, subheader, CTAs section -->
      <div
        class="
          flex flex-col
          items-center
          hero-text
          mb-20
          xl:mb-0 xl:items-start xl:justify-center
        "
      >
        <h1
          class="
            hero-text__header
            text-5xl text-white
            font-bold
            mb-6
            text-center
            xl:text-left
          "
        >
          Buy and Sell <b>Crypto</b> the easier way.
        </h1>
        <p
          class="
            hero-text__subheader
            text-white text-lg
            mb-10
            text-center
            xl:text-left
          "
        >
          SenexPay created the simplest way to buy and sell Bitcoin and USDT in
          minutes
        </p>
        <div class="flex hero-text__CTAgroup">
          <SecondaryButton class="mr-4">
            <template #icon>
              <IconApple class="mr-2" />
            </template>
            <span style="margin-bottom: -4px">App Store </span>
          </SecondaryButton>

          <SecondaryButton>
            <template #icon>
              <IconGoogle class="mr-2" />
            </template>
            <span>Google Play</span>
          </SecondaryButton>
        </div>
      </div>

      <!-- image ansd exchange section -->
      <div
        class="
          hero-image-section
          flex flex-col
          md:flex-row md:items-center md:justify-center
        "
      >
        <div class="flex items-center justify-center mb-8 md:mb-0 md:mr-6">
          <img
            class="hero-image-section__image"
            src="@/assets/phone.png"
            alt=""
          />
        </div>

        <div class="flex flex-col">
          <ExchangeBlock class="mb-8 xl:mb-12" />
          <InviteBlock class="mb-8 xl:mb-12" />

          <div class="flex">
            <div class="flex items-center rounded-xl p-2 pr-4 bg-white mr-2">
              <div class="star-icon-bg p-2 mr-2 rounded-xl">
                <svg
                  class="star-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 22"
                >
                  <path
                    d="m12 1.618 2.219 6.828.112.346H21.874l-5.809 4.22-.294.213.113.346 2.218 6.828-5.808-4.22-.294-.213-.294.213-5.808 4.22 2.218-6.828.113-.346-.294-.213-5.809-4.22H9.67l.112-.346L12 1.618Z"
                    stroke="#fff"
                  />
                </svg>
              </div>
              <p class="text-gray-900 whitespace-nowrap">Easy to use</p>
            </div>

            <div class="flex items-center rounded-xl p-2 pr-4 bg-white">
              <div class="check-icon-bg p-2 mr-2 rounded-xl">
                <svg
                  class="check-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -4 24 22"
                >
                  <path
                    d="m1 7.462 4.615 4.615L16.692 1m-4.615 9.23 1.846 1.847L25 1"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p class="text-gray-900 whitespace-nowrap">Swift payout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SecondaryButton from "@/components/extras/SecondaryButton.vue";
import ExchangeBlock from "@/components/extras/ExchangeBlock.vue";
import InviteBlock from "@/components/extras/InviteBlock.vue";
import IconApple from "@/components/icons/IconApple.vue";
import IconGoogle from "@/components/icons/IconGoogle.vue";

export default {
  components: {
    SecondaryButton,
    ExchangeBlock,
    InviteBlock,
    IconApple,
    IconGoogle,
  },
};
</script>

<style scoped>
@media (min-width: 0px) {
  .main-wrapper {
    background: #001d46;
  }

  .main-container {
    margin-top: 78px;
    padding: 112px 24px 64px;
    min-height: 100vh;
    width: 100%;
    max-width: 1280px;
  }

  .hero-text__header {
    width: 100%;
    line-height: 135%;
  }

  .hero-text__subheader {
    width: 100%;
    max-width: 500px;
  }

  .hero-text__header > b {
    background: linear-gradient(to right, #00abff, #00fdff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .star-icon-bg {
    background: #ff4784;
  }
  .star-icon {
    width: 24px;
  }

  .check-icon-bg {
    background: #00c24a;
  }
  .check-icon {
    width: 24px;
  }
}
@media (min-width: 460px) {
  .hero-text__header {
    width: 90%;
  }

  .hero-text__subheader {
    width: 80%;
    max-width: 500px;
  }
}
@media (min-width: 640px) {
  .main-container {
    margin-top: 78px;
    padding: 112px 48px 64px;
    background: #001d46;
  }

  .hero-text__header {
    width: 70%;
  }

  .hero-text__subheader {
    width: 70%;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
  .main-container {
    margin-top: 0px;
    padding: 200px 0 100px;
    width: 80%;
    background: #001d46;
  }

  .hero-text__header {
    width: 100%;
  }

  .hero-text__subheader {
    width: 80%;
  }

  .hero-image-section__image {
    width: 580px;
  }
}
</style>
