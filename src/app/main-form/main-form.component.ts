import { Component, OnInit } from '@angular/core';
import { email } from '../interfaces/email';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})

export class MainFormComponent implements OnInit {

  email: email;
  emailList: email[];

  @ViewChild('emailForm') emailForm: any;

  constructor() { }

  ngOnInit(): void {
    this.email = {from: "", to: "", subject: "", body: ""};
    this.emailList = [];
    
  }

  submitEmail(): void {
    let newEmail = {
      from: this.email.from, 
      to: this.email.to, 
      subject: this.email.subject, 
      body: (this.email.body == "" ? "<no email body>" : this.email.body)
    };
    this.emailList.push(newEmail);
    this.emailForm.reset();
  }

}
