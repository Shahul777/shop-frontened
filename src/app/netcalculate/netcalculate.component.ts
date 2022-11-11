import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { ShopserviceService } from '../shopservice.service';
import { kdmAccounts, kdmLabourDetails } from '../kodambakkam/kdmDataModel';
import { tpmAccounts,tpmLabourDetails } from '../trustpuram/tpmDataModel';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CatalogUtilsService } from './catalog-utils.service';
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
  searchBoxPlaceholder = 'Search';
  searchText: any;

  searchParameters = ['name'];
  listOfConnections: any[] = [];


  constructor(private service : ShopserviceService, private primengConfig: PrimeNGConfig,
    
    private utilsService : CatalogUtilsService) { }
  filterConnectionEntities(): void {
    this.products = this.utilsService.filterEntities(
      this.searchText,
      this.listOfConnections,
      this.searchParameters
    );
  }
  ngOnInit(): void {

  this.products=[{name:"a",price: "32",description : "sdjh",category: "adj"},
  
  {name:"b",price: "32",description : "sdjh",category: "adj"},
  {name:"c",price: "32",description : "sdjh",category: "adj"},
  {name:"d",price: "32",description : "sdjh",category: "adj"},
  {name:"e",price: "32",description : "sdjh",category: "adj"},
  {name:"f",price: "32",description : "sdjh",category: "adj"},
  {name:"g",price: "32",description : "sdjh",category: "adj"},
  {name:"h",price: "32",description : "sdjh",category: "adj"},
  {name:"i",price: "32",description : "sdjh",category: "adj"},
  {name:"j",price: "32",description : "sdjh",category: "adj"},
  {name:"k",price: "32",description : "sdjh",category: "adj"},
  {name:"l",price: "32",description : "sdjh",category: "adj"},
  {name:"m",price: "32",description : "sdjh",category: "adj"},
  {name:"n",price: "32",description : "sdjh",category: "adj"},
  {name:"o",price: "32",description : "sdjh",category: "adj"},
  {name:"p",price: "32",description : "sdjh",category: "adj"},
  {name:"q",price: "32",description : "sdjh",category: "adj"},
  {name:"r",price: "32",description : "sdjh",category: "adj"}]
  this.listOfConnections=this.products
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


