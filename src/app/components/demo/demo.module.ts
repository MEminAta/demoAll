import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DemoRoutingModule} from './demo-routing.module';
import {DemoComponent} from './demo.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {Demo2Module} from "../demo2/demo2.module";


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    DragDropModule,
    Demo2Module,
  ]
})
export class DemoModule {
}
