
export const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
    CHANGE_TOOL: 2,
    CHANGE_LAYER: 3,
    DELETE_LAYER: 4,
    SAVE_PICTURE: 5,
    TRANSFORM_LAYER: 6,
    DRAW_LAYER: 7,
    INSERT_BEFORE_LAYER: 8,
    INSERT_AFTER_LAYER: 9,
    CHANGE_EDITMODE: 10,
    HIDE_RESIZE_BOX: 11,
    REVERT_TRANSFORM: 12,
    COPY_LAYER: 13,
    PASTE_LAYER: 14,
    UPDATE_STAMP: 15,
    NEW_PROJECT: 16,
    UPDATE_BLENDMODE: 17
}
export function newProject({width, height, name}) {
    return {
        type: ActionType.NEW_PROJECT,
        payload: {
            name,
            width,
            height
        }
    }
}


export function openFile(layer) {
    return {
        type: ActionType.OPEN_FILE,
        payload: layer
    }
}

export function changeZoom(zoom) {
    return {
        type: ActionType.CHANGE_ZOOM,
        payload: zoom
    }
}

export function changeTool(toolType) {
    return {
        type: ActionType.CHANGE_TOOL,
        payload: toolType
    }
}

export function changeLayer(layer) {
    return {
        type: ActionType.CHANGE_LAYER,
        payload: layer
    }
}


export function deleteLayer(layer) {
    return {
        type: ActionType.DELETE_LAYER,
        payload: layer
    }
}


export function transformLayer(layer) {
    return {
        type: ActionType.TRANSFORM_LAYER,
        payload: layer
    }
}

export function revertTransform(layer) {
    return {
        type: ActionType.REVERT_TRANSFORM,
        payload: layer
    }
}

export function drawLayer(layer) {
    return {
        type: ActionType.DRAW_LAYER,
        payload: layer
    }
}


export function savePicture(props) {
    return {
        type: ActionType.SAVE_PICTURE,
        payload: props
    }
}


export function insertBeforeLayer(source, target) {
    return {
        type: ActionType.INSERT_BEFORE_LAYER,
        payload: {
            source, 
            target
        }
    }
}


export function insertAfterLayer(source, target) {
    return {
        type: ActionType.INSERT_AFTER_LAYER,
        payload: {
            source, 
            target
        }
    }
}


export function changeEditMode(mode) {
    return {
        type: ActionType.CHANGE_EDITMODE,
        payload: mode
    }
}

export function hideResizeBox() {
    return {
        type: ActionType.HIDE_RESIZE_BOX
    }
}

export function copyLayer(layer) {
    return {
        type: ActionType.COPY_LAYER,
        payload: layer
    }
}

export function pasteLayer() {
    return {
        type: ActionType.PASTE_LAYER
    }
}


export function updateStamp(layer, canvas) {
    return {
        type: ActionType.UPDATE_STAMP,
        payload: {
            layer: layer,
            canvas: canvas
        }
    }
}


export function updateBlendMode(mode) {
    return {
        type: ActionType.UPDATE_BLENDMODE,
        payload: mode
    }
}