import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTemplateRoutingModule } from './add-template-routing.module';
import { AddTemplateComponent } from './add-template.component';
import {DxTextBoxModule} from "devextreme-angular/ui/text-box";
import {DxCheckBoxModule} from "devextreme-angular/ui/check-box";
import {DxSelectBoxModule} from "devextreme-angular/ui/select-box";
import {DxHtmlEditorModule} from "devextreme-angular/ui/html-editor";
import {DxNumberBoxModule} from "devextreme-angular/ui/number-box";
import {FormsModule} from "@angular/forms";
import {DxFileUploaderModule} from "devextreme-angular/ui/file-uploader";


@NgModule({
  declarations: [
    AddTemplateComponent
  ],
  imports: [
    CommonModule,
    AddTemplateRoutingModule,
    DxTextBoxModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxHtmlEditorModule,
    DxNumberBoxModule,
    FormsModule,
    DxFileUploaderModule,
  ]
})
export class AddTemplateModule { }
