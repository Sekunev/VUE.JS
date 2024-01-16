import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
// buyutFiltre globalde oluşturuldu
app.config.globalProperties.$filters = {
  buyutFiltre(title) {
    return title.toUpperCase();
  },
};

app.mount("#app");
