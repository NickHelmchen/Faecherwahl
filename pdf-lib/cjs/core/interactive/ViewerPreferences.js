"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var PDFName_1 = tslib_1.__importDefault(require("../objects/PDFName"));
var PDFBool_1 = tslib_1.__importDefault(require("../objects/PDFBool"));
var ViewerPreferences = /** @class */ (function () {
    function ViewerPreferences(dict) {
        this.dict = dict;
    }
    ViewerPreferences.prototype.DisplayDocTitle = function () {
        var DisplayDocTitle = this.dict.lookup(PDFName_1.default.of('DisplayDocTitle'));
        if (DisplayDocTitle instanceof PDFBool_1.default)
            return DisplayDocTitle;
        return undefined;
    };
    ViewerPreferences.prototype.getDisplayDocTitle = function () {
        var _a, _b;
        return (_b = (_a = this.DisplayDocTitle()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
    };
    ViewerPreferences.prototype.setDisplayDocTitle = function (displayTitle) {
        var DisplayDocTitle = this.dict.context.obj(displayTitle);
        this.dict.set(PDFName_1.default.of('DisplayDocTitle'), DisplayDocTitle);
    };
    ViewerPreferences.fromDict = function (dict) {
        return new ViewerPreferences(dict);
    };
    ViewerPreferences.create = function (context) {
        var dict = context.obj({});
        return new ViewerPreferences(dict);
    };
    return ViewerPreferences;
}());
exports.default = ViewerPreferences;
//# sourceMappingURL=ViewerPreferences.js.map