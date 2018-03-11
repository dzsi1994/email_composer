import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EmailFormComponent } from './email-form/email-form.component';
import { PreviewEmailComponent } from './preview-email/preview-email.component';

const appRoutes: Routes = [
    { path: 'email-form', component: EmailFormComponent },
    { path: 'preview-email', component: PreviewEmailComponent },
    { path: '', redirectTo: '/email-form', pathMatch: 'full' },
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  
  export class AppRoutingModule { }