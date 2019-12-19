import EditMode from '../Enum/EditMode';


export default {
    layers: [],
    width: 0,
    height: 0,
    zoom: 1,
    currentTool: null,
    editMode: EditMode.MOVE,
    currentLayer: [],
    clipboard: {
        type: null,
        content: null
    }
}