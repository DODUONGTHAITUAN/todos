import html from "../lib/core.js";
import TodoItem from "./TodoItem.js";

const Main = (todos, indexEdit, filter, filters) => {
    return html`
        <section class="main">
            <input
                id="toggle-all"
                class="toggle-all"
                type="checkbox"
                onclick="dispatch('toggleAll')"
                ${todos.every((todo) => todo.isCompleted) && "checked"}
            />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todos
                    .filter(filters[filter])
                    .map((todo, index) => TodoItem({ todo, index, indexEdit }))}
            </ul>
        </section>
    `;
};

export default Main;
