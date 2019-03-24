import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'new',component: AddAuthorComponent },
  { path: 'edit',component: EditAuthorComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'home', component: HomeComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
