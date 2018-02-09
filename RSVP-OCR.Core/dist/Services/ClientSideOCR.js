"use strict";
// Uses best usable implementation of clientside OCR Engine
// c++ Emscripten port of Tesseract to javascript as Tesseract.js
// However if it's in ios app then Tesseract.js is not supported
Object.defineProperty(exports, "__esModule", { value: true });
//import Tesseract from ('tesseract.js');
//import Tesseract from 'tesseract.js';
var Tesseract = require("tesseract.js");
function Parse(data) {
    console.log('launching the tesseract');
    data = "/TestBookPage.jpg";
    Tesseract.recognize(data)
        .progress(function (progress) {
        console.log('progress', progress);
    })
        .then(function (tesseractResult) {
        console.log(tesseractResult);
        //this.recognizedText = tesseractResult.text;
        //message: tesseractResult.text,
    });
}
exports.Parse = Parse;
;
