window.dom = {
    find(node) {
        return document.querySelectorAll(node);
    },
    style(node, name, value) {
        if (arguments.length === 2) {
            if (typeof value === "string") {
                node.style[name] = value;
            } else if (name instanceof Object) {
                for (let i in value) {
                    node.style[key] = name[key]
                }
            }
        } else if (arguments.length === 3) {
            node.style[name] = value;
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    }
}