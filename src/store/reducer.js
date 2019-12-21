import {
    ActionType,
    openFile
} from './action'
import EditMode from '../Enum/EditMode';
import DrawingBoard from '../container/DrawingBoard';
import LayerInfo from '../components/LayerInfo';
import TOOLTYPE from '../Enum/ToolType';
import ClipboardType from '../Enum/ClipboardType';
import util from '../util/util';

export default function (state, action) {
    let drawingBoard = new DrawingBoard();
    let layerInfo = new LayerInfo();
    let sourceIndex, targetIndex;
    switch (action.type) {
        case ActionType.NEW_PROJECT:
            state.width = action.payload.width;
            state.height = action.payload.height;
            drawingBoard.init(state.width, state.height);
            break;
        case ActionType.OPEN_FILE:
            // if (!state.layers.length) {
            //     state.width = action.payload.width;
            //     state.height = action.payload.height;
            // }
            state.layers.unshift(action.payload);
            state.currentLayer = [action.payload];
            drawingBoard.addCanvas(action.payload);
            layerInfo.addLayer(action.payload);
            break;
        case ActionType.COPY_LAYER:
            state.clipboard.type = ClipboardType.Layer
            state.clipboard.content = util.deepCopy(action.payload);
            break;
        case ActionType.PASTE_LAYER:
            let content = util.deepCopy(state.clipboard.content);
            state.layers.unshift(content);
            state.currentLayer = [content];
            drawingBoard.addCanvas(content);
            layerInfo.addLayer(content);
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
        case ActionType.REVERT_TRANSFORM:
            drawingBoard.revertTransform(action.payload);
            state.editMode = EditMode.MOVE;
            break;
        case ActionType.UPDATE_STAMP:
            layerInfo.updateStamp(action.payload)
            break;

        default:

    }
}