import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactEmailComponent} from "./contact-email/contact-email.component";

const routes: Routes = [
  {
    path:      '',
    component: ContactEmailComponent
  }
  //TODO add tunneling flow example
// {path: PAGE.about, component: AboutComponent, canActivate: [WorkflowGuard]},
// {path: PAGE.contact, component: ContactComponent, canActivate: [WorkflowGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
