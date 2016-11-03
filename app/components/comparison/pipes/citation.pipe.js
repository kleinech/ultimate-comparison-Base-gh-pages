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
let CitationPipe = class CitationPipe {
    transform(value, args = []) {
        let citServ = args[0];
        let latex = args[1];
        let entries = new Array();
        if (!latex) {
            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
                entries.push(dec);
                return '<a href="#' + dec + '">' + citServ.getBibEntriesInline(dec) + '</a>';
            });
        }
        else {
            value = value.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
                return '\\cite{' + dec + '}';
            });
        }
        citServ.addUsedEntries(entries);
        return value;
    }
};
CitationPipe = __decorate([
    core_1.Pipe({
        name: 'citation',
        pure: false
    }), 
    __metadata('design:paramtypes', [])
], CitationPipe);
exports.CitationPipe = CitationPipe;

//# sourceMappingURL=citation.pipe.js.map
