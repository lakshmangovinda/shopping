import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  navbarOpen=false;

  ngOnInit(): void {
  }
  navtoggle(){
    this.navbarOpen = !this.navbarOpen;
    
    setTimeout(() => {
      this.navbarOpen = !this.navbarOpen;
      } , 2000);
      }
}
