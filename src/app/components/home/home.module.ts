import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DxTextBoxModule} from "devextreme-angular/ui/text-box";
import {DxGanttModule} from "devextreme-angular/ui/gantt";
import {FormsModule} from "@angular/forms";
import {DxDateBoxModule} from "devextreme-angular/ui/date-box";
import {DxNumberBoxModule} from "devextreme-angular/ui/number-box";


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DxTextBoxModule,
    DxGanttModule,
    FormsModule,
    DxDateBoxModule,
    DxNumberBoxModule,
  ]
})
export class HomeModule {
}
