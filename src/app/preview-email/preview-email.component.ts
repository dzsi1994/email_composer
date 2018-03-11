import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../share-service.service';

@Component({
  selector: 'app-preview-email',
  templateUrl: './preview-email.component.html',
  styleUrls: ['./preview-email.component.css']
})
export class PreviewEmailComponent implements OnInit {
  form: any;
  constructor(private shareService: ShareServiceService) {
  /*  this.shareService.subscribe( (res: any) => {
    this.form = res;
    });*/
   }

  ngOnInit() {
  }

}
