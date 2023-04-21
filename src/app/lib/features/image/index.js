import * as fs from 'fs';
export function getBase64FromImage(pathOrigin) {
    return fs.readFileSync(pathOrigin);
}
export function getImageFromBase64(base) {
    let str = base
        .map(bin => String.fromCharCode(bin))
        .join('');
    return window.btoa(str);
}