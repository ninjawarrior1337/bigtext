import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";

import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  render: h => h(App)
}).$mount("#app");
