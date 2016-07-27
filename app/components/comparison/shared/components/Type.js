"use strict";
const LabelCls_1 = require('./LabelCls');
class Type {
    constructor(tag = "", cls = "", labelCls = new LabelCls_1.LabelCls()) {
        this.tag = tag;
        this.cls = cls;
        this.labelCls = labelCls;
    }
}
exports.Type = Type;

//# sourceMappingURL=Type.js.map
