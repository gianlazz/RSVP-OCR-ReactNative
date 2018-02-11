const readline = require('readline');
// Read the file into memory for native base64 encoding
var fs = require('fs');
import fetch from 'node-fetch';
import { request } from 'graphql-request';
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

//#region GraphQL const
const GraphQLApi = "https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9";
const query = `query {
        allScenes {
          id
          googlecloudvision
          text
          url
        }
      }`
//#endregion

//#region GraphQL Query request examples experiements with WITH regular Fetch npm package for http ajax calles upon GraphQL API endpoint

//#endregion

//#region GraphQL Query request examples and experiments WITH graphql-request npm package
// Basic request
      request(GraphQLApi, query).then(data => console.log(data));
      
      // Complex request
      request(GraphQLApi, query)
        .then(function(data)
        {
          // For loop to demonstrate iterating through request response json field values          
          for (let index = 0; index < data.allScenes.length; index++) {
            const element = data.allScenes[index].googlecloudvision;
            console.log(element);
          }
                // Example of manually going through response values and indexes                
                console.log(JSON.stringify(data.allScenes[1].googlecloudvision) + " HERE WEVE ACCESSED QUERY FIELD JSON MEMBERS!");
        });
//#endregion

//#region CLI Input for Gcv OCR
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
//#endregion