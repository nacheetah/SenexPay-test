<template>
  <div class="px-6 py-4 ExchangeBlock__main">
    <div class="flex mb-4">
      <p class="mr-2 exchange">Exchange</p>
      <svg
        class="exchange-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 53 37"
      >
        <path
          d="M53 24v5.143a.823.823 0 0 1-.254.602.823.823 0 0 1-.603.255l-40.938.09v5.142a.824.824 0 0 1-.254.603.823.823 0 0 1-.603.254c-.214 0-.428-.089-.643-.268L1.161 27.25a.802.802 0 0 1-.241-.59c0-.25.08-.455.24-.615l8.572-8.572a.834.834 0 0 1 .616-.24c.232 0 .433.084.603.254.17.17.254.37.254.602v5.143l40.938-.09c.232 0 .433.086.603.255.17.17.254.37.254.603Zm0-14.571c0 .25-.08.455-.24.616l-8.572 8.571a.834.834 0 0 1-.616.241.824.824 0 0 1-.603-.254.824.824 0 0 1-.255-.603v-5.143l-40.857.232a.824.824 0 0 1-.602-.254.824.824 0 0 1-.255-.603V7.09c0-.232.085-.433.255-.602.17-.17.37-.255.602-.255L42.715 6V.857c0-.25.08-.455.24-.616A.834.834 0 0 1 43.573 0c.214 0 .428.09.642.268l8.545 8.545c.16.16.241.366.241.616Z"
        />
      </svg>
    </div>

    <div class="flex mb-3">
      <div class="flex mr-auto">
        <svg
          class="bitcoin-icon mr-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.76 9.935A7.998 7.998 0 1 1 9.936.24c4.282 1.062 6.895 5.407 5.826 9.695Z"
            fill="url(#a)"
          />
          <path
            d="M11.838 7.016c.157-1.049-.655-1.616-1.776-1.993l.365-1.425-.881-.216-.353 1.389a23.951 23.951 0 0 0-.712-.16l.353-1.395L7.952 3l-.358 1.419a40.282 40.282 0 0 1-.567-.13v-.006l-1.222-.296-.233.925s.655.148.643.155c.358.086.421.32.409.505l-.416 1.623c.025.006.057.012.095.03a.533.533 0 0 1-.095-.024l-.58 2.27c-.043.105-.157.266-.402.204.006.012-.642-.154-.642-.154l-.441.993 1.152.284c.214.055.422.104.63.16l-.365 1.437.881.216.365-1.425c.24.062.479.124.706.18l-.36 1.418.882.216.366-1.437c1.51.277 2.644.166 3.117-1.173.384-1.073-.02-1.696-.813-2.103.586-.13 1.02-.506 1.134-1.271ZM9.816 9.792c-.27 1.074-2.122.494-2.72.346l.485-1.907c.598.148 2.525.438 2.235 1.561Zm.277-2.794c-.251.98-1.788.48-2.285.357l.44-1.727c.498.123 2.104.352 1.845 1.37Z"
            fill="#fff"
          />
          <defs>
            <linearGradient
              id="a"
              x1="7.996"
              y1="-.004"
              x2="7.996"
              y2="15.998"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F9AA4B" />
              <stop offset="1" stop-color="#F7931A" />
            </linearGradient>
          </defs>
        </svg>
        <p class="bitcoin">Bitcoin</p>
      </div>

      <div class="flex">
        <p class="mr-3">23,079,836</p>
        <svg
          class="down-icon mr-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 13"
        >
          <path
            d="M15.199.994H.799A.802.802 0 0 0 .14 2.25l7.2 10.4c.299.431 1.017.431 1.316 0l7.2-10.4A.799.799 0 0 0 15.2.994Z"
          />
        </svg>
        <p>-2.08%</p>
      </div>
    </div>

    <div class="flex mb-4">
      <div class="flex mr-auto">
        <svg
          class="icon usdt-icon mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 24"
        >
          <path
            d="M0 9.29 13 24 26 9.29 22.849 0H3.152L0 9.29Z"
            fill="#2CB59B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.622 5.608v2.366c4.393.203 7.694 1.074 7.694 2.117s-3.301 1.914-7.694 2.116v7.584h-3.913v-7.582C6.309 12.006 3 11.135 3 10.091c0-1.044 3.309-1.916 7.709-2.118V5.608H5.295V2h14.741v3.608h-5.414Zm0 5.954v.002c3.88-.172 6.775-.847 6.775-1.657 0-.808-2.895-1.485-6.775-1.658v2.643c-.113.01-.718.06-1.925.06a29.55 29.55 0 0 1-1.988-.061V8.247c-3.888.174-6.79.851-6.79 1.66 0 .81 2.902 1.487 6.79 1.658v-.003c.25.012.961.042 1.971.042 1.265 0 1.832-.034 1.942-.042Z"
            fill="#fff"
          />
        </svg>
        <p class="bitcoin">USDT</p>
      </div>

      <div class="flex">
        <p class="mr-3">23,079,836</p>
        <svg
          class="icon up-icon mr-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 12"
        >
          <path
            d="M.8 11.979h14.4a.8.8 0 0 0 .66-1.255L8.66.324c-.3-.432-1.018-.432-1.317 0l-7.2 10.4A.8.8 0 0 0 .8 11.979Z"
            fill="#4AD758"
          />
        </svg>
        <p>-2.08%</p>
      </div>
    </div>

    <button class="w-full py-3 rounded-lg">Buy/Sell</button>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@media (min-width: 0px) {
  .ExchangeBlock__main {
    width: 100%;
    background: #161d2c;
    border-radius: 18px;
    border: 2px solid #fff;
  }

  p {
    font-size: 14px;
  }

  button {
    background: #003789;
    color: #fff;
    font-size: 14px;
  }

  .exchange {
    color: #c7c7c7;
  }
  .exchange-icon {
    width: 16px;
    fill: #c7c7c7;
  }

  .bitcoin-icon {
    width: 16px;
  }

  .down-icon {
    fill: #ff4848;
    width: 16px;
  }

  .up-icon {
    fill: #ff4848;
    width: 16px;
  }

  .usdt-icon {
    width: 16px;
  }
}
@media (min-width: 460px) {
}
@media (min-width: 640px) {
  .ExchangeBlock__main {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
</style>
