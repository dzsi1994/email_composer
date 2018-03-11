import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  emailPattern: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Regular expression for multiple emails 
    this.emailPattern = /^(\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,4}\s*?,?\s*?)+$/;
    this.initForm();
  }
  initForm() {
    this.emailForm = this.fb.group({
      to: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      cc: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      bcc: [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      subject: [null, Validators.compose([Validators.required, Validators.maxLength(100)])],
      message : [null, Validators.required]
      /*to: [null, Validators.required, Validators.pattern(this.emailPattern)],
      cc: [null, Validators.required, Validators.pattern(this.emailPattern)],
      bcc: [null, Validators.required, Validators.pattern(this.emailPattern)],
      subject: [null, Validators.required, ],
      message : [null, Validators.required]*/
    });
  }
  handleSubmit(emailForm: any) {
    console.log(emailForm);
    // this.router.navigate(['preview']);
  }
}
