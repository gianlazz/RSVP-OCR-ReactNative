const readline = require('readline');
// Read the file into memory for native base64 encoding
var fs = require('fs');
import fetch from 'node-fetch';

// Google Cloud Vision API KEYS
const cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
const cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;

function Parse(data:string): any
{
        // // post with JSON
        var body = {
                "requests": [
                  {
                    "image": {
                      "content": data
                    },
                    "features": [
                      {
                        "type": "DOCUMENT_TEXT_DETECTION"
                      }
                    ]
                  }
                ]
              }

        fetch(cloudVision, { 
                method: 'POST',
                body:    JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
        })
	.then(res => res.json())
        .then(function(json) 
        {
                var textContent = ParseGcvJson(json);
                console.log(textContent);
        });
}

function ParseGcvJson(json:any):string
{
        //Parse the JSON result from OCR
        var textAnnotations = json.responses[0].textAnnotations[0];
        var textContent = textAnnotations.description;
        return textContent;
}

function GcvJsonToArray(json:any):string[]
{
        //         ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w:any => w.description)})
        throw console.error();
}

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('Give the directory to an image: ', (answer:any) => {

        var imageFile = fs.readFileSync(answer);

        // Covert the image data to a Buffer and base64 encode it.
        var encoded = new Buffer(imageFile).toString('base64');

        Parse(encoded);
      
        rl.close();
      });
