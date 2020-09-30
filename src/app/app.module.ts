import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule } from '@angular/forms';
//import { Ng2SearchPipe } from 'ng2-search-filter';
import { EmailsListComponent } from './components/emails-list/emails-list.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { EmailViewerComponent } from './components/email-viewer/email-viewer.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    //MainFormComponent,
    EmailsListComponent,
    EmailFormComponent,
    EmailViewerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    //Ng2SearchPipe,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
