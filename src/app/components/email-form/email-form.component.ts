import {Component, OnInit} from '@angular/core';
import {Email} from '../../interfaces/email';
import {ViewChild} from '@angular/core';
import {EmailManagementService} from 'src/app/services/email-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent implements OnInit {

  email: Email;

  @ViewChild('emailForm') emailForm: any;

  constructor(private EMS: EmailManagementService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.email = {id: 0, from: '', to: '', subject: '', body: ''};
  }

  checkForDuplicates(id: number): boolean {
    return (this.EMS.findEmailInList(id) !== -1);
  }

  firstAvailableId(): number {
    for (let i = 0; i < this.EMS.emailsList.length; i++) {
      if (!this.checkForDuplicates(i)) {
        return i;
      }
    }
  }

  submitEmail(): void {
    const newEmail = {
      id: -2,
      from: this.email.from,
      to: this.email.to,
      subject: this.email.subject,
      body: (this.email.body === '' ? '<no email body>' : this.email.body)
    };

    if (!this.checkForDuplicates(this.EMS.emailsList.length)) {
      newEmail.id = this.EMS.emailsList.length;
    } else {
      newEmail.id = this.firstAvailableId();
    }

    this.EMS.addEmail(newEmail);
    this.emailForm.reset();
    this.router.navigate(['/emailsList']);
  }

}
