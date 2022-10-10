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
  loginForm: any;
    loginDetail : boolean =true
    mainDetail: boolean =false
  submitted = false;
  activeIndex: number =0;
  items: any;

  products: any;

  sortOptions: any;

  sortOrder: any;

  sortField: any;
sortKey: any

  constructor(private service : ShopserviceService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.service.getKdmAccounts().subscribe((data) => {this.products = data
    
      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    
    }
    
    )

 




    this.loginDetail=true
    this.mainDetail=false
    this.items = [
      {label: 'Accounts Section'},
      {label: 'Labour Section'},
      
  ];
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });


  }

  onSortChange(event: any) {
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
    this.submitted = true;
    this.loginForm.value
    console.log("🚀 ~ file: netcalculate.component.ts ~ line 25 ~ NetcalculateComponent ~ onSubmit ~  this.loginForm.value",  this.loginForm.value)
if(this.loginForm.value.login==="shahul7" && this.loginForm.value.password==="shahul7"){
  this.loginDetail=false
  this.mainDetail=true


}
    // alert(JSON.stringify(this.loginForm.value));
}

stepNext(){
  this.activeIndex=1
}
stepBack(){
  this.activeIndex=0
}
}
