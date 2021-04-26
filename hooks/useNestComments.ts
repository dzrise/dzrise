const initPush = (arrayName, obj, toPush) => {
    if (obj[arrayName] === undefined) {
        obj[arrayName] = [];
    }
    obj[arrayName].push(toPush);
}

const multiInitPush = (arrayName, obj, toPushArray) => {
    let len;
    len = toPushArray.length;
    if (obj[arrayName] === undefined) {
        obj[arrayName] = [];
    }
    while (len-- > 0) {
        obj[arrayName].push(toPushArray.shift());
    }
}

export const useNestComments = (flat) => {
    let i, len, temp, roots, id, parent, nested, pendingChildOf, flatEl;
    i = 0;
    roots = [];
    temp = {};
    pendingChildOf = {};

    for (i, len = flat.length; i < len; i++) {
        flatEl = flat[i];
        id = flatEl['id'];
        parent = flatEl['parent'];
        temp[id] = flatEl;
        if ( parent === 0) {
            roots.push(flatEl);
        } else {
            if (temp[parent] !== undefined) {
                initPush('child', temp[parent], flatEl);
            } else {
                initPush(parent, pendingChildOf, flatEl);
            }
            delete flatEl['parent'];
        }
        if (pendingChildOf[id] !== undefined) {
            multiInitPush('child', flatEl, pendingChildOf[id]);
        }
    }

    if (roots.length === 1 || roots.length > 1) {
        nested = roots;
    } else {
        nested = {};
    }

    return nested;
}
