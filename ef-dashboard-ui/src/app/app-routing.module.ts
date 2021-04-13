import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';



const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '/AppComponent', component: AppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}