import App from "./App.js";
import { attach } from "./lib/store.js";

attach(App, document.getElementById("root"));
