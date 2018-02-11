"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require('readline');
// Read the file into memory for native base64 encoding
var fs = require('fs');
var node_fetch_1 = require("node-fetch");
var graphql_request_1 = require("graphql-request");
// Google Cloud Vision API KEYS
var cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
var cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;
function Parse(data) {
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
    };
    node_fetch_1.default(cloudVision, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(function (res) { return res.json(); })
        .then(function (json) {
        var textContent = ParseGcvJson(json);
        console.log(textContent);
    });
}
function ParseGcvJson(json) {
    //Parse the JSON result from OCR
    var textAnnotations = json.responses[0].textAnnotations[0];
    var textContent = textAnnotations.description;
    return textContent;
}
function GcvJsonToArray(json) {
    //         ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w:any => w.description)})
    throw console.error();
}
//#region GraphQL const
var GraphQLApi = "https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9";
var query = "query {\n        allScenes {\n          id\n          googlecloudvision\n          text\n          url\n        }\n      }";
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
var graphql_request_2 = require("graphql-request");
var client = new graphql_request_2.GraphQLClient('https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9', {
    headers: {
        Authorization: 'Bearer YOUR_AUTH_TOKEN',
    },
});
function setItem() {
    return client.request("\n    {\n      createScene(\n        text: \"testing from my macbook pro via my node cli\"\n      ) {\n        id\n      }\n    }\n    \n  ");
}
try {
    setItem();
}
catch (error) {
    console.log(error);
}
//#endregion
//#region GraphQL Query request examples and experiments w/ graphql-request npm package
// Basic request
graphql_request_1.request(GraphQLApi, query).then(function (data) { return console.log(data); });
// Complex request
graphql_request_1.request(GraphQLApi, query)
    .then(function (data) {
    // For loop to demonstrate iterating through request response json field values          
    for (var index = 0; index < data.allScenes.length; index++) {
        var element = data.allScenes[index].googlecloudvision;
        console.log(element);
    }
    // Example of manually going through response values and indexes                
    console.log(JSON.stringify(data.allScenes[1].googlecloudvision) + " HERE WEVE ACCESSED QUERY FIELD JSON MEMBERS!");
});
//#endregion
//#region CLI Input for Gcv OCR
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Give the directory to an image: ', function (answer) {
    var imageFile = fs.readFileSync(answer);
    // Covert the image data to a Buffer and base64 encode it.
    var encoded = new Buffer(imageFile).toString('base64');
    Parse(encoded);
    rl.close();
});
//#endregion 
