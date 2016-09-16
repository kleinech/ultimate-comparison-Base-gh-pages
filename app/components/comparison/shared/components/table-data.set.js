"use strict";
const index_1 = require('../index');
class TableDataSet {
    constructor(jsonObj) {
        this.tableDataSet = {};
        jsonObj.forEach(obj => {
            let lcls = new index_1.LabelCls();
            var values = {};
            if (obj.type.values) {
                obj.type.values.forEach(val => {
                    let value = new index_1.Value(val.name, val.description);
                    values[val.name] = val.description;
                    switch (val.class) {
                        case "label-success":
                            lcls.label_success.push(value);
                            break;
                        case "label-warning":
                            lcls.label_warning.push(value);
                            break;
                        case "label-danger":
                            lcls.label_danger.push(value);
                            break;
                        case "label-default":
                            lcls.label_default.push(value);
                            break;
                        case "label-info":
                            lcls.label_info.push(value);
                            break;
                        case "label-primary":
                            lcls.label_primary.push(value);
                            break;
                    }
                });
            }
            let type = new index_1.Type(obj.type.tag, obj.type.class, lcls);
            let td = new index_1.TableData(obj.name, obj.tag, obj.urlTag, obj.style, obj.display, type, values, obj.sort);
            this.tableDataSet[obj.tag] = td;
        });
    }
    getTableData(tag) {
        return this.tableDataSet[tag] ? this.tableDataSet[tag] : new index_1.TableData();
    }
    getTableDataArray() {
        let set = new Array();
        for (let key in this.tableDataSet) {
            if (!this.tableDataSet.hasOwnProperty(key))
                continue;
            set.push(this.tableDataSet[key]);
        }
        return set;
    }
}
exports.TableDataSet = TableDataSet;

//# sourceMappingURL=table-data.set.js.map
