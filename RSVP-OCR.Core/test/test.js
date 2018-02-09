'use strict';
var expect = require('chai').expect;
var core = require('../dist/RsvpOcrCore.js');

describe('Local image directory', () => {
    it('if valid & offline should return string', () => {
        var testImageDirectory = "./TestBookPage.jpg";
        var result = core.Parse(testImageDirectory);
        expect(result).to.equal(Snapshot);
    });
    it('if invalid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
});

describe('Base64 encoded image', () => {
    it('if valid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
    it('if invalid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
});

describe('Image Url', () => {
    it('if valid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
    it('if invalid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
});

describe('Webpage Url', () => {
    it('if valid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
    it('if invalid should return ___', () => {
        //var result = core.Parse("hi");
        //expect(result).to.equal(false);
    });
});