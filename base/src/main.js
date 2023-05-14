import {createApp} from "vue"
import "./style.css"
import App from "./App.vue"
import RouterViews from "./components/RouterView.vue"
import RouterLink from "./components/RouterLink.vue"

const app = createApp(App)
app.component("RouterViews", RouterViews)
app.component("RouterLink", RouterLink)
app.mount("#app")
