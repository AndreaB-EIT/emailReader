import { Component, OnInit } from '@angular/core';
import { email } from '../../interfaces/email';
import { Router } from '@angular/router';
import { EmailManagementService } from 'src/app/services/email-management.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  emailToView: email;
  clearEmail: email;
  emailsList: email[];
  IDToDelete: number;

  constructor(private router: Router,
              private EMS: EmailManagementService) { }

  ngOnInit(): void {
    this.IDToDelete = 0;
    this.clearEmail = {from: "", to: "", subject: "", body: ""};

    if(this.EMS.emailsList==undefined) {
      this.EMS.emailsList = [];
      this.emailsList = [];

      this.emailsList.push(
        { 
          from: 'sender@a.aa', 
          to: 'receiver@a.aa', 
          subject: 'test subject', 
          body: 'test body'
        });
  
      this.emailsList.push(
        { 
          from: 'sender2@a.aa', 
          to: 'receiver2@a.aa', 
          subject: 'test subject 2', 
          body: 'test body 2'
        });
    }
    else this.emailsList = this.EMS.getAllEmails();
     
    this.EMS.emailsList = this.emailsList;
  }

  viewEmail(i: number): void {
    this.EMS.viewEmail(i);
    this.router.navigate(['/emailViewer']);
  }

  deleteEmail(i: number): void {
    this.EMS.deleteEmail(i);
  }

}
