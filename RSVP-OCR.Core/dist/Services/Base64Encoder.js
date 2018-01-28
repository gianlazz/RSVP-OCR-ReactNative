"use strict";
// May require external dependency to do Base64 encoding efficiently
// https://www.npmjs.com/package/base-64
// https://www.npmjs.com/package/js-base64 has typescript definitions
// https://github.com/DefinitelyTyped/DefinitelyTyped
// https://www.npmjs.com/package/base64-js
var Base64Encoder = /** @class */ (function () {
    function Base64Encoder() {
    }
    // Should it also accept urls to pull the images from?
    Base64Encoder.EncodeToBase64 = function (imgDirectory) {
        return "";
    };
    Base64Encoder.IsValidBase64 = function (data) {
        // if(data == "contains Base64: or what ever the suffix is")
        // {
        //     return true;
        // } else
        // {
        //     return false;
        // }
        return true;
    };
    return Base64Encoder;
}());
