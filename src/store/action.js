
export const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
}

export function openFile(layer) {
    return {
        type: ActionType.OPEN_FILE,
        payload: {
            layer: layer,
            steps: []
        }
    }
}

export function changeZoom(zoom) {
    return {
        type: ActionType.CHANGE_ZOOM,
        payload: zoom
    }
}
