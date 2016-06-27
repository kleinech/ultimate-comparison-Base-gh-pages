System.register(['@angular/core', '@angular/platform-browser', '@angular/http', '../../pipes/datafilter.pipe', '../select/jq-select', '../modal/modal', '../../pipes/tablefilter.pipe', './../shared/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, http_1, datafilter_pipe_1, jq_select_1, modal_1, tablefilter_pipe_1, index_1;
    var DataFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (datafilter_pipe_1_1) {
                datafilter_pipe_1 = datafilter_pipe_1_1;
            },
            function (jq_select_1_1) {
                jq_select_1 = jq_select_1_1;
            },
            function (modal_1_1) {
                modal_1 = modal_1_1;
            },
            function (tablefilter_pipe_1_1) {
                tablefilter_pipe_1 = tablefilter_pipe_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            DataFormComponent = (function () {
                function DataFormComponent(http, title) {
                    var _this = this;
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
                    http.request('app/data/Data.json')
                        .subscribe(function (res) {
                        _this.data = res.json();
                        _this.data.forEach(function (entry) {
                            if (entry.tag) {
                                var regArray = /^((?:(?:\w+\s*)(?:-?\s*\w+)*)+)\s*-?\s*((?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi.exec(entry.tag);
                                entry.url = regArray ? regArray[2] : "";
                                entry.tag = regArray ? regArray[1] : entry.tag;
                            }
                        });
                        _this.dataLoaded = true;
                    });
                    http.request('app/data/Table.json')
                        .subscribe(function (res) {
                        res.json().forEach(function (obj) {
                            var lcls = new index_1.LabelCls();
                            if (obj.type.ngClass) {
                                lcls.label_success = obj.type.ngClass["label-success"] ? obj.type.ngClass["label-success"] : new Array();
                                lcls.label_warning = obj.type.ngClass["label-warning"] ? obj.type.ngClass["label-warning"] : new Array();
                                lcls.label_danger = obj.type.ngClass["label-danger"] ? obj.type.ngClass["label-danger"] : new Array();
                                lcls.label_default = obj.type.ngClass["label-default"] ? obj.type.ngClass["label-default"] : new Array();
                                lcls.label_info = obj.type.ngClass["label-info"] ? obj.type.ngClass["label-info"] : new Array();
                                lcls.label_primary = obj.type.ngClass["label-primary"] ? obj.type.ngClass["label-primary"] : new Array();
                            }
                            var type = new index_1.Type(obj.type.tag, obj.type.class, lcls);
                            var td = new index_1.TableData(obj.name, obj.tag, obj.style, obj.display, type);
                            _this.table.push(td);
                        });
                        _this.tableLoaded = true;
                    });
                    http.request('app/data/Comparison.json')
                        .subscribe(function (res) {
                        _this.comparison = res.json();
                        _this.comparisonLoaded = true;
                        _this.detail = _this.comparison.details;
                        _this.detailLoaded = true;
                        _this.title.setTitle(_this.comparison.title);
                    });
                    http.request('app/data/Criteria.json')
                        .subscribe(function (res) {
                        _this.criteria = res.json();
                        _this.criteria.map(function (value) {
                            //value.id = value.name.replace(/[^a-zA-Z0-9]+/,"");
                            value.id = _this.counter++;
                        });
                        _this.criteriaLoaded = true;
                    });
                }
                DataFormComponent.prototype.CriteriaChanged = function (value, crit) {
                    if (value) {
                        this.query[crit.id] = {
                            value: value,
                            crit: crit
                        };
                    }
                };
                DataFormComponent.prototype.onShowDetails = function (data) {
                    this.modalcomponent.open(data, this.detail, this.table);
                };
                DataFormComponent.prototype.getLabelClass = function (item, column) {
                    return column.type.ngCls.getCls(item);
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
                        directives: [jq_select_1.JQSelect, modal_1.ModalComponentMarkdown]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http, platform_browser_1.Title])
                ], DataFormComponent);
                return DataFormComponent;
            }());
            exports_1("DataFormComponent", DataFormComponent);
        }
    }
});

//# sourceMappingURL=data-form.component.js.map
