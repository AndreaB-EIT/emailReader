import { Component, OnInit } from '@angular/core';
import { email } from '../../interfaces/email';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  emailsList: email[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emailsList = [{ from: 'sender@a.aa', to: 'receiver@a.aa', subject: 'test subject', body: 'test body'}];
  }

  

}
