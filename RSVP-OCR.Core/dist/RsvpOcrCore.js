"use strict";
// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = require("./Services/InputValidator");
var Web = require("./Services/Web");
var CloudOcr = require("./Services/CloudOcr");
var OfflineOcr = require("./Services/OfflineOcr");
var result;
// Should most of this classes members be overloaded implementations of this routine?
function Parse(data) {
    // Should probably be a case switch statement.
    if (Validator.IsValidBase64(data)) {
        // Given the current connectivity and execution enviroment choose between OCR engine options
        // If connectivity and finances available
        result = (Web.IsConnected) ? CloudOcr.Parse(data) : OfflineOcr.Parse(data);
    }
    else if (Validator.IsValidImageDirectory(data)) {
        // Then encode it as Base64
        result = Validator.EncodeToBase64(data);
    }
    else if (Validator.IsValidImageUrl(data)) {
        // Download it from the web then encode it as Base64.
        var result = Validator.EncodeToBase64(data);
    }
    else if (Validator.IsValidUrl(data)) {
        var result = Web.Scraper(data);
    }
    // if (CheckConnectivity())
    // {
    // perform OCR through the cloud
    //     var OcrResult = CloudOcr.Parse(data);
    // } else
    // {    
    // perform most performant available option for clientside OCR
    //     var OcrResult = ClientSideOcr.Parse(data); 
    // }
    // If the resulting JSON OCR result string object contains a URL    
    // if (OcrResult.ContainsUrl) 
    // {
    // Ping the URL(s) to see if its valid
    // Optionally verify with user which URL they want?
    // If the user selects a URL Pull the primary reading text of that page, stripped of adds or bullshit
    // Return the final string to be visualized
    // }
}
exports.Parse = Parse;
function RsvpParse(textToParse) {
    var SplitString = textToParse.split(" ");
    for (var index = 0; index < SplitString.length; index++) {
        var element = textToParse[index];
        console.log(element);
    }
}
exports.RsvpParse = RsvpParse;
function CheckConnectivity() {
    return true;
}
exports.CheckConnectivity = CheckConnectivity;
