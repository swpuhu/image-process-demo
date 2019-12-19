export const FunctionKeys = {
    none: 0b0000,
    ctrl: 0b0001,
    shift: 0b0010,
    alt: 0b0100,
    ctrlShift: 0b0001 | 0b0010,
    ctrlAlt: 0b0001 | 0b0100,
    shiftAlt: 0b0010 | 0b0100
}

export const Keys = {
    "BackSpace": "BackSpace",
    "Delete": "Delete",
    "Insert": "Insert",
    "Escape": "Escape",
    "ArrowDown": "ArrowDown",
    "ArrowLeft": "ArrowLeft",
    "ArrowRight": "ArrowRight",
    "ArrowUp": "ArrowUp",
}

export const ShortCuts = {
    transform: {
        group: FunctionKeys.shift,
        key: /^T$/i
    },
    hideResizeBox: {
        group: FunctionKeys.none,
        key: /^Enter$/i
    },
    revertTransform: {
        group: FunctionKeys.none,
        key: /^Escape$/i
    },
    copy: {
        group: FunctionKeys.ctrl,
        key: /^C$/i
    },
    paste: {
        group: FunctionKeys.ctrl,
        key: /^V$/i
    },
    delete: {
        group: FunctionKeys.none,
        key: /^Delete$/i
    }
}


/**
 * 
 * @param {KeyboardEvent} e 
 */
export function getKeys(e) {
    let functionKeys = FunctionKeys.none;
    if (e.ctrlKey) {
        functionKeys = functionKeys | FunctionKeys.ctrl;
    }
    if (e.shiftKey) {
        functionKeys = functionKeys | FunctionKeys.shift;
    }
    if (e.altKey) {
        functionKeys = functionKeys | FunctionKeys.alt;
    }
    return {
        group: functionKeys,
        key: e.key
    }
}