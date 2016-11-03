"use strict";
class ListItem {
    constructor(content = "", plainChilds = "", converter) {
        this.content = content;
        this.plainChilds = plainChilds;
        this.converter = converter;
        this.htmlChilds = "";
        this.latexChilds = "";
        this.convertChilds();
    }
    convertChilds() {
        this.htmlChilds = this.converter.makeHtml(this.plainChilds.replace(/^[\s]{3}/gm, ""));
        if (this.htmlChilds) {
            this.latexChilds = this.htmlChilds.replace(/[\s]{2}/gm, " ");
            this.latexChilds = this.latexChilds.replace(/[\s]/gm, " ");
        }
    }
    getLabel() {
        return this.content + this.htmlChilds;
    }
}
exports.ListItem = ListItem;

//# sourceMappingURL=list-item.js.map
