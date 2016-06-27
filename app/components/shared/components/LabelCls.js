System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LabelCls;
    return {
        setters:[],
        execute: function() {
            LabelCls = (function () {
                function LabelCls(label_success, label_warning, label_danger, label_default, label_info, label_primary) {
                    if (label_success === void 0) { label_success = Array(); }
                    if (label_warning === void 0) { label_warning = Array(); }
                    if (label_danger === void 0) { label_danger = Array(); }
                    if (label_default === void 0) { label_default = Array(); }
                    if (label_info === void 0) { label_info = Array(); }
                    if (label_primary === void 0) { label_primary = Array(); }
                    this.label_success = label_success;
                    this.label_warning = label_warning;
                    this.label_danger = label_danger;
                    this.label_default = label_default;
                    this.label_info = label_info;
                    this.label_primary = label_primary;
                }
                LabelCls.prototype.getCls = function (item) {
                    if (this.label_success.some(function (it) { return it == item; })) {
                        return "label-success";
                    }
                    if (this.label_warning.some(function (it) { return it == item; })) {
                        return "label-warning";
                    }
                    if (this.label_danger.some(function (it) { return it == item; })) {
                        return "label-danger";
                    }
                    if (this.label_default.some(function (it) { return it == item; })) {
                        return "label-default";
                    }
                    if (this.label_info.some(function (it) { return it == item; })) {
                        return "label-info";
                    }
                    if (this.label_primary.some(function (it) { return it == item; })) {
                        return "label-primary";
                    }
                    return "";
                };
                return LabelCls;
            }());
            exports_1("LabelCls", LabelCls);
        }
    }
});

//# sourceMappingURL=LabelCls.js.map
