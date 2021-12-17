import html from "./lib/core.js";
import { connect } from "./lib/store.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

const App = ({ todos, indexEdit, filter, filters }) => {
    return html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && Main(todos, indexEdit, filter, filters)}
            ${todos.length > 0 && Footer(todos, filter, filters)}
        </section>
    `;
};

export default connect()(App);
