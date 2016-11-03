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
let ComparisonCitationService = class ComparisonCitationService {
    constructor(http) {
        this.http = http;
        this.bibEntriesHtml = {};
        this.bibEntriesInline = {};
        this.keys = {};
        this.references = [];
    }
    loadCitationData(cd) {
        this.http.request('citation/output/fbib.json')
            .subscribe(res => {
            this.bibEntriesHtml = res.json();
            cd.markForCheck();
        });
        this.http.request('citation/output/fkeys.json')
            .subscribe(res => {
            this.bibEntriesInline = res.json();
            cd.markForCheck();
        });
    }
    getUsedEntries() {
        let entries = new Array();
        for (let key in this.keys) {
            if (!this.keys.hasOwnProperty(key))
                continue;
            entries.push({ key: key, html: this.bibEntriesHtml[this.keys[key]] });
        }
        return entries.length > 0 ? entries : [{ key: "emty", html: "" }];
    }
    addUsedEntries(entries) {
        let newEntries = new Array();
        for (let index in entries) {
            let entry = entries[index];
            if (!this.keys[entry]) {
                newEntries.push(entry);
                this.keys[entry] = entry;
            }
        }
        if (newEntries.length > 0) {
            if (this.references) {
                this.references = this.references.concat(newEntries);
            }
            else {
                this.references = newEntries;
            }
        }
    }
    getBibEntriesHtml(key) {
        return this.bibEntriesHtml[key];
    }
    getBibEntriesInline(key) {
        return this.bibEntriesInline[key];
    }
};
ComparisonCitationService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ComparisonCitationService);
exports.ComparisonCitationService = ComparisonCitationService;

//# sourceMappingURL=comparison-citation.service.js.map
