import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})

export class EmailViewerComponent implements OnInit {

  from: string;
  to: string;
  subject: string;
  body: string;

  constructor(private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.from = this.route.snapshot.paramMap.get('test');
    //this.route.paramMap.subscribe(params => {
    //  this.from = params.get('test');
    //})
  }

}
