// RSVP-OCR.Core
// Entry point API to the this logic core
// All unit tests should initially point here, while any dependencies are encapulated away
// Gian Lazzarini
// 01.22.18

class RsvpOcrCore {
    //properties if needed

    constructor()
    {
        //constructor most likely wont be needed as multiple instances of this class are not likely to be called
    }

    static HelloWorld() 
    {
        console.log("hello world");
    }

    static ParseString(textToParse: string) 
    {
        var SplitString = textToParse.split(" ");
        for (let index = 0; index < SplitString.length; index++) {
            const element = textToParse[index];
            console.log(element);            
        }
    }

}

RsvpOcrCore.ParseString("Hi This Is My First Test")