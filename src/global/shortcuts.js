import {getKeys, Keys, FunctionKeys, ShortCuts} from '../Enum/Keys';
import store from '../store/index';
import {transformLayer, hideResizeBox} from '../store/action';
import EditMode from '../Enum/EditMode';

/**
 * 
 * @param {MouseEvent} e 
 */
function keydown(e) {
    e.preventDefault();
    e.stopPropagation();

    let group = getKeys(e);
    if (group.group === ShortCuts.transform.group && group.key === ShortCuts.transform.key) {
        store.dispatch(transformLayer());
    } else if (group.group === ShortCuts.hideResizeBox.group && group.key === ShortCuts.hideResizeBox.key) {
        if (store.state.editMode !== EditMode.TRANSFORM) return;
        store.dispatch(hideResizeBox());
    }
    
    
}


document.addEventListener('keydown', keydown);