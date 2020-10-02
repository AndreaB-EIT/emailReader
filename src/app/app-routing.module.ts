import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmailViewerComponent } from './components/email-viewer/email-viewer.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { EmailsListComponent } from './components/emails-list/emails-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/emailsList', pathMatch: 'full' },
  { path: 'emailForm', component: EmailFormComponent },
  { path: 'emailViewer', component: EmailViewerComponent },
  { path: 'emailsList', component: EmailsListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
