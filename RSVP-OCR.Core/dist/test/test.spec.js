"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var RsvpOcrCore_js_1 = require("../dist/RsvpOcrCore.js");
describe("RsvpOcrCore", function () {
    describe("OCR", function () {
        it("Should return a number equal to 3", function () {
            var core = new RsvpOcrCore_js_1.default();
            var result = core.OCR();
            chai_1.expect(result).to.equal(3);
        });
    });
});
