'use strict';
var expect = require('chai').expect;
var RsvpOcrCore = require('../dist/RsvpOcrCore.js');

// // Test image directory:
// const TestImage = "";
// // Test image with URL in it
// const UrlTestImage = "";
// // Test Base64 encoded image:
// const Base64EncodedTestImage = "";

describe('RsvpOcrCore.OCR function test', () => {
    it('should return a string', () => {
        var result = RsvpOcrCore.OCR('PlaceHolderDataString');
        expect(result).to.equal('Resulting string of text pulled from the image');
    });
});