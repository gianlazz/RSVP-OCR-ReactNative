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
var GraphQLApi = "https://api.graph.cool/simple/v1/cjdcisiyd3hc5018698qw20k9";
var query = "query {\n        allScenes {\n          id\n          googlecloudvision\n          text\n          url\n        }\n      }";
graphql_request_1.request(GraphQLApi, query).then(function (data) { return console.log(data); });
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
