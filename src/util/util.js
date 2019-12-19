function generateDOM(t) {
    function createElement(tagName, isSVG, classList, text, title, attributes, props, styles) {
        let doc;
        if (isSVG) {
            doc = document.createElementNS('http://www.w3.org/2000/svg', tagName);
        } else {
            doc = document.createElement(tagName);
        }
        
        if (attributes) {
            for (let key in attributes) {
                doc.setAttribute(key, attributes[key]);
            }
        }

        if (props) {
            for (let prop in props) {
                doc[prop] = props[prop];
            }
        }

        

        if (styles) {
            for (let style in styles) {
                doc.style[style] = styles[style];
            }
        }

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
    let isSVG = false;
    if (t.tagName === 'svg') {
        isSVG = true;
    }
    while (queue.length) {
        let current = queue.shift();
        let dom;
        if (current.template.component) {
            if (current.template.component instanceof HTMLElement) {
                dom = current.template.component;
            } else {
                dom = current.template.component.ref;
            }
            
            if (current.template.ref) {
                refs[current.template.ref] = dom;
            }
        } else {
            dom = createElement(
                current.template.tagName, isSVG, current.template.classList, 
                current.template.text, current.template.title, current.template.attributes, 
                current.template.props, current.template.styles
                );
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


function getSingleton(fn) {
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
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        return canvas.toDataURL();

    }
}());


function deletePostfix(filename) {
    let arr = filename.split('.');
    return arr[0];
}


function downloadBase64(src, title) {
    let binStr = atob(src.split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }

    let blob = new Blob([arr]);

    let a = document.createElement('a');
    a.download = title;
    a.href = URL.createObjectURL(blob);
    a.onclick = function () {
        requestAnimationFrame(function () {
            URL.revokeObjectURL(a.href);
        })
    }
    a.click();
}



function loadImage(src) {
    return new Promise((resolve, reject) => {
        let image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.src = src;
    })
}


/**
 * @description 弧度转角度
 * @param {number} r 弧度 
 */
function r2d(r) {
    return r  / Math.PI * 180;
}

/**
 * @description 角度转弧度
 * @param {number} d 角度
 */
function d2r(d) {
    return d * Math.PI / 180;
}


function throttle(fn, delay = 50) {
    let timer;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            clearTimeout(timer);
            timer = null;
        }, delay);
    }
}


function debounce(fn, delay = 50) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}

function deepCopy(obj) {
    let ret;
    if (isArray(obj)) {
        ret = [];
        for (let item of obj) {
            if (isArray(item) || isObject(item)) {
                ret.push(deepCopy(item));
            } else {
                ret.push(item);
            }
        }
    } else {
        ret = {};
        for (let key in obj) {
            if (isArray(obj[key]) || isObject(obj[key])) {
                ret[key] = deepCopy(obj[key]);
            } else {
                ret[key] = obj[key];
            }
        }
    }

    return ret;
}

export default {
    generateDOM,
    getSingleton,
    generateStamp,
    deletePostfix,
    downloadBase64,
    loadImage,
    r2d,
    d2r,
    throttle,
    debounce,
    deepCopy
}