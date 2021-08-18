import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AddBidRoutingModule} from './add-bid-routing.module';
import {AddBidComponent} from './add-bid.component';
import {DxSelectBoxModule} from "devextreme-angular/ui/select-box";
import {DxTextBoxModule} from "devextreme-angular/ui/text-box";
import {DxHtmlEditorModule} from "devextreme-angular/ui/html-editor";
import {DxButtonModule} from "devextreme-angular/ui/button";
import {DxMultiViewModule} from "devextreme-angular/ui/multi-view";
import {DxSpeedDialActionModule} from "devextreme-angular/ui/speed-dial-action";
import {DxDataGridModule} from "devextreme-angular/ui/data-grid";
import {DxFileUploaderModule} from "devextreme-angular/ui/file-uploader";
import {DxDateBoxModule} from "devextreme-angular/ui/date-box";
import {DxDropDownBoxModule} from "devextreme-angular/ui/drop-down-box";
import {DxTreeViewModule} from "devextreme-angular/ui/tree-view";

@NgModule({
  declarations: [
    AddBidComponent
  ],
  imports: [
    CommonModule,
    AddBidRoutingModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxHtmlEditorModule,
    DxButtonModule,
    DxMultiViewModule,
    DxSpeedDialActionModule,
    DxDataGridModule,
    DxFileUploaderModule,
    DxDateBoxModule,
    DxDropDownBoxModule,
    DxTreeViewModule,
  ]
})
export class AddBidModule {
}
