"use strict";
class LabelCls {
    constructor(label_success = Array(), label_warning = Array(), label_danger = Array(), label_default = Array(), label_info = Array(), label_primary = Array()) {
        this.label_success = label_success;
        this.label_warning = label_warning;
        this.label_danger = label_danger;
        this.label_default = label_default;
        this.label_info = label_info;
        this.label_primary = label_primary;
    }
    getCls(item) {
        if (this.label_success.some(it => it.name == item)) {
            return "label-success";
        }
        if (this.label_warning.some(it => it.name == item)) {
            return "label-warning";
        }
        if (this.label_danger.some(it => it.name == item)) {
            return "label-danger";
        }
        if (this.label_default.some(it => it.name == item)) {
            return "label-default";
        }
        if (this.label_info.some(it => it.name == item)) {
            return "label-info";
        }
        if (this.label_primary.some(it => it.name == item)) {
            return "label-primary";
        }
        return "";
    }
}
exports.LabelCls = LabelCls;

//# sourceMappingURL=labelcls.js.map
