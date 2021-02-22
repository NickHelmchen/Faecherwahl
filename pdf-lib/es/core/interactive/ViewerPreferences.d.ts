import PDFDict from "../objects/PDFDict";
import PDFBool from "../objects/PDFBool";
import PDFContext from "../PDFContext";
declare class ViewerPreferences {
    readonly dict: PDFDict;
    static fromDict: (dict: PDFDict) => ViewerPreferences;
    static create: (context: PDFContext) => ViewerPreferences;
    protected constructor(dict: PDFDict);
    DisplayDocTitle(): PDFBool | undefined;
    getDisplayDocTitle(): boolean;
    setDisplayDocTitle(displayTitle: boolean): void;
}
export default ViewerPreferences;
//# sourceMappingURL=ViewerPreferences.d.ts.map