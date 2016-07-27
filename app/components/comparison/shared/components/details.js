"use strict";
class Details {
    constructor(jsonObj) {
        this.header = jsonObj.header ? jsonObj.header : "tag";
        this.headerLabel = jsonObj['header-label'] ? jsonObj['header-label'] : "undefined";
        this.headerUrl = jsonObj['header-url'] ? jsonObj['header-url'] : "url";
        this.bodyMainTitle = jsonObj['body-main-title'] ? jsonObj['body-main-title'] : "Description";
        this.body = jsonObj.body ? jsonObj.body : "Description";
        this.bodyAttachmentTags = jsonObj['body-attachment-tags'] ? jsonObj['body-attachment-tags'] : new Array();
    }
}
exports.Details = Details;

//# sourceMappingURL=details.js.map
