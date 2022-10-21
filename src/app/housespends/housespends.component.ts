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
  constructor(private service : ShopserviceService) { }

  ngOnInit(): void {

this.showProgress=true
    this.service.getHouseAccounts().subscribe((account : any)=>{
console.log(account)
       if(!account.length){
        this.houseData=[]
this.showProgress=false
       }
else{


  this.houseData=account


  this.houseData.forEach((data:any)=>{

    data.TotalExpense=0
data.TotalExpense+=(data.Maintanence+data.Entertainment+data.Grocerry)





  })


  this.showProgress=false
}



    },error=>{
      this.showProgress=false
    })






  }

}
