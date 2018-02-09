export function Rsvp(textToParse: string)
{
    var SplitString = textToParse.split(" ");
    for (let index = 0; index < SplitString.length; index++) {
        const element = textToParse[index];
        console.log(element);            
    }
}