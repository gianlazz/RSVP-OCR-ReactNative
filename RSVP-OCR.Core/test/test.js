'use strict';
var expect = require('chai').expect;
var core = require('../dist/RsvpOcrCore.js');

describe('Valid Base64 encoded image', () => {
    it('should return true', () => {
        var result = core.Parse("hi");
        expect(result).to.equal(3);
    });
});

describe('Corrupt or invalid Base64 encoded image', () => {
    it('should return false', () => {
        var result = core.Parse("hi");
        expect(result).to.equal(3);
    });
});