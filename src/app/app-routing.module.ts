import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { DisplayTableComponent } from './display-table/display-table.component';

const routes: Routes = [
  { path: 'insert-form', component: InsertFormComponent },
  { path: 'display-table', component: DisplayTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
