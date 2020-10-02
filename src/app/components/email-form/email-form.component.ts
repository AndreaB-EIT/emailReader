import { Component, OnInit } from '@angular/core';
import { email } from '../../interfaces/email';
import { ViewChild } from '@angular/core';
import { EmailManagementService } from 'src/app/services/email-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {

  email: email;

  @ViewChild('emailForm') emailForm: any;

  constructor(private EMS: EmailManagementService,
              private router: Router) { }

  ngOnInit(): void {
    this.email = {from: "", to: "", subject: "", body: ""};
  }

  submitEmail(): void {
    let newEmail = {
      from: this.email.from, 
      to: this.email.to, 
      subject: this.email.subject, 
      body: (this.email.body == "" ? "<no email body>" : this.email.body)
    };
    this.EMS.createEmail(newEmail);
    this.emailForm.reset();
    this.router.navigate(['/emailsList']);
  }

}
