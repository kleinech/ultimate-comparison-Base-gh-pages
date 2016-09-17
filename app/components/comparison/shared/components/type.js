"use strict";
const labelcls_1 = require('./labelcls');
class Type {
    constructor(tag = "", cls = "", labelCls = new labelcls_1.LabelCls()) {
        this.tag = tag;
        this.cls = cls;
        this.labelCls = labelCls;
    }
    getCls(item) {
        let labelClsString = this.labelCls.getCls(item);
        if (this.cls == "" && labelClsString == "") {
            return "label label-default";
        }
        else if (labelClsString != "") {
            return "label " + labelClsString;
        }
        else {
            //quick fix for old implementations
            return this.cls != "label" ? this.cls : this.cls + "label-default";
        }
    }
}
exports.Type = Type;

//# sourceMappingURL=type.js.map
