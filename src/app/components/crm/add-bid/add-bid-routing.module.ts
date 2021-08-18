import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBidComponent } from './add-bid.component';

const routes: Routes = [{ path: '', component: AddBidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBidRoutingModule { }
