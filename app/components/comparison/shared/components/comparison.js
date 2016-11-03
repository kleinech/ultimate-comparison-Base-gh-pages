"use strict";
const details_1 = require('./details');
class Comparison {
    constructor(jsonObj) {
        this.title = jsonObj.title ? jsonObj.title : "Ultimate-Comparison";
        this.subtitle = jsonObj.subtitle ? jsonObj.subtitle : "Ultimate comparison framework";
        this.selecttitle = jsonObj.selecttitle ? jsonObj.selecttitle : "Criteria";
        this.tabletitle = jsonObj.tabletitle ? jsonObj.tabletitle : "Comparison of ...";
        this.repository = jsonObj.repository ? jsonObj.repository : "https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git";
        this.details = jsonObj.details ? new details_1.Details(jsonObj.details) : new details_1.Details({});
        this.displaytemplate = jsonObj.displaytemplate ? jsonObj.displaytemplate : false;
    }
}
exports.Comparison = Comparison;

//# sourceMappingURL=comparison.js.map
