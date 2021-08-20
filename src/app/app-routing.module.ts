import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'sales-opportunity',
    loadChildren: () => import('./components/crm/sales-opportunity/sales-opportunity.module').then(m => m.SalesOpportunityModule)
  },
  { path: 'add-bid', loadChildren: () => import('./components/crm/add-bid/add-bid.module').then(m => m.AddBidModule) },
  { path: 'add-template', loadChildren: () => import('./components/crm/add-template/add-template.module').then(m => m.AddTemplateModule) },
  { path: 'demo', loadChildren: () => import('./components/demo/demo.module').then(m => m.DemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
