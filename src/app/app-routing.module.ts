import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimlinesComponent} from "./components/timlines/timlines.component";

const routes: Routes = [
  {
    path: 'timeline',
    component: TimlinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
