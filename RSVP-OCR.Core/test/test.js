'use strict';
var expect = require('chai').expect;
var RsvpOcrCore = require('../dist/RsvpOcrCore.js');

// Test image directory:
const TestImage = "";
// Test image with URL in it
const UrlTestImage = "";
// Test Base64 encoded image:
const Base64EncodedTestImage = "";

describe('OCR function test', () => {
    it('should return ', () => {
        var result = RsvpOcrCore.OCR('Boy');
        expect(result).to.equal('Boys');
    });
});