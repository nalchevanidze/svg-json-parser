import parser from "../SVGParser";
import {readFileSync} from 'fs';

export default function LoadFile(url, callback) {
    let loadedSvg = parser( readFileSync(url, 'utf8') );
    console.log( "SVGPARSER->LoadFile:" , url );
    return loadedSvg;
}