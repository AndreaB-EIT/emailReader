import { Injectable } from '@angular/core';
import { email } from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailManagementService {

  emailsList: email[];
  tmpViewEmail: email;

  constructor() { }

  getAllEmails(): email[] {
    return this.emailsList;
  }

  getEmail(i: number): email {
    return this.emailsList[i];
  }

  viewEmail(i: number): void {
    this.tmpViewEmail = this.getEmail(i);
  }

  createEmail(input: email): void {
    //this.tmpCreateEmail = input;
    if(this.emailsList==undefined) this.emailsList=[];
    this.emailsList.push(input);
  }

  deleteEmail(i: number): void {
    this.emailsList.splice(i, 1);
  }
}
