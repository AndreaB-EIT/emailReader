import { Component, OnInit } from '@angular/core';
import { email } from '../../interfaces/email';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {

  email: email;
  emailsList: email[];

  @ViewChild('emailForm') emailForm: any;

  constructor() { }

  ngOnInit(): void {
    this.email = {from: "", to: "", subject: "", body: ""};
    this.emailsList = [];
    
  }

  submitEmail(): void {
    let newEmail = {
      from: this.email.from, 
      to: this.email.to, 
      subject: this.email.subject, 
      body: (this.email.body == "" ? "<no email body>" : this.email.body)
    };
    this.emailsList.push(newEmail);
    this.emailForm.reset();
  }

}
