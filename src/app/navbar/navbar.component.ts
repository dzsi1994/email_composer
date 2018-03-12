import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  preview: boolean;
  location: Location;
  constructor(private router: Router, location: Location) {
    this.location = location;
   }
  
  ngOnInit() {}
  public isHidden() {
    const list = ['/preview-email'];
    const route = this.location.path();

    return list.indexOf(route) > -1;
  }

}
