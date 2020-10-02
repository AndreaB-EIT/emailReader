import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Email} from 'src/app/interfaces/email';
import {EmailManagementService} from 'src/app/services/email-management.service';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})

export class EmailViewerComponent implements OnInit {

  emailToView: Email;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private emailManagementService: EmailManagementService) {
  }

  ngOnInit(): void {
    this.emailToView = this.emailManagementService.tmpViewEmail;
    // this.from = this.route.snapshot.paramMap.get('test');
    // this.route.paramMap.subscribe(params => {
    //  this.from = params.get('test');
    // })
  }

}
