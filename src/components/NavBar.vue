<template>
  <!-- eslint-disable prettier/prettier  -->
  <div class="nav-container relative">
    <ul class="top-nav">
      <li class="logo"><router-link to="/">SenexPay</router-link></li>
      <li class="item mid"><router-link to="/">About us</router-link></li>
      <li class="item mid"><router-link to="/">FAQ</router-link></li>
      <li class="item mid"><router-link to="/">Careers</router-link></li>
      <li class="item"><router-link to="/">Contact us</router-link></li>
      <li class="item mid login"><a href="/">Log in</a></li>
      <li class="item signup"><PrimaryButton>Get started</PrimaryButton></li>
      <li class="item flag ml-4">
        <FlagDropdown />
      </li>
      <li class="hamburger" @click="isVisible = !isVisible"><Hamburger /></li>

      <!-- sidebar -->
      <li class="sidebar absolute top-0 right-0">
        <ul
          class="flex flex-col py-2 px-8 pt-24"
          :class="[isVisible ? 'block' : 'hidden']"
        >
          <li class="mid mb-4" @click="isVisible = !isVisible">
            <router-link to="/">About us</router-link>
          </li>
          <li class="mid mb-4" @click="isVisible = !isVisible">
            <router-link to="/">FAQ</router-link>
          </li>
          <li class="mid mb-4" @click="isVisible = !isVisible">
            <router-link to="/">Careers</router-link>
          </li>
          <li class="mb-16" @click="isVisible = !isVisible">
            <router-link to="/">Contact us</router-link>
          </li>
          <li class="mid login mb-4" @click="isVisible = !isVisible">
            <a href="/">Log in</a>
          </li>
          <li class="signup mb-8" @click="isVisible = !isVisible">
            <PrimaryButton>Get started</PrimaryButton>
          </li>
          <li class="flag mb-4">
            <FlagDropdown />
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
// import { defineComponent } from "vue";
import FlagDropdown from "@/components/FlagDropdown.vue";
import PrimaryButton from "@/components/extras/PrimaryButton.vue";
import Hamburger from "@/components/icons/IconHamburger.vue";

export default {
  components: {
    FlagDropdown,
    PrimaryButton,
    Hamburger,
  },

  data() {
    return {
      isVisible: false,
    };
  },
};
</script>

<style scoped>
@media (min-width: 0px) {
  .nav-container {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #001d46;
  }

  .top-nav {
    max-width: 1280px;
    margin: 0 auto;
    padding: 24px 24px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .top-nav > .item {
    list-style: none;
    display: none;
  }

  .top-nav > .item:nth-child(5) {
    font-weight: bold;
    margin-right: 10%;
  }

  .top-nav > .item > a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }

  .logo {
    margin-right: auto;
    display: block;
  }

  .logo > a {
    font-size: 20px;
    color: white;
    font-weight: 500;
  }

  .login > a {
    font-weight: 700;
  }

  .hamburger {
    display: block;
    z-index: 2000;
  }

  .mid {
    margin-right: 24px;
  }

  .sidebar {
    background: #001d46;
    display: block;
    box-shadow: -5px 0 20px 0px #00132f;
  }
  .sidebar > ul {
    height: 100vh;
    overflow: auto;
    z-index: 900;
  }
}
@media (min-width: 460px) {
}
@media (min-width: 640px) {
  .top-nav {
    margin: 0 auto;
    padding: 24px 64px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  .logo > a {
    font-size: 26px;
  }

  .top-nav > .item {
    list-style: none;
    display: block;
  }

  .hamburger {
    display: none;
  }
  .sidebar {
    display: none;
  }
}
@media (min-width: 1280px) {
  .nav-container {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: #001d46;
  }

  .top-nav {
    padding: 24px 0;
    width: 80%;
    max-width: 1280px;
  }

  .top-nav > .item:nth-child(5) {
    font-weight: bold;
    margin-right: 10%;
  }

  .top-nav > .item > a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
  }

  .logo {
    margin-right: auto;
    font-size: 20px;
    color: white;
  }

  .mid {
    margin-right: 24px;
  }
}
</style>
