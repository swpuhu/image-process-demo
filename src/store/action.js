
export const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
    CHANGE_TOOL: 2,
    CHANGE_LAYER: 3,
    DELETE_LAYER: 4
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