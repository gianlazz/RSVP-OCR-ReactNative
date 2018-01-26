"use strict";
// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18
Object.defineProperty(exports, "__esModule", { value: true });
//import m = require("axios");
// API KEYS
var cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
// Endpoints
var cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;
var textContent;
var ocrArray;
var ocrString;
var RsvpOcrCore = /** @class */ (function () {
    function RsvpOcrCore() {
        //constructor most likely wont be needed as multiple instances of this class are not likely to be called
    }
    RsvpOcrCore.HelloWorld = function () {
        console.log("hello world");
    };
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
        // axios.post(cloudVision, {
        //     requests: 
        //     [{
        //         image: {
        //         content: data
        //         },
        //         features: [{
        //         //Or 'TEXT_DETECTION'
        //         type: 'DOCUMENT_TEXT_DETECTION',
        //         maxResults: 1
        //         }]
        //     }]
        // }).then(function (response) {
        // console.log(response);
        //     var textAnnotations = response.data.responses[0].textAnnotations[0];
        //     var textContent = textAnnotations.description;
        //     textContent
        //     console.log(textContent);
        //     ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w => w.description)})
        //     ocrString = textContent;
        //         }.bind(this)).catch(function (error) {
        //             console.log(error, 'error');
        //         }).catch(err => console.error(err));
    };
    RsvpOcrCore.RsvpParseString = function (textToParse) {
        var SplitString = textToParse.split(" ");
        for (var index = 0; index < SplitString.length; index++) {
            var element = textToParse[index];
            console.log(element);
        }
    };
    return RsvpOcrCore;
}());
RsvpOcrCore.RsvpParseString("Hi This Is My First Test");
