
HTMLElement.prototype.insertAfter = function (newElement, targetElement) {
    let parent = targetElement.parentNode;
    if (parent.lastChild === targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

Array.prototype.insertBefore = function (source, target) {
    if (source === target || source === target - 1) return;
    let temp = this[source];
    if (source > target) {
        for (let i = source - 1; i >= target; i--) {
            if (i + 1 > this.length) continue;
            this[i + 1] = this[i];
        }
        this[target] = temp;
    } else {
        for (let i = source + 1; i < target; i++) {
            if (i - 1 < 0) continue;
            this[i - 1] = this[i];
        }
        this[target - 1] = temp;
    }
    
}

Array.prototype.insertAfter = function (source, target) {
    if (source === target || source === target + 1) return;
    let temp = this[source];
    if (source < target) {
        for (let i = source + 1; i <= target; i++) {
            if (i - 1 < 0) continue;
            this[i - 1] = this[i];
        }
        this[target] = temp;
    } else {
        for (let i = source - 1; i > target; i--) {
            if (i + 1 > this.length) continue;
            this[i + 1] = this[i];
        }
        this[target + 1] = temp;
    }
}