"use strict";
class ListItem {
    constructor(content = "", plainChilds = "", converter) {
        this.content = content;
        this.plainChilds = plainChilds;
        this.converter = converter;
        this.htmlChilds = "";
        this.convertChilds();
    }
    convertChilds() {
        this.htmlChilds = this.converter.makeHtml(this.plainChilds.replace(/^[\s]{3}/gm, ""));
    }
    getLabel() {
        return this.content + this.htmlChilds;
    }
}
exports.ListItem = ListItem;

//# sourceMappingURL=list-item.js.map
