const readline = require('readline');
var base64Img = require('base64-img');
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
                console.log(json)
                var textAnnotations = json.responses[0].textAnnotations[0];
                var textContent = textAnnotations.description;
                console.log(textContent);
        });
}

function ParseGcvJson()
{
        //         //Parse the JSON result from OCR
        //         var textAnnotations = response.data.responses[0].textAnnotations[0];
        //         var textContent = textAnnotations.description;
        //         console.log(textContent);
        //         ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w:any => w.description)})
}

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

      rl.question('Give the directory to an image: ', (answer:any) => {
        //var data = base64Img.base64Sync(answer);

        var imageFile = fs.readFileSync(answer);

        // Covert the image data to a Buffer and base64 encode it.
        var encoded = new Buffer(imageFile).toString('base64');

        Parse(encoded);
        //console.log(`Thank you for your valuable feedback: ${answer}`);
      
        rl.close();
      });
