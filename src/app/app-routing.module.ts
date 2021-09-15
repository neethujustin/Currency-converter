import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { CurrencyGlobalComponent } from './currency-global/currency-global.component';

const routes: Routes = [{ path: 'converter', component: CurrencyConvertComponent },   
{ path: 'global', component: CurrencyGlobalComponent },   
{ path: '', redirectTo: 'converter', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
