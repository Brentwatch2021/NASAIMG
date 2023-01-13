import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDetailComponent } from './main-content-area/api-detail/api-detail.component';
import { MainContentAreaComponent } from './main-content-area/main-content-area.component';


const routes: Routes = 
[
  // Create multiple api detail pages with by  passing parameter to router
  // ['/ind-country', row.teamId!]
  {path: '',component:MainContentAreaComponent},{path: 'api-detail',component:ApiDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
