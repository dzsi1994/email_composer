import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-email',
  templateUrl: './preview-email.component.html',
  styleUrls: ['./preview-email.component.css']
})
export class PreviewEmailComponent implements OnInit {
  form: any;
  constructor(private shareService: ShareService, private router: Router) {
   }

  ngOnInit() {
    this.shareService.formData$.subscribe((res:any) => {
      this.form = res;
    });
  }
  navigate() {
    this.router.navigate(['email-form']);
  }

}
