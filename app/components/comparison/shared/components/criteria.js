"use strict";
class Criteria {
    constructor(name = "", tag = "", description = "", placeholder = "", and_search = true, values = new Array()) {
        this.name = name;
        this.tag = tag;
        this.description = description;
        this.placeholder = placeholder;
        this.and_search = and_search;
        this.values = values;
    }
}
exports.Criteria = Criteria;

//# sourceMappingURL=criteria.js.map
