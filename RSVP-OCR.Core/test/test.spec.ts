import { expect } from 'chai';
import RsvpOcrCore from '../dist/RsvpOcrCore.js';

describe("RsvpOcrCore", () => {
    describe("OCR", () => {
        it("Should return a number equal to 3", () => {
            let core = new RsvpOcrCore();

            var result = core.OCR();

            expect(result).to.equal(3);
        });
    })
});