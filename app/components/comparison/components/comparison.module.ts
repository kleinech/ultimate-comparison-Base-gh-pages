import { NgModule, CUSTOM_ELEMENTS_SCHEMA }             from '@angular/core';
import { BrowserModule }                                from '@angular/platform-browser';
import { HttpModule }                                   from '@angular/http';
import { PolymerElement }                               from '@vaadin/angular2-polymer';

import { ComparisonDetailsComponent }                   from './comparison-details.component';
import { ComparisonComponent }                          from './comparison.component';
import { COMPARISON_PIPES }                             from '../pipes/index.pipes';
import { InputModule }                                  from '../../input/input.module';
import { ModalDialogModule }                            from '../../modaldialog/index';

// Provider imports
import { Title }                                        from '@angular/platform-browser';
import { ComparisonService }                            from './comparison.service'; 
import { ComparisonDataService }                        from './comparison-data.service'; 
import { ComparisonConfigService }                      from './comparison-config.service'; 

@NgModule({
    imports: [
        BrowserModule,
        ModalDialogModule,
        HttpModule,
        InputModule
    ],
    exports: [
        ComparisonComponent  
    ],
    declarations: [
        ComparisonComponent,
        ...COMPARISON_PIPES,
        ComparisonDetailsComponent,
        PolymerElement('paper-header-panel'),
        PolymerElement('paper-button'),
        PolymerElement('paper-dialog'),
        PolymerElement('paper-toolbar'),
        PolymerElement('paper-card'),
        PolymerElement('paper-listbox'),
        PolymerElement('paper-item'),
        PolymerElement('paper-checkbox'),
        PolymerElement('paper-tooltip'),
        PolymerElement('iron-icon'),
        PolymerElement('paper-icon-button'),
    ],
    providers: [
        ComparisonService,
        ComparisonDataService,
        ComparisonConfigService,
        Title
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComparisonModule { }