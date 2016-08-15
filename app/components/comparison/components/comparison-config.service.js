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
const platform_browser_1 = require('@angular/platform-browser');
const index_1 = require('./../shared/index');
const comparison_data_service_1 = require('./comparison-data.service');
let ComparisonConfigService = class ComparisonConfigService {
    constructor(title, http, comparisonDataService) {
        this.title = title;
        this.http = http;
        this.comparisonDataService = comparisonDataService;
    }
    loadTableData() {
        this.http.request('comparison-configuration/table.json')
            .subscribe(res => {
            this.tableDataSet = new index_1.TableDataSet(res.json());
            this.comparisonDataService.loadData(this.tableDataSet);
        });
    }
    loadCriteria() {
        this.http.request('comparison-configuration/criteria.json')
            .subscribe(res => {
            this.criteriaSet = new index_1.CriteriaSet(res.json());
        });
    }
    loadComparison() {
        this.http.request('comparison-configuration/comparison.json')
            .subscribe(res => {
            this.comparison = new index_1.Comparison(res.json());
            this.title.setTitle(this.comparison.title);
        });
    }
    getBodyAttachmentTags() {
        if (!this.comparison)
            return new Array();
        let tags = this.comparison.details.bodyAttachmentTags;
        if (tags.length == 0)
            tags = this.comparisonDataService.getDefaultAttachmentTags();
        return tags;
    }
};
ComparisonConfigService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [platform_browser_1.Title, http_1.Http, comparison_data_service_1.ComparisonDataService])
], ComparisonConfigService);
exports.ComparisonConfigService = ComparisonConfigService;

//# sourceMappingURL=comparison-config.service.js.map
