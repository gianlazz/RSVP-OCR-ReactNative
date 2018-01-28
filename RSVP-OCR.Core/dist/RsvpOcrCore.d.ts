declare class RsvpOcrCore {
    static CheckConnectivity(): boolean;
    static OCR(data: string): string;
    static RsvpParse(textToParse: string): void;
}
