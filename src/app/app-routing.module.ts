import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PAGE} from "./models/routing.model";
import {HomeComponent} from "./sections/home/home.component";
import {AboutComponent} from "./sections/about/about.component";
import {ContactComponent} from "./sections/contact/contact.component";

const routes: Routes = [
  {path: PAGE.home, component: HomeComponent},
  {path: PAGE.about, component: AboutComponent},
  {path: PAGE.contact, component: ContactComponent},

  //TODO add tunneling flow example
  // {path: PAGE.about, component: AboutComponent, canActivate: [WorkflowGuard]},
  // {path: PAGE.contact, component: ContactComponent, canActivate: [WorkflowGuard]},
  {path: '', redirectTo: PAGE.home, pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
