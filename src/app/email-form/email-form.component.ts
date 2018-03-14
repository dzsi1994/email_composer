import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShareService } from '../share-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  element: HTMLImageElement;
  emailPattern: any;
  file_srcs: string[] = [];
  constructor(
    private fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private shareService: ShareService,
    private router: Router
  ) {}

  ngOnInit() {
    // Regular expression for multiple emails
    this.emailPattern = /^(\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]{2,4}\s*?,?\s*?)+$/;
    this.initForm();
  }
  initForm() {
    this.emailForm = this.fb.group({
      to: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern)
        ])
      ],
      cc: [null, Validators.compose([Validators.pattern(this.emailPattern)])],
      bcc: [null, Validators.compose([Validators.pattern(this.emailPattern)])],
      subject: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(100)])
      ],
      message: [null, Validators.required]
    });
  }
  handleSubmit(emailForm: any) {
    emailForm.pictures = this.file_srcs;
    this.shareService.setFormData(emailForm);
    this.router.navigate(['preview-email']);
  }
  // The next two lines are just to show the resize debug
  // they can be removed
  // public debug_size_before: string[] = [];
  // public debug_size_after: string[] = [];

  // This is called when the user selects new files from the upload button
  fileChange(input) {
    this.readFiles(input.files);
  }
  // remove preview from dom
  remove(i: any) {
    this.file_srcs.splice(i, 1);
  }

  readFile(file, reader, callback) {
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    };

    // Read the file
    reader.readAsDataURL(file);
  }

  readFiles(files, index = 0) {
    // Create the file reader
    const reader = new FileReader();

    // If there is a file
    if (index in files) {
      // Start reading this file
      this.readFile(files[index], reader, result => {
        // Create an img element and add the image file data to it
        const img = document.createElement('img');
        img.src = result;

        // Send this img to the resize function (and wait for callback)
        this.resize(img, 250, 250, (resized_jpeg, before, after) => {
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file).
          this.file_srcs.push(resized_jpeg);

          // Read the next file;
          this.readFiles(files, index + 1);
        });
      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }

  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    // This will wait until the img is loaded before calling this function
    return (img.onload = () => {
      // Get the images current width and height
      let width = img.width;
      let height = img.height;

      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      // create a canvas object
      const canvas = document.createElement('canvas');

      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(img, 0, 0, width, height);

      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      const dataUrl = canvas.toDataURL('image/jpeg');

      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    });
  }
}
