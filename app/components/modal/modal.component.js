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
const angular2_polymer_1 = require('@vaadin/angular2-polymer');
const dialog_component_1 = require('./dialog.component');
let ModalDialog = class ModalDialog {
    constructor() {
    }
    toggleOpen(opened) {
        if (opened) {
            this.container.nativeElement.classList.add('mc-opened');
        }
        else {
            this.container.nativeElement.classList.remove('mc-opened');
        }
    }
    open() {
        this.dia.nativeElement.open();
    }
    close() {
        this.dia.nativeElement.close();
    }
};
__decorate([
    core_1.ViewChild('container'), 
    __metadata('design:type', core_1.ElementRef)
], ModalDialog.prototype, "container", void 0);
__decorate([
    core_1.ViewChild('dialog'), 
    __metadata('design:type', core_1.ElementRef)
], ModalDialog.prototype, "dia", void 0);
ModalDialog = __decorate([
    core_1.Component({
        selector: 'modaldialog',
        template: `
    <div class="modal-container" #container>
        <paper-dialog (openedChange)="toggleOpen($event)" role="dialog" #dialog>
            <ng-content></ng-content>
        </paper-dialog>
    </div>
    `,
        directives: [
            angular2_polymer_1.PolymerElement('paper-dialog'),
            dialog_component_1.PaperDialogDirective
        ],
        styleUrls: ['./style.css'],
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], ModalDialog);
exports.ModalDialog = ModalDialog;

//# sourceMappingURL=modal.component.js.map
