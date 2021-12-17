import html from "../lib/core.js";

const Footer = (todos, filter, filters) => {
    return html`
        <footer class="footer">
            <span class="todo-count"
                ><strong
                    >${todos.filter((todo) => todo.isCompleted === false)
                        .length}
                </strong>
                Item left</span
            >
            <ul class="filters">
                ${Object.keys(filters).map(
                    (item) => html` <li>
                        <a
                            onclick="dispatch('switch', '${item}')"
                            class="${filter === item && "selected"}"
                            href="#"
                            >${item[0].toUpperCase() + item.slice(1)}</a
                        >
                    </li>`
                )}
            </ul>
            ${todos.filter(filters.completed).length > 0 &&
            html` <button
                class="clear-completed"
                onclick="dispatch('clearCompleted')"
            >
                Clear completed
            </button>`}
        </footer>
    `;
};

export default Footer;
