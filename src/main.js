import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import VueApexCharts from "vue3-apexcharts";

loadFonts();
const app = createApp(App)
app.use(router)
app.use(VueTelInput)
app.use(VueApexCharts);
app.use(store)
app.mount("#app");