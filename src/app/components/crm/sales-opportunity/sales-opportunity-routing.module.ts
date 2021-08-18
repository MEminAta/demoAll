import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOpportunityComponent } from './sales-opportunity.component';

const routes: Routes = [{ path: '', component: SalesOpportunityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesOpportunityRoutingModule { }
