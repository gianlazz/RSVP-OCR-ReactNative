export default class RsvpOcrCore {
    static CheckConnectivity(): boolean;
    OCR(data: string): number;
    static RsvpParse(textToParse: string): void;
}
