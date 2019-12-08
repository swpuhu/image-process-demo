function generateDOM(t) {
    function createElement(tagName, classList, text, title) {
        let doc = document.createElement(tagName);
        if (classList) {

            if (typeof classList === 'string') {
                doc.classList.add(classList);
            } else {
                for (let className of classList) {
                    doc.classList.add(className);
                }
            }

        }
        if (text) {
            doc.textContent = text;
        }

        
        if (title) {
            doc.title = title;
        }

        return doc;
    }
    let queue = [];
    let parentDOM;
    queue.push({
        parentDOM: null,
        template: t
    });
    let refs = {};
    while (queue.length) {
        let current = queue.shift();
        let dom;
        if (current.template.component) {
            dom = current.template.component.ref;
        } else {
            dom = createElement(current.template.tagName, current.template.classList, current.template.text, current.template.title);
            if (current.template.ref) {
                refs[current.template.ref] = dom;
            }
        }

        if (current.parentDOM) {
            current.parentDOM.appendChild(dom);
        } else {
            parentDOM = dom;
        }
        if (current.template.children) {
            for (let child of current.template.children) {
                queue.push({
                    parentDOM: dom,
                    template: child
                })
            }
        }

    }
    refs = {
        ...refs,
        root: parentDOM
    }
    return refs;
}


function getSingleton (fn) {
    let ret;
    return function () {
        if (ret) {
            return ret;
        }
        return ret = new fn(arguments);
    }
}


const generateStamp = (function () {
    let canvas = document.createElement('canvas');
    let cacheWidth, cacheHeight;
    let context = canvas.getContext('2d');
    return function (image, width = 80, height = 50) {
        if (width !== cacheWidth || height !== cacheHeight) {
            cacheWidth = width;
            cacheHeight = height;
            canvas.width = cacheWidth;
            canvas.height = cacheHeight;
        }
        context.drawImage(image, 0, 0, width, height);
        return canvas.toDataURL();
        
    }
}());


function deletePostfix(filename) {
    let arr = filename.split('.');
    return arr[0];
}

export default {
    generateDOM,
    getSingleton,
    generateStamp,
    deletePostfix
}