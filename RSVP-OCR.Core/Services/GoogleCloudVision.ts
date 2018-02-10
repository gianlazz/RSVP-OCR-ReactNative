// const vision = require('@google-cloud/vision');
// const readline = require('readline');
// var base64Img = require('base64-img');

// // Creates a client
// const client = new vision.ImageAnnotatorClient();

// /**
//  * TODO(developer): Uncomment the following line before running the sample.
//  */
// // const fileName = 'Local image file, e.g. /path/to/image.png';

// // Performs text detection on the local file
// function Parse(data:string)
// {
//     client
//   .textDetection(data)
//   .then(results => {
//     const detections = results[0].textAnnotations;
//     console.log('Text:');
//     detections.forEach(text => console.log(text));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
// }

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question('Give the directory to an image: ', (answer:any) => {
//     var data = base64Img.base64Sync(answer);
//     Parse(data);
//     //console.log(`Thank you for your valuable feedback: ${answer}`);
  
//     rl.close();
//   });