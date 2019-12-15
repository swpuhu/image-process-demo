
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
    CHANGE_EDITMODE: 10
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