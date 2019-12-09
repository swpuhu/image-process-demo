import state from './state';
import {ActionType, openFile}from './action'
import DrawingBoard from '../container/DrawingBoard';
import LayerInfo from '../components/LayerInfo';
import TOOLTYPE from '../Enum/ToolType';

export default function (state, action) {
    let drawingBoard = new DrawingBoard();
    let layerInfo = new LayerInfo();
    switch(action.type) {
        case ActionType.OPEN_FILE:
            if (!state.layers.length) {
                state.width = action.payload.width;
                state.height = action.payload.height;

            }
            let style = {};
            style.position_x1 = (state.width - action.payload.width) / 2 / state.width;
            style.position_x2 = style.position_x1 + (action.payload.width) / state.width;
            style.position_y1 = (state.height - action.payload.height) / 2 / state.height;
            style.position_y2 = style.position_y1 + (action.payload.height) / state.height;
            action.payload.style = style;
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
        default:
            
    }
}