System.register(['./Type'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Type_1;
    var TableData;
    return {
        setters:[
            function (Type_1_1) {
                Type_1 = Type_1_1;
            }],
        execute: function() {
            TableData = (function () {
                function TableData(name, tag, style, display, type) {
                    if (name === void 0) { name = ""; }
                    if (tag === void 0) { tag = ""; }
                    if (style === void 0) { style = ""; }
                    if (display === void 0) { display = false; }
                    if (type === void 0) { type = new Type_1.Type(); }
                    this.name = name;
                    this.tag = tag;
                    this.style = style;
                    this.display = display;
                    this.type = type;
                }
                return TableData;
            }());
            exports_1("TableData", TableData);
        }
    }
});

//# sourceMappingURL=TableData.js.map
