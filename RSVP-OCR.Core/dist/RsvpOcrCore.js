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
    RsvpOcrCore.OCR = function (data, base64) {
        // Accept image directory string or base64 encoded image string
        // If it's an image directory 
        //     Then encode it as base64
        // Perform Optical Character Recognition
        // Parse the JSON result from OCR
        // If the resulting JSON OCR result string object contains a URL
        //     Then see if the url is valid
        //     Optionally verify with user that the URL is the one that they want
        //     If the user selects a found URL
        //         Pull the primary reading text of that page, stripped of adds or bullshit
        // Return the final string to be visualized
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
RsvpOcrCore.RsvpParse("Hi This Is My First Test");
