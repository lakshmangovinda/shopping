import { Component, OnInit } from '@angular/core';
import { CartlistserviceService } from '../cartlistservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart :any[] = [];
  constructor(public service: CartlistserviceService) { }
availability:any;

data:any;
ngOnInit(): void {
  
this.cart.push( this.service.cartdata);
  this.availability = this.service.avail;
  console.log(this.cart)

  if(this.availability!==0){
    this.data = false
    
  }
  }

}
