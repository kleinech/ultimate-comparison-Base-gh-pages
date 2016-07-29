"use strict";
const type_1 = require('./type');
class TableData {
    constructor(name = "", tag = "", style = "", display = false, type = new type_1.Type(), values = {}) {
        this.name = name;
        this.tag = tag;
        this.style = style;
        this.display = display;
        this.type = type;
        this.values = values;
    }
}
exports.TableData = TableData;

//# sourceMappingURL=table-data.js.map
