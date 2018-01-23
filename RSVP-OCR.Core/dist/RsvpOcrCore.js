"use strict";
// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18
var RsvpOcrCore = /** @class */ (function () {
    //properties if needed
    function RsvpOcrCore() {
        //constructor most likely wont be needed as multiple instances of this class are not likely to be called
    }
    RsvpOcrCore.HelloWorld = function () {
        console.log("hello world");
    };
    RsvpOcrCore.ParseString = function (textToParse) {
        var SplitString = textToParse.split(" ");
        for (var index = 0; index < SplitString.length; index++) {
            var element = textToParse[index];
            console.log(element);
        }
    };
    return RsvpOcrCore;
}());
RsvpOcrCore.ParseString("Hi This Is My First Test");
