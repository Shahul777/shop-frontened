import { Component, OnInit } from '@angular/core';
import { houseAccount, rateSheet } from './houseDataModel';
import { ShopserviceService } from '../shopservice.service';
@Component({
  selector: 'app-housespends',
  templateUrl: './housespends.component.html',
  styleUrls: ['./housespends.component.css']
})
export class HousespendsComponent implements OnInit {
houseData : any
houseAccountDetail: houseAccount = <houseAccount>{};
houseRentSheet: rateSheet = <rateSheet>{};
showProgress: boolean =false
listSelect: any
listItem : any
  constructor(private service : ShopserviceService) { }

  ngOnInit(): void {
this.listItem=[{name: 'shahul', age:20},{name:'nadeem',age : 18}]
this.showProgress=true
    this.service.getHouseAccounts().subscribe((account : any)=>{
console.log(account)
       if(!account.length){
        this.houseData=[]
this.showProgress=false
       }
else{


  this.houseData=account

this.listItem=[]
  this.houseData.forEach((data:any)=>{

    data.TotalExpense=0
data.TotalExpense+=(data.Maintanence+data.Entertainment+data.Grocerry)


let obj ={totalExpense : data.TotalExpense , cashExpense : data.CashExpense, paytmExpense : data.PaytmExpense,
grocerry: data.Grocerry, entertainment : data.Entertainment, maintanence: data.Maintanence , moneyDeposit : data.MoneyDeposit}


this.listItem.push(obj)

  })


  this.showProgress=false
}



    },error=>{
      this.showProgress=false
    })






  }

}
