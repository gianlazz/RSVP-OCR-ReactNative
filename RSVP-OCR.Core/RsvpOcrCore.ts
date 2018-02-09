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

export function CheckConnectivity(): boolean
{
    return true;
}

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
export function Parse( data:string ): any
{ 

}
