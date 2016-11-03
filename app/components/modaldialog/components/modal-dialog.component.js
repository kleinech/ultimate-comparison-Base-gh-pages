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
let ModalDialogComponent = class ModalDialogComponent {
    toggleOpen(opened) {
        if (opened) {
            this.container.nativeElement.classList.add('mc-opened');
            this.container.nativeElement.scrollTop = -25;
        }
        else {
            this.container.nativeElement.classList.remove('mc-opened');
            document.body.classList.remove('modal-open');
        }
    }
    open() {
        document.body.classList.add('modal-open');
        this.container.nativeElement.classList.add('mc-opened');
        if (this.dia && this.dia.nativeElement.open) {
            this.dia.nativeElement.open();
            this.container.nativeElement.scrollTop = -25;
        }
    }
    close() {
        document.body.classList.remove('modal-open');
        this.container.nativeElement.classList.remove('mc-opened');
        if (this.dia && this.dia.nativeElement.close)
            this.dia.nativeElement.close();
    }
};
__decorate([
    core_1.ViewChild('container'), 
    __metadata('design:type', core_1.ElementRef)
], ModalDialogComponent.prototype, "container", void 0);
__decorate([
    core_1.ViewChild('dialogPaper'), 
    __metadata('design:type', core_1.ElementRef)
], ModalDialogComponent.prototype, "dia", void 0);
ModalDialogComponent = __decorate([
    core_1.Component({
        selector: 'modal-dialog',
        templateUrl: '../templates/modal-dialog.template.html',
        styleUrls: ['../styles/style.css'],
        moduleId: module.id
    }), 
    __metadata('design:paramtypes', [])
], ModalDialogComponent);
exports.ModalDialogComponent = ModalDialogComponent;

//# sourceMappingURL=modal-dialog.component.js.map
