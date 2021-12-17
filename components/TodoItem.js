import html from "../lib/core.js";

const TodoItem = ({ todo, index, indexEdit }) => {
    return html`
        <li
            class="${todo.isCompleted && "completed"} ${indexEdit === index &&
            "editing"}"
        >
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.isCompleted && "checked"}
                    onclick="dispatch('toggle',
                ${index})"
                />
                <label ondblclick="dispatch('edit', ${index})"
                    >${todo.title}</label
                >
                <button
                    class="destroy"
                    onclick="dispatch('delete', ${index})"
                ></button>
            </div>
            <input
                class="edit"
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('endEdit', event.target.value.trim(), ${index})"
                autofocus
            />
        </li>
    `;
};

export default TodoItem;
