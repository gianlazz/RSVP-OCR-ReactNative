"use strict";
// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18
//import { ClientSideOcr } from "./Services/ClientSideOcr";
var RsvpOcrCore = /** @class */ (function () {
    function RsvpOcrCore() {
    }
    RsvpOcrCore.CheckConnectivity = function () {
        return true;
    };
    RsvpOcrCore.OCR = function (data) {
        var isBase64 = Base64Encoder.IsValidBase64(data); // Returns boolean
        // Accept image directory string or base64 encoded image string
        if (isBase64 != true) {
            // If it's an image directory 
            // Then encode it as base64
            var data = Base64Encoder.EncodeToBase64(data);
        }
        // Given the current connectivity and execution enviroment choose between OCR engine options
        // If connectivity and finances available
        if (this.CheckConnectivity()) {
            // perform OCR through the cloud
            var OcrResult = CloudOcr.Parse(data);
        }
        else {
            // perform most performant available option for clientside OCR
            var OcrResult = ClientSideOcr.Parse(data);
        }
        // If the resulting JSON OCR result string object contains a URL    
        //if (OcrResult.ContainsUrl) 
        //{
        // Ping the URL(s) to see if its valid
        //     
        // Optionally verify with user which URL they want?
        // 
        // If the user selects a URL Pull the primary reading text of that page, stripped of adds or bullshit
        //
        // Return the final string to be visualized
        //}
        return "Resulting string of text pulled from the image";
    };
    RsvpOcrCore.RsvpParse = function (textToParse) {
        var SplitString = textToParse.split(" ");
        for (var index = 0; index < SplitString.length; index++) {
            var element = textToParse[index];
            console.log(element);
        }
    };
    return RsvpOcrCore;
}());
//RsvpOcrCore.RsvpParse("Hi This Is My First Test"); 
