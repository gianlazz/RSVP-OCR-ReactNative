'use strict';
var expect = require('chai').expect;
var index = require('../dist/RsvpOcrCore.js');

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = index.OCR("hi");
        expect(result).to.equal(3);
    });
});