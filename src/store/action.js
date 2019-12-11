
export const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
    CHANGE_TOOL: 2,
    CHANGE_LAYER: 3,
    DELETE_LAYER: 4,
    SAVE_PICTURE: 5,
    TRANSFORM_LAYER: 6,
    DRAW_LAYER: 7
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

export function drawLayer(layer) {
    return {
        type: ActionType.DRAW_LAYER,
        payload: layer
    }
}


export function savePicture() {
    return {
        type: ActionType.SAVE_PICTURE
    }
}