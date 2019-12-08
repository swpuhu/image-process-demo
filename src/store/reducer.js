import state from './state';
import {ActionType, openFile}from './action'
import DrawingBoard from '../container/DrawingBoard';
import LayerInfo from '../components/LayerInfo';


export default function (state, action) {
    let drawingBoard = new DrawingBoard();
    let layerInfo = new LayerInfo();
    switch(action.type) {
        case ActionType.OPEN_FILE:
            if (!state.layers.length) {
                state.width = action.payload.layer.width;
                state.height = action.payload.layer.height;

            }
            let style = {};
            style.position_x1 = (state.width - action.payload.layer.width) / 2 / state.width;
            style.position_x2 = style.position_x1 + (action.payload.layer.width) / state.width;
            style.position_y1 = (state.height - action.payload.layer.height) / 2 / state.height;
            style.position_y2 = style.position_y1 + (action.payload.layer.height) / state.height;
            action.payload.layer.style = style;
            state.layers.push(action.payload);
            drawingBoard.addCanvas(action.payload);
            layerInfo.addLayer(action.payload);
            break;
        case ActionType.CHANGE_ZOOM:
            state.zoom = action.payload;
            drawingBoard.changeZoom(action.payload);
            break;
        default:
            
    }
}