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

//#region GraphQL Query request examples experiements with w/ regular Fetch npm package for http ajax calles upon GraphQL API endpoint
// fetch(GraphQLApi, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ query: '{ posts { title } }' }),
// })
//   .then(res => res.json())
//   .then(res => console.log(res.data));

// fetch('https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   //'Authorization': 'Bearer YOUR_AUTH_TOKEN'
//   },
//   body: '{"query":"mutation{createScene(text:\"test123\"){id}}"}', 
// })
//   .then(response => response.json())
//   .then(response => console.log("Here's the result of your fetch query to graphql api " + response));
//#endregion

//#region GraphQL Mutation experiment w/ graphql-request npm package
import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9', {
  headers: {
    Authorization: 'Bearer YOUR_AUTH_TOKEN',
  },
});


function setItem() {
  return client.request(`
    {
      createScene(
        text: "testing from my macbook pro via my node cli"
      ) {
        id
      }
    }
    
  `)
}

try {
  setItem();
} catch (error) {
  console.log(error);
}
//#endregion

//#region GraphQL Query request examples and experiments w/ graphql-request npm package
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