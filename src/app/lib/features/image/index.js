import * as fs from 'fs';
import {btoa} from "buffer";
export function getBase64FromImage(pathOrigin) {
    return fs.readFileSync(pathOrigin);
}
export function getImageFromBase64(base) {
    let str = base
        .map(bin => String.fromCharCode(bin))
        .join('');
    if (typeof window !== 'undefined') {
        return window.btoa(str);
    } else {
        return btoa(str);
    }
}