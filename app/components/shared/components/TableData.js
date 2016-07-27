"use strict";
const Type_1 = require('./Type');
class TableData {
    constructor(name = "", tag = "", style = "", display = false, type = new Type_1.Type(), values = {}) {
        this.name = name;
        this.tag = tag;
        this.style = style;
        this.display = display;
        this.type = type;
        this.values = values;
    }
}
exports.TableData = TableData;

//# sourceMappingURL=TableData.js.map
