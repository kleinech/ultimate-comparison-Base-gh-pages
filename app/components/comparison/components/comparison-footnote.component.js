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
const comparison_service_1 = require('./comparison.service');
const comparison_citation_service_1 = require('./comparison-citation.service');
const citation_pipe_1 = require('../pipes/citation.pipe');
let ComparisonFootnoteComponent = class ComparisonFootnoteComponent {
    constructor(citationPipe, citationServ, compServ) {
        this.citationPipe = citationPipe;
        this.citationServ = citationServ;
        this.compServ = compServ;
        this.compiled_footnote = "";
    }
    compile_footnote(note) {
        if (!this.compServ.footnotes[note]) {
            this.compServ.footnotes[note] = {
                value: this.citationPipe.transform(note, [this.citationServ, true]),
                index: (this.compServ.findex++ + "r" + Math.random() * 100000).toString().substr(0, 5),
                count: 1
            };
        }
        else {
            this.compServ.footnotes[this.footnote].count++;
        }
        this.compiled_footnote = "\\footref&#123;" + this.compServ.footnotes[note].index + "&#125;";
    }
    ngOnChanges() {
        this.compile_footnote(this.footnote);
    }
    ngOnDestroy() {
        this.compServ.footnotes[this.footnote].count--;
        if (this.compServ.footnotes[this.footnote].count == 0) {
            delete this.compServ.footnotes[this.footnote];
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], ComparisonFootnoteComponent.prototype, "footnote", void 0);
ComparisonFootnoteComponent = __decorate([
    core_1.Component({
        selector: 'comparison-footnote',
        template: '<div [innerHtml]="compiled_footnote|sanitizeHtml"></div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [citation_pipe_1.CitationPipe, comparison_citation_service_1.ComparisonCitationService, comparison_service_1.ComparisonService])
], ComparisonFootnoteComponent);
exports.ComparisonFootnoteComponent = ComparisonFootnoteComponent;

//# sourceMappingURL=comparison-footnote.component.js.map
