import * as fs from 'fs';
import {btoa} from "buffer";
export function getBase64FromImage(pathOrigin) {
    return fs.readFileSync(pathOrigin);
}
export function getImageFromBase64(base) {
    let str = base
        .map(bin => String.fromCharCode(bin))
        .join('');
    try {
        return window.btoa(str);
    } catch (e) {
        return btoa(str);
    }
}