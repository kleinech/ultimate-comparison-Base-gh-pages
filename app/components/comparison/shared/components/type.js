"use strict";
const labelcls_1 = require('./labelcls');
class Type {
    constructor(tag = "", cls = "", labelCls = new labelcls_1.LabelCls()) {
        this.tag = tag;
        this.cls = cls;
        this.labelCls = labelCls;
    }
}
exports.Type = Type;

//# sourceMappingURL=type.js.map
