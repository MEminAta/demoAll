import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGeneratorComponent } from './table-generator.component';
import {DxDataGridModule} from "devextreme-angular/ui/data-grid";


@NgModule({
  declarations: [
    TableGeneratorComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
  ]
})
export class TableGeneratorModule { }
