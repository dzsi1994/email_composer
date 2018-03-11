import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { PreviewEmailComponent } from './preview-email/preview-email.component';
import { ShareService } from './share-service.service';
import { AttachmentComponent } from './attachment/attachment.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailFormComponent,
    PreviewEmailComponent,
    AttachmentComponent,
    SuccessMessageComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
