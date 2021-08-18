import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {DxTextBoxModule} from "devextreme-angular/ui/text-box";
import {DxButtonModule} from "devextreme-angular/ui/button";


@NgModule({
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        DxTextBoxModule,
        DxButtonModule
    ]
})
export class LoginModule { }
