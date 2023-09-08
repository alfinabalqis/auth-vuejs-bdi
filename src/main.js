// import "./assets/main.css";
// import "./tailwind.css";

// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import App from "./App.vue";
// import router from "./router";
// import store from "./stores";
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "./plugins/font-awesome";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);
// app.component("font-awesome-icon", FontAwesomeIcon);
// app.use(store);
// app.mount("#app");

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'

createApp(App)
    .use(router)
    .mount('#app')

