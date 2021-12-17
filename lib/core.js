const html = ([first, ...strings], ...values) => {
    return values
        .reduce(
            (acc, cur) => {
                return acc.concat(cur, strings.shift());
            },
            [first]
        )
        .filter((x) => {
            return (x && x !== true) || x === 0;
        })
        .join("");
};

export const createStore = (reducer) => {
    let state = reducer();

    const roots = new Map();

    const render = () => {
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    };

    return {
        attach(component, root) {
            roots.set(root, component);
            render();
        },
        connect(selector = (state) => state) {
            return (component) => {
                return (props, ...args) => {
                    return component(
                        Object.assign({}, selector(state), props, ...args)
                    );
                };
            };
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        },
    };
};

export default html;
