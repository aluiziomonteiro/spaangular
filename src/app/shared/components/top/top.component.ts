import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'spa-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor() { }

  public isMenuOpen: boolean = false;
  
  ngOnInit(): void {
  }

  closeSideNav() {
    this.sidenav.close();
  }
}
