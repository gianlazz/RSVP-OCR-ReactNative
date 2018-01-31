// Uses best usable implementation of clientside OCR Engine
// c++ Emscripten port of Tesseract to javascript as Tesseract.js
// However if it's in ios app then Tesseract.js is not supported

//import Tesseract from ('tesseract.js');
//import Tesseract from 'tesseract.js';
import Tesseract = require('tesseract.js')

export function Parse(data: string): any
{
    console.log('launching the tesseract');
    
    data = "/TestBookPage.jpg";

    Tesseract.recognize(data)
        .progress((progress:any) => {
            console.log('progress', progress);
        })
        .then((tesseractResult:any) => {
            console.log(tesseractResult);
            //this.recognizedText = tesseractResult.text;
              //message: tesseractResult.text,
        });
};