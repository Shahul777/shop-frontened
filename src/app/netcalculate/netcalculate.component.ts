import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { ShopserviceService } from '../shopservice.service';
import { kdmAccounts, kdmLabourDetails } from '../kodambakkam/kdmDataModel';
import { tpmAccounts,tpmLabourDetails } from '../trustpuram/tpmDataModel';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-netcalculate',
  templateUrl: './netcalculate.component.html',
  styleUrls: ['./netcalculate.component.css']
})
export class NetcalculateComponent implements OnInit {
  products: any[]=[];

  sortOptions: any[]=[];

  sortOrder: any;

  sortField: any;
  sortKey: any

  constructor(private service : ShopserviceService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

  this.products=[{name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"},
  {name:"ajdh",price: "32",description : "sdjh",category: "adj"}]

    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

 





  }
  onSortChange(event : any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}
  onSubmit() { 



}
    // alert(JSON.stringify(this.loginForm.value));
}


