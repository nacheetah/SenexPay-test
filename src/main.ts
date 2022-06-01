import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
const app = createApp(App);

const useImage = (url: string) => {
  return new URL(`/src/assets/${url}.png`, import.meta.url).href;
};

app.config.globalProperties.$image = useImage;

app.use(router);

app.mount("#app");
