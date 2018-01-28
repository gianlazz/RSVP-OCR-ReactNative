"use strict";
var ClientSideOcr = /** @class */ (function () {
    function ClientSideOcr() {
    }
    // Uses best usable implementation of clientside OCR Engine
    // c++ Emscripten port of Tesseract to javascript as Tesseract.js
    // However if it's in ios app then Tesseract.js is not supported
    ClientSideOcr.Parse = function (resultingBase64) {
        return "";
    };
    return ClientSideOcr;
}());
