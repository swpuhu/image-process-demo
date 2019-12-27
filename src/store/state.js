import EditMode from '../Enum/EditMode';
import Base from '../util/Base';

class State extends Base {
    constructor () {
        super();
        this.layers = [];
        this.width = 0;
        this.height = 0;
        this.zoom = 1;
        this.currentTool = null,
        this.editMode = EditMode.MOVE;
        this.currentLayer = [];
        this.clipboard = {
            type: null,
            content: null
        }
    }
}

export default new State();