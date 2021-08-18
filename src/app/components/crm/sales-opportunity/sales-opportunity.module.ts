import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SalesOpportunityRoutingModule} from './sales-opportunity-routing.module';
import {SalesOpportunityComponent} from './sales-opportunity.component';
import {DxTextBoxModule} from "devextreme-angular/ui/text-box";
import {DxSliderModule} from "devextreme-angular/ui/slider";
import {DxNumberBoxModule} from "devextreme-angular/ui/number-box";
import {DxDateBoxModule} from "devextreme-angular/ui/date-box";
import {DxSelectBoxModule} from "devextreme-angular/ui/select-box";
import {DxTextAreaModule} from "devextreme-angular/ui/text-area";
import {DxDataGridModule} from "devextreme-angular/ui/data-grid";
import {DxSpeedDialActionModule} from "devextreme-angular/ui/speed-dial-action";
import {DxPopupModule} from "devextreme-angular/ui/popup";
import {DxButtonModule} from "devextreme-angular/ui/button";

@NgModule({
  declarations: [
    SalesOpportunityComponent
  ],
  imports: [
    CommonModule,
    SalesOpportunityRoutingModule,
    DxTextBoxModule,
    DxSliderModule,
    DxNumberBoxModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxDataGridModule,
    DxSpeedDialActionModule,
    DxPopupModule,
    DxButtonModule
  ]
})
export class SalesOpportunityModule {
}
