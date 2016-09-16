"use strict";
const type_1 = require('./type');
class TableData {
    constructor(name = "", tag = "", url = "", style = "", display = false, type = new type_1.Type(), values = {}, sort = 0) {
        this.name = name;
        this.tag = tag;
        this.url = url;
        this.style = style;
        this.display = display;
        this.type = type;
        this.values = values;
        this.sort = sort;
    }
}
exports.TableData = TableData;

//# sourceMappingURL=table-data.js.map
