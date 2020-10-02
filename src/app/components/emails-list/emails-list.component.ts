import {Component, OnInit} from '@angular/core';
import {Email} from '../../interfaces/email';
import {Router} from '@angular/router';
import {EmailManagementService} from 'src/app/services/email-management.service';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  emailsList: Email[];
  IDToDelete: number;
  term: string;

  constructor(private router: Router,
              private EMS: EmailManagementService) {
  }

  ngOnInit(): void {
    this.term = '';
    this.IDToDelete = 0;
    this.emailsList = this.EMS.getAllEmails();

  }

  viewEmail(i: number): void {
    this.EMS.viewEmail(i);
    this.router.navigate(['/emailViewer']);
  }

  deleteEmail(id: number): void {
    this.EMS.deleteEmail(id);
  }

}
