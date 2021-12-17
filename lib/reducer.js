const init = {
    todos: [
        {
            isCompleted: true,
            title: "Learn Javacript",
        },
        {
            isCompleted: false,
            title: "Learn HTML",
        },
    ],
    indexEdit: null,
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.isCompleted,
        completed: (todo) => todo.isCompleted,
    },
};

const actions = {
    add({ todos }, title) {
        if (title !== "") {
            todos.push({ isCompleted: false, title });
        }
    },
    delete({ todos }, index) {
        todos.splice(index, 1);
    },
    toggle({ todos }, index) {
        const isCompleted = todos[index].isCompleted;
        todos[index].isCompleted = !isCompleted;
    },
    clearCompleted(state) {
        state.todos = state.todos.filter((todo) => todo.isCompleted === false);
    },
    toggleAll(state) {
        const isCompleted = state.todos.some(
            (todo) => todo.isCompleted === false
        );
        state.todos = state.todos.map((todo) => {
            return {
                title: todo.title,
                isCompleted: isCompleted,
            };
        });
    },
    edit(state, index) {
        state.indexEdit = index;
    },
    endEdit(state, title, index) {
        if (title !== "") {
            state.todos[index].title = title;
            state.indexEdit = null;
            state.todos[index].isCompleted = false;
        }
    },
    switch(state, filter) {
        state.filter = filter;
        state.todos.filter(state.filters[filter]);
    },
};

const reducer = (state = init, action, args) => {
    actions[action] && actions[action](state, ...args);
    return state;
};

export default reducer;
