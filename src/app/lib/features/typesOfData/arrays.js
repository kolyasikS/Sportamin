import _ from "lodash";

export function isArraysEqual(firstArr, secondArr) {
    const isEqualLength = (firstArr.length == secondArr.length);
    let isEqualElements = true;
    for (let i = 0; i < firstArr.length; i++) {
        if (typeof firstArr[i] != typeof {}) {
            if (firstArr[i] !== secondArr[i]) {
                isEqualElements = false;
                break;
            }
        } else {
            if (!_.isEqual(firstArr[i], secondArr[i])) {
                isEqualElements = false;
                break;
            }
        }
    }
    return isEqualElements && isEqualLength;
}