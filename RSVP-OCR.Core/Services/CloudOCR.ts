import axios from 'axios';

// Google Cloud Vision API KEYS
const cloudVisionKey = 'AIzaSyADh2eyiZCxc4g1IMjc0PjQFudxKlFW3-s';
// Endpoints
const cloudVision = 'https://vision.googleapis.com/v1/images:annotate?key=' + cloudVisionKey;
var textContent:string;
var ocrArray:Array<String>;
var ocrString:string;

class CloudOcr
{
        static AxiosCloudVision()
        {
                // axios.post(cloudVision, {
                //         requests: 
                //         [{
                //             image: {
                //             content: data
                //             },
                //             features: [{
                //             //Or 'TEXT_DETECTION'
                //             type: 'DOCUMENT_TEXT_DETECTION',
                //             maxResults: 1
                //             }]
                //         }]
                //     }).then(function (response) {
                //     console.log(response);
                //         var textAnnotations = response.data.responses[0].textAnnotations[0];
                //         var textContent = textAnnotations.description;
                //         textContent
                //         console.log(textContent);
                //         ocrArray = response.data.responses[0].textAnnotations.slice(1).map(w => w.description)})
                //         ocrString = textContent;
                //             }.bind(this)).catch(function (error) {
                //                 console.log(error, 'error');
                //             }).catch(err => console.error(err));
        }
}