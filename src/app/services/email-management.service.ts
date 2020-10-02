import {Injectable} from '@angular/core';
import {Email} from '../interfaces/email';

@Injectable({
  providedIn: 'root'
})
export class EmailManagementService {

  emailsList: Email[] = [
    {
      id: 0,
      from: 'sender0@a.aa',
      to: 'receiver0@a.aa',
      subject: 'test subject 0',
      body: 'test body 0'
    },
    {
      id: 1,
      from: 'sender1@a.aa',
      to: 'receiver1@a.aa',
      subject: 'test subject 1',
      body: 'test body 1'
    },
    {
      id: 2,
      from: 'sender2@a.aa',
      to: 'receiver2@a.aa',
      subject: 'test subject 2',
      body: 'test body 2'
    },
    {
      id: 3,
      from: 'sender3@a.aa',
      to: 'receiver3@a.aa',
      subject: 'test subject 3',
      body: 'test body 3'
    }
  ];
  tmpViewEmail: Email;

  constructor() {
  }

  getAllEmails(): Email[] {
    return this.emailsList;
  }

  getEmail(id: number): Email {
    return this.emailsList[this.findEmailInList(id)];
  }

  findEmailInList(id: number): number {
    for (let i = 0; i < this.emailsList.length; i++) {
      if (this.emailsList[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  viewEmail(id: number): void {
    this.tmpViewEmail = this.getEmail(id);
  }

  addEmail(input: Email): void {
    this.emailsList.push(input);
  }

  deleteEmail(id: number): void {
    const i: number = this.findEmailInList(id);
    if (i !== -1) {
      this.emailsList.splice(i, 1);
    } else {
      alert('An error occurred, and this shouldn\'t technically be possible.');
    }
  }
}
