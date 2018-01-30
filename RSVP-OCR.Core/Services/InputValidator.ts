// May require external dependency to do Base64 encoding efficiently
// https://www.npmjs.com/package/base-64
// https://www.npmjs.com/package/js-base64 has typescript definitions
// https://github.com/DefinitelyTyped/DefinitelyTyped
// https://www.npmjs.com/package/base64-js

// Should it also accept urls to pull the images from?
export function IsValidImageDirectory(data: string): boolean {return true;}

export function IsValidImageUrl(data: string): boolean {return true;}

export function IsValidUrl(data: string): boolean {return true;}

export function IsValidBase64(data: string): boolean
{
    // if(data == "contains Base64: or what ever the suffix is")
    // {
    //     return true;
    // } else
    // {
    //     return false;
    // }
    return true;
}

export function EncodeToBase64(imgDirectory:string): string
{
    return "";
}