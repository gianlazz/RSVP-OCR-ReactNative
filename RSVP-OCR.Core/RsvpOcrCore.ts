// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18

import Validator = require("./Services/InputValidator");
import Web = require("./Services/Web");
import CloudOcr = require("./Services/CloudOcr");
import OfflineOcr = require("./Services/OfflineOcr");

var result;

// Should most of this classes members be overloaded implementations of this routine?
export function Parse( data:string ): any
{ // Accept image directory string or base64 encoded image string

    // Should probably be a case switch statement.
    if (Validator.IsValidBase64(data)) 
    {
        result = (Web.IsConnected) ? CloudOcr.Parse(data) : OfflineOcr.Parse(data);
    } 
    else if (Validator.IsValidImageDirectory(data))
    {
        // Then encode it as Base64
        result = Validator.EncodeToBase64(data);
    } 
    else if (Validator.IsValidImageUrl(data))
    {
        // Download it from the web then encode it as Base64.
        var result = Validator.EncodeToBase64(data);
    }
    else if (Validator.IsValidUrl(data))
    {
        var result = Web.Scraper(data);
    }

    // Given the current connectivity and execution enviroment choose between OCR engine options
    // If connectivity and finances available
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

export function RsvpParse(textToParse: string)
{
    var SplitString = textToParse.split(" ");
    for (let index = 0; index < SplitString.length; index++) {
        const element = textToParse[index];
        console.log(element);            
    }
}

export function CheckConnectivity(): boolean
{
    return true;
}