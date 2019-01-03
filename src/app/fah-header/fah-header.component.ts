import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fah-header',
  templateUrl: './fah-header.component.html',
  styleUrls: ['./fah-header.component.css']
})
export class FahHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToHomePage() {
    window.location.href = '#/list';
  }

}
