System.register(['./LabelCls'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LabelCls_1;
    var Type;
    return {
        setters:[
            function (LabelCls_1_1) {
                LabelCls_1 = LabelCls_1_1;
            }],
        execute: function() {
            Type = (function () {
                function Type(tag, cls, ngCls) {
                    if (tag === void 0) { tag = ""; }
                    if (cls === void 0) { cls = ""; }
                    if (ngCls === void 0) { ngCls = new LabelCls_1.LabelCls(); }
                    this.tag = tag;
                    this.cls = cls;
                    this.ngCls = ngCls;
                }
                return Type;
            }());
            exports_1("Type", Type);
        }
    }
});

//# sourceMappingURL=Type.js.map
