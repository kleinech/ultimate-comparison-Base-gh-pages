System.register(['./components/TableData', './components/LabelCls', './components/Type'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (TableData_1_1) {
                exportStar_1(TableData_1_1);
            },
            function (LabelCls_1_1) {
                exportStar_1(LabelCls_1_1);
            },
            function (Type_1_1) {
                exportStar_1(Type_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=index.js.map
