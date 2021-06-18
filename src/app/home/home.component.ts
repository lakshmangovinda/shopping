import { Component, OnInit } from '@angular/core';
import { CartlistserviceService } from '../cartlistservice.service';
import * as products from '../products.json'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product: any;
cartadded = 0;
filterdata:any;
  constructor(private service:CartlistserviceService) { }

  ngOnInit(): void {
    this.product = this.filterdata=(products  as  any).default;

  }

  filter(v:string) {
this.filterdata = this.product.filter((p:any) => p.p_category ===v );
console.log(this.filterdata);

   
  }
  send(data:any,available:number){
    this.cartadded;
    if(available>0 && available>=this.cartadded){
      console.log(available);
      this.cartadded = this.cartadded+1
      console.log(this.cartadded);
    
  
alert(this.cartadded +` of ${data.p_name}item added to the cart` );
this.service.cartdata = data;
this.service.avail = available+1;
    }
    else{
      alert("not availabe now");
    }

  }
 
    
    }

