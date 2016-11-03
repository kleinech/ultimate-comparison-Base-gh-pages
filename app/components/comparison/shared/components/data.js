"use strict";
const index_1 = require('./../index');
class Data {
    constructor(tag = "", descr = "", url = "", properties = {}) {
        this.tag = tag;
        this.descr = descr;
        this.url = url;
        this.properties = properties;
    }
    getProperty(name) {
        switch (name) {
            case "tag":
                return new index_1.Property(this.tag, this.tag);
            case "descr":
                return new index_1.Property(this.descr, this.descr);
            case "url":
                return new index_1.Property(this.url, this.url);
            default:
                return this.properties[name] ? this.properties[name] : new index_1.Property();
        }
    }
    getPropertyTags(name) {
        let tagList = new Array();
        let p = this.getProperty(name);
        p.list.forEach(item => {
            tagList.push(item.content);
        });
        return tagList;
    }
    getPropertyListItems(name) {
        return this.getProperty(name).list;
    }
}
exports.Data = Data;

//# sourceMappingURL=data.js.map
