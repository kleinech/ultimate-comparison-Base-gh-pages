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
const http_1 = require('@angular/http');
const index_1 = require('./../shared/index');
const comparison_service_1 = require('./comparison.service');
let ComparisonDataService = class ComparisonDataService {
    constructor(http, comparisonService) {
        this.http = http;
        this.comparisonService = comparisonService;
        this.data = new Array();
        this.tags = {};
    }
    loadData(tableDataSet, cd) {
        this.http.request('app/components/comparison/data/data.json')
            .subscribe(res => {
            res.json().forEach(obj => {
                let data = new index_1.Data();
                data.tag = obj.tag;
                let regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(data.tag);
                data.url = regArray ? regArray[2] : "";
                if (/^(www)/.test(data.url))
                    data.url = "http://" + data.url;
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
                            this.tags[key] = key;
                            p.plain = obj[key].plain;
                            if (tableDataSet.getTableData(key).type.tag == "text") {
                                p.text == obj[key].text;
                            }
                            else {
                                if (typeof obj[key].childs[0][0] != 'string') {
                                    obj[key].childs[0][0].forEach(item => {
                                        let content = item.content;
                                        let plainChilds = item.plainChilds;
                                        let itm = new index_1.ListItem(content, plainChilds, this.comparisonService.converter);
                                        p.list.push(itm);
                                    });
                                }
                            }
                            data.properties[key] = p;
                            break;
                    }
                }
                ;
                this.data.push(data);
            });
            cd.markForCheck();
        });
    }
    getDefaultAttachmentTags() {
        let tags = new Array();
        for (let key in this.tags) {
            if (!this.tags.hasOwnProperty(key) || key == "tag" || key == "url" || key == "descr")
                continue;
            tags.push(this.tags[key]);
        }
        return tags;
    }
};
ComparisonDataService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, comparison_service_1.ComparisonService])
], ComparisonDataService);
exports.ComparisonDataService = ComparisonDataService;

//# sourceMappingURL=comparison-data.service.js.map
