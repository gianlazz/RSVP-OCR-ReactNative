// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18

import axios from 'axios';
//import m = require("axios");

// API KEYS
const cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
// Endpoints
const cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;
var textContent:string;
var ocrArray:Array<String>;
var ocrString:string;


class RsvpOcrCore {

    constructor()
    {
        //constructor most likely wont be needed as multiple instances of this class are not likely to be called
    }

    static HelloWorld() 
    {
        console.log("hello world");
    }

    static OCR(data:string, base64:boolean )
    {
        axios.post(cloudVision, {
            requests: 
            [{
                image: {
                content: data
                },
                features: [{
                //Or 'TEXT_DETECTION'
                type: 'DOCUMENT_TEXT_DETECTION',
                maxResults: 1
                }]
            }]
        }).then(function (response) {
        console.log(response);
            var textAnnotations = response.data.responses[0].textAnnotations[0];
            var textContent = textAnnotations.description;
            textContent
            console.log(textContent);
            ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w => w.description)})
            ocrString = textContent;
                }.bind(this)).catch(function (error) {
                    console.log(error, 'error');
                }).catch(err => console.error(err));
                
        static RsvpParseString(textToParse: string) 
        {
            var SplitString = textToParse.split(" ");
            for (let index = 0; index < SplitString.length; index++) {
                const element = textToParse[index];
                console.log(element);            
            }
        }

    }
RsvpOcrCore.RsvpParseString("Hi This Is My First Test");