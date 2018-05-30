import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactEmailComponent } from './contact-email/contact-email.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [ContactEmailComponent]
})
export class ContactModule { }
