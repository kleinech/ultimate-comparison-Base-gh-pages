"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const platform_browser_1 = require('@angular/platform-browser');
const http_1 = require('@angular/http');
const tooltip_1 = require('ng2-bootstrap/components/tooltip');
const showdown = require('showdown');
const datafilter_pipe_1 = require('../../pipes/datafilter.pipe');
const jq_select_1 = require('../select/jq-select');
const modal_1 = require('../modal/modal');
const tablefilter_pipe_1 = require('../../pipes/tablefilter.pipe');
const index_1 = require('./../shared/index');
let DataFormComponent = class DataFormComponent {
    constructor(http, title) {
        this.http = http;
        this.title = title;
        this.data = new Array();
        this.dataLoaded = false;
        this.table = new Array();
        this.tableLoaded = false;
        this.criteria = [];
        this.criteriaLoaded = false;
        this.detail = {};
        this.detailLoaded = false;
        this.comparison = {
            details: "",
            title: ""
        };
        this.comparisonLoaded = false;
        this.criteriaSelection = [];
        this.query = [];
        this.counter = 0;
        this.converter = new showdown.Converter();
        http.request('app/data/Table.json')
            .subscribe(res => {
            res.json().forEach(obj => {
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
                let td = new index_1.TableData(obj.name, obj.tag, obj.style, obj.display, type, values);
                this.table.push(td);
            });
            this.tableLoaded = true;
            this.readData();
        });
        http.request('app/data/Comparison.json')
            .subscribe(res => {
            this.comparison = res.json();
            this.comparisonLoaded = true;
            this.detail = this.comparison.details;
            this.detailLoaded = true;
            this.title.setTitle(this.comparison.title);
        });
        http.request('app/data/Criteria.json')
            .subscribe(res => {
            this.criteria = res.json();
            this.criteria.map(value => {
                value.id = this.counter++;
            });
            this.criteriaLoaded = true;
        });
    }
    readData() {
        this.http.request('app/data/Data.json')
            .subscribe(res => {
            res.json().forEach(obj => {
                let data = new index_1.Data();
                data.tag = obj.tag;
                let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(data.tag);
                data.url = regArray ? regArray[2] : "";
                data.tag = regArray ? regArray[1] : data.tag;
                for (let key in obj) {
                    if (!obj.hasOwnProperty(key))
                        continue;
                    switch (key) {
                        case "tag":
                            break;
                        case "descr":
                            data.descr = obj[key];
                            break;
                        case "Description":
                            data.properties[key] = new index_1.Property(obj[key].plain);
                            break;
                        default:
                            let p = new index_1.Property();
                            p.plain = obj[key].plain;
                            if (this.getTableData(key) && this.getTableData(key).type.tag == "text") {
                                p.text == obj[key].text;
                            }
                            else {
                                obj[key].childs[0][0].forEach(item => {
                                    let content = item.content;
                                    let plainChilds = item.plainChilds;
                                    let itm = new index_1.ListItem(content, plainChilds, this.converter);
                                    p.list.push(itm);
                                });
                            }
                            data.properties[key] = p;
                            break;
                    }
                }
                ;
                this.data.push(data);
            });
            this.dataLoaded = true;
        });
    }
    getTableData(name) {
        let result;
        this.table.forEach(entry => {
            if (entry.tag == name) {
                result = entry;
                return entry;
            }
        });
        return result;
    }
    CriteriaChanged(value, crit) {
        if (value) {
            this.query[crit.id] = {
                value: value,
                crit: crit
            };
        }
    }
    onShowDetails(data) {
        this.modalcomponent.open(data, this.detail, this.table);
    }
};
__decorate([
    core_1.ViewChild(modal_1.ModalComponentMarkdown), 
    __metadata('design:type', modal_1.ModalComponentMarkdown)
], DataFormComponent.prototype, "modalcomponent", void 0);
DataFormComponent = __decorate([
    core_1.Component({
        selector: 'data-form',
        templateUrl: 'app/templates/main.tpl.html',
        providers: [http_1.HTTP_PROVIDERS, platform_browser_1.Title],
        pipes: [datafilter_pipe_1.DataFilter, tablefilter_pipe_1.TableFilter],
        directives: [jq_select_1.JQSelect, modal_1.ModalComponentMarkdown, tooltip_1.TOOLTIP_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [http_1.Http, platform_browser_1.Title])
], DataFormComponent);
exports.DataFormComponent = DataFormComponent;

//# sourceMappingURL=data-form.component.js.map
