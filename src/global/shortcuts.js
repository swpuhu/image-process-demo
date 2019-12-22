import {getKeys, Keys, FunctionKeys, ShortCuts} from '../Enum/Keys';
import store from '../store/index';
import {transformLayer, hideResizeBox, revertTransform, copyLayer, pasteLayer, deleteLayer} from '../store/action';
import EditMode from '../Enum/EditMode';

/**
 * 
 * @param {MouseEvent} e 
 */
function keydown(e) {
    if (e.key !== 'F12' && e.key !== 'F5' && e.target.tagName !== 'INPUT') {
        e.preventDefault();
    }
    e.stopPropagation();

    let group = getKeys(e);
    if (group.group === ShortCuts.transform.group && ShortCuts.transform.key.test(group.key)) {
        store.dispatch(transformLayer());
    } else if (group.group === ShortCuts.hideResizeBox.group && ShortCuts.hideResizeBox.key.test(group.key)) {
        if (store.state.editMode !== EditMode.TRANSFORM) return;
        store.dispatch(hideResizeBox());
    } else if (group.group === ShortCuts.revertTransform.group && ShortCuts.revertTransform.key.test(group.key)) {
        if (store.state.editMode !== EditMode.TRANSFORM) return;
        store.dispatch(revertTransform(store.state.currentLayer[0]));
    } else if (group.group === ShortCuts.copy.group && ShortCuts.copy.key.test(group.key)) {
        if (store.state.editMode !== EditMode.MOVE) return;
        store.dispatch(copyLayer(store.state.currentLayer[0]));
    } else if (group.group === ShortCuts.paste.group && ShortCuts.paste.key.test(group.key)) {
        store.dispatch(pasteLayer());
    } else if (group.group === ShortCuts.delete.group && ShortCuts.delete.key.test(group.key)) {
        store.dispatch(deleteLayer(store.state.currentLayer[0]));
    }
    
    
}


document.addEventListener('keydown', keydown);