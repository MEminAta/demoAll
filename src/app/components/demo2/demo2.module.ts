import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {Demo2Component} from './demo2.component';
import {DxDataGridModule} from "devextreme-angular/ui/data-grid";


@NgModule({
  declarations: [
    Demo2Component
  ],
  exports: [
    Demo2Component
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
  ],
})
export class Demo2Module {
}
