import {
    ActionType,
    openFile
} from './action'
import EditMode from '../Enum/EditMode';
import DrawingBoard from '../container/DrawingBoard';
import LayerInfo from '../components/LayerInfo';
import TOOLTYPE from '../Enum/ToolType';

export default function (state, action) {
    let drawingBoard = new DrawingBoard();
    let layerInfo = new LayerInfo();
    let sourceIndex, targetIndex;
    switch (action.type) {
        case ActionType.OPEN_FILE:
            if (!state.layers.length) {
                state.width = action.payload.width;
                state.height = action.payload.height;
                drawingBoard.init(state.width, state.height);
            }
            let style = {
                x1: (state.width - action.payload.width) / 2,
                y1: (state.height - action.payload.height) / 2,

                x2: (state.width + action.payload.width) / 2,
                y2: (state.height - action.payload.height) / 2,

                x3: (state.width + action.payload.width) / 2,
                y3: (state.height + action.payload.height) / 2,

                x4: (state.width - action.payload.width) / 2,
                y4: (state.height + action.payload.height) / 2,

                rotate: 0
            };
            // style.position_x1 = 
            // style.position_x2 = 
            // style.position_y1 = 
            // style.position_y2 = 
            // style.rotateCenterX = (style.position_x1 + style.position_x2) / 2;
            // style.rotateCenterY = (style.position_y1 + style.position_y2) / 2;
            style.rotate = 0;

            Object.defineProperties(style, {
                rotateCenterX: {
                    get () {
                        return (style.position_x1 + style.position_x2) / 2;
                    }
                },
                rotateCenterY: {
                    get () {
                        return (style.position_y1 + style.position_y2) / 2;
                    }
                }
            })
            let boundary = {};
            boundary.minX = style.position_x1;
            boundary.minY = style.position_y1;
            boundary.maxX = style.position_x2;
            boundary.maxY = style.position_y2;
            action.payload.style = style;
            action.payload.boundary = boundary;
            state.layers.push(action.payload);
            state.currentLayer = [action.payload];
            drawingBoard.addCanvas(action.payload);
            layerInfo.addLayer(action.payload);
            break;
        case ActionType.CHANGE_ZOOM:
            state.zoom = action.payload;
            drawingBoard.changeZoom(action.payload);
            break;
        case ActionType.CHANGE_TOOL:
            state.currentTool = TOOLTYPE.MOVE;
            break;
        case ActionType.CHANGE_LAYER:
            state.currentLayer = [action.payload];
            layerInfo.changeLayer(action.payload);
            break;
        case ActionType.DELETE_LAYER:
            let index = state.layers.indexOf(action.payload);
            if (index > -1) {
                state.layers.splice(index, 1);
                state.currentLayer = [];
                drawingBoard.deleteCanvas(action.payload);
                layerInfo.deleteLayer(action.payload);
            } else {
                let deletedLayer = state.currentLayer[0];
                index = state.layers.indexOf(deletedLayer);
                if (index > -1) {
                    state.layers.splice(index, 1);
                    state.currentLayer = [];
                    drawingBoard.deleteCanvas(deletedLayer);
                    layerInfo.deleteLayer(deletedLayer);
                }
            }
            break;
        case ActionType.SAVE_PICTURE:
            drawingBoard.savePicture();
            break;
        case ActionType.TRANSFORM_LAYER:
            if (state.editMode === EditMode.TRANSFORM) return;
            drawingBoard.showResizeBox(state.currentLayer[0]);
            state.editMode = EditMode.TRANSFORM;
            break;
        case ActionType.DRAW_LAYER:
            drawingBoard.draw(action.payload);
            break;
        case ActionType.INSERT_BEFORE_LAYER:
            sourceIndex = state.layers.indexOf(action.payload.source);
            targetIndex = state.layers.indexOf(action.payload.target);
            state.layers.insertBefore(sourceIndex, targetIndex);
            drawingBoard.layers.insertBefore(sourceIndex, targetIndex);
            break;
        case ActionType.INSERT_AFTER_LAYER:
            sourceIndex = state.layers.indexOf(action.payload.source);
            targetIndex = state.layers.indexOf(action.payload.target);
            state.layers.insertAfter(sourceIndex, targetIndex);
            drawingBoard.layers.insertAfter(sourceIndex, targetIndex);
            break;
        case ActionType.CHANGE_EDITMODE:
            state.editMode = action.payload;
            break;
        case ActionType.HIDE_RESIZE_BOX:
            state.editMode = EditMode.MOVE;
            drawingBoard.hideResizeBox();
            break;
        default:

    }
}