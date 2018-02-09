// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18

import Validator = require("./Services/InputValidator");
import Web = require("./Services/Web");
import CloudOcr = require("./Services/CloudOcr");
import ClientSideOcr = require("./Services/ClientSideOcr");

var result:any;

/* Accepts the following forms of input:
 * 1. Local image directory string
 * 2. Base64 encoded image string
 * 3. URL Directory to an online image
 * 4. URL directory to a webpage for which to pull the primary reading material
 * 5. Any resulting image(s) containing valid URLS can then have the primary reading content pulled from said URL
 *
 * Returns:
 * 1. Full parsed string of text 
 * 2. Organization of paragraphs
 * 3. X/Y coordinates for bounding box points around each word
 * 4. (Optionally) all URLs found
 * 5. (Optionally) URL Ping verification details
 * 6. (Optionally) Invalid URL and autocorrection suggested URL
 */

// Should I just overload implementations of this routine?
export function Parse( data:string ): Snapshot
{ 
    // if (Validator.IsValidBase64(data)) 
    // {
    //     // Given the current connectivity and execution enviroment choose between OCR engine options
    //     // If connectivity and finances available
    //     result = (Web.IsConnected) ? CloudOcr.Parse(data) : OfflineOcr.Parse(data);
    // } 
    // else if (Validator.IsValidImageDirectory(data))
    // {
    //     // Then encode it as Base64
    //     result = Validator.EncodeToBase64(data);
    // } 
    // else if (Validator.IsValidImageUrl(data))
    // {
    //     // Ping the URL(s) to see if its valid
    //     // Optionally if multiple URLS are found, verify with user which they want?
    //     // If the user selects a URL Pull the primary reading text of that page, stripped of adds or bullshit
    //     // Download it from the web then encode it as Base64.
    //     result = Validator.EncodeToBase64(data);
    // }
    // else if (Validator.IsValidUrl(data))
    // {
    //     result = Web.Scraper(data);
    // }

    result = ClientSideOcr.Parse(data);

    return result;
    // If the resulting JSON OCR result string object contains a URL    
    // Return the final string(or whatever type of custom object) to be visualized

    // I would most likely eventually like to map the result to an object that
    // I could persist in a database. That would include all of the text values from the
    // JSON result including their x & y bounding box coordinates so that they could be
    // re-drawn.
}

/* Accepts the following forms of input:
 *
 * Returns:
 * 
 */

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

console.log("hi")
console.log("hi again")
console.log("hi again and again")
console.log("hi again")