import { Component, OnInit } from '@angular/core';
import { Validators,FormControl,FormGroup } from '@angular/forms';
import { ShopserviceService } from '../shopservice.service';
import { kdmAccounts, kdmLabourDetails,combinedMonth,kdmMonth,rentSheet } from '../kodambakkam/kdmDataModel';
import { tpmAccounts,tpmLabourDetails, tpmMonth } from '../trustpuram/tpmDataModel';
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { CatalogUtilsService } from './catalog-utils.service';

import * as e from 'express';

@Component({
  selector: 'app-netcalculate',
  templateUrl: './netcalculate.component.html',
  styleUrls: ['./netcalculate.component.css']
})
export class NetcalculateComponent implements OnInit {

  bata1: any
  bata2: any;
  food: any;
  tajSalary: any;
  noorSalary: any;
  assanSalary: any;
  maniSalary: any;
  rasheedSalary: any;
  paperRate: any;
  tonerRate: any;
  singleRate: any;
  b2bRate: any;
  copiesPerToner: any;
  tpmRent: any;
  kdmRent: any;
  currentBillKdm: any;
  currentBillTpm: any;
  tonerCost: any;
  rentSheet: rentSheet = <rentSheet>{};



  products: any[]=[];

  sortOptions: any[]=[];

  sortOrder: any;

  sortField: any;
  sortKey: any
  searchBoxPlaceholder = 'Search';
  searchText: any;

  searchParameters = ['Year'];
  listOfConnections: any[] = [];
  listOfConnections2 : any[] =[];
  listOfConnections3 : any[] =[]

  combinedName : string = "Combined"
  kdmName : string = "Kodmbakam"
  tpmName  : string = "Trustpuram"


kdmMonth : any=[]
tpmMonth : any=[]
combinedMonth : any=[]
showProgress : boolean=false
  constructor( private service : ShopserviceService, private primengConfig: PrimeNGConfig,
    
    private utilsService : CatalogUtilsService) { }
  filterConnectionEntities(): void {
    this.combinedMonth = this.utilsService.filterEntities(
      this.searchText,
      this.listOfConnections,
      this.searchParameters
    );
    this.kdmMonth = this.utilsService.filterEntities(
      this.searchText,
      this.listOfConnections2,
      this.searchParameters
    );

    this.tpmMonth = this.utilsService.filterEntities(
      this.searchText,
      this.listOfConnections3,
      this.searchParameters
    );


    console.log(this.combinedMonth)
    console.log(this.kdmMonth)
    console.log(this.tpmMonth)
  }

  monthList : any = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];
  display1: boolean =false
  display2: boolean =false
showCal : boolean =false
dateCalc : any
  ngOnInit(): void {
    this.showProgress=true
    this.showCal=false
this.display1=false
this.display2=false
this.combinedMonth=[]

this.service.getRateSheet().subscribe((rate: any)=>{
  this.rentSheet=rate[0]

let val1 : number =+ this.rentSheet.bata1
this.bata1=val1
let val2 : number =+ this.rentSheet.bata2
this.bata2=val2
let val3 : number =+ this.rentSheet.food
this.food=val3
let val4 : number =+ this.rentSheet.tajSalary
this.tajSalary=val4

let val5 : number =+ this.rentSheet.noorSalary
this.noorSalary=val5
let val6 : number =+ this.rentSheet.assanSalary
this.assanSalary=val6
let val7 : number =+ this.rentSheet.maniSalary
this.maniSalary=val7
let val8 : number =+ this.rentSheet.rasheedSalary
this.rasheedSalary=val8
let paper8 : number =+ this.rentSheet.paperRate
this.paperRate= paper8 




let paper9 : number =+ this.rentSheet.tonerRate
this.tonerRate= paper9
let paper10 : number =+ this.rentSheet.singleRate
this.singleRate= paper10
let paper11 : number =+ this.rentSheet.b2bRate
this.b2bRate= paper11

let paper12 : number =+ this.rentSheet.copiesPerToner
this.copiesPerToner= paper12 

this.tonerCost= this.tonerRate/this.copiesPerToner


let val9 : number =+ this.rentSheet.tpmRent
this.tpmRent=val9
let val10 : number =+ this.rentSheet.kdmRent
this.kdmRent=val10
let val11 : number =+ this.rentSheet.currentBillKdm
this.currentBillKdm=val11
let val12 : number =+ this.rentSheet.currentBillTpm
this.currentBillTpm=val12

let val : number = + this.rentSheet.tajSalary
  
})


this.initializeCombined()
    this.service.getKdmMonth().subscribe((kdmObj: any) => {
      this.kdmMonth=kdmObj
      this.listOfConnections2=this.kdmMonth
      this.service.getTpmMonth().subscribe((tpmObj: any) => {
        console.log(event)
        this.tpmMonth=tpmObj
        this.listOfConnections3=this.tpmMonth
        this.kdmMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });
        this.tpmMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });

        console.log(this.kdmMonth, this.tpmMonth)
if(this.kdmMonth.length===this.tpmMonth.length  && this.kdmMonth.length){
let success = true
  this.kdmMonth.forEach((kdm : any)=>{
    let innerCheck = false
    this.tpmMonth.forEach((tpm: any)=>{
console.log(kdm.Month,tpm.Month)
console.log(kdm.Year, tpm.Year)
      if(kdm.Month == tpm.Month && kdm.Year == tpm.Year){

        innerCheck= true
        


      }


    })

    if(innerCheck===false){
      success=false
    }
  })
if(success){
  this.loadCombined()

}
else{
  this.display1=false
  this.display2=true
  
  this.showProgress=false

}
 
}
     else{
this.display1=false
this.display2=true

this.showProgress=false
     }
        
        },
          error => {
            console.log(error);
            this.showProgress=false
          })
          
      
    
      
      },
        error => {
          console.log(error);
          this.showProgress=false
        })
    



    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

 





  }

  combinedObj: combinedMonth = <combinedMonth>{};
initializeCombined(){

  this.combinedObj.Month=""
  this.combinedObj.Year=0
  this.combinedObj.TotalIncome=0
  this.combinedObj.NetProfit=0
  this.combinedObj.TotalExpense=0
  this.combinedObj.BlackReading=0
  this.combinedObj.ColourReading=0
  this.combinedObj.PaperUsed=0
  this.combinedObj.PaperCost=0
  this.combinedObj.Rent=0
  this.combinedObj.CurrentBill=0


  this.combinedObj.LabourSalary=0
  this.combinedObj.ExpenseCalculated=0
  this.combinedObj.isExecuted=0
  this.combinedObj.isEdited =0


}
addClicked(){
  this.showCal=true
  this.display1=false
  this.display2=false
}

  loadCombined(){
console.log(this.kdmMonth)
console.log(this.tpmMonth)


this.service.getCombinedMonth().subscribe((combinedObj: any) => {

  this.combinedMonth = combinedObj
  this.listOfConnections=this.combinedMonth

  console.log("🚀 ~ file: ~ this.combinedMonth:", this.combinedMonth)
this.checkCombined()
  },
    error => {
      console.log(error);
      this.showProgress=false
    })



  }
  saveExtraCombined: any=[]

  


  checkCombined(){
    if(!this.combinedMonth.length){
      // this.kdmMonth.forEach((kdm : any)=>{
      //   // let demoCombined = Util.creatD
      //   let demoCombined = JSON.parse(JSON.stringify(this.combinedObj));
      //   demoCombined.Month=kdm.Month
      //   demoCombined.Year= kdm.Year
      // this.combinedMonth.push(demoCombined)
      
      
      
      
      // })
      for(let i=0 ; i < this.kdmMonth.length; i++){



        let demoCombined = JSON.parse(JSON.stringify(this.combinedObj));
        demoCombined.TotalIncome= this.kdmMonth[i].TotalIncome + this.tpmMonth[i].TotalIncome
        demoCombined.NetProfit = this.kdmMonth[i].NetProfit + this.tpmMonth[i].NetProfit
        demoCombined.TotalExpense = this.kdmMonth[i].TotalExpense + this.tpmMonth[i].TotalExpense
        demoCombined.BlackReading = this.kdmMonth[i].BlackReading + this.tpmMonth[i].BlackReading
        demoCombined.ColourReading = this.kdmMonth[i].ColourReading + this.tpmMonth[i].ColourReading
        demoCombined.PaperUsed = this.kdmMonth[i].PaperUsed + this.tpmMonth[i].PaperUsed
        demoCombined.PaperCost = this.kdmMonth[i].PaperCost + this.tpmMonth[i].PaperCost

        demoCombined.Rent = this.kdmMonth[i].Rent + this.tpmMonth[i].Rent
        demoCombined.CurrentBill = this.kdmMonth[i].CurrentBill + this.tpmMonth[i].CurrentBill
        demoCombined.LabourSalary = this.kdmMonth[i].LabourSalary + this.tpmMonth[i].LabourSalary
        demoCombined.ExpenseCalculated = this.kdmMonth[i].ExpenseCalculated + this.tpmMonth[i].ExpenseCalculated


        demoCombined.Month=this.kdmMonth[i].Month
        demoCombined.Year= this.kdmMonth[i].Year
      this.combinedMonth.push(demoCombined)

      }
      this.listOfConnections=this.combinedMonth
      console.log("COMBINED ", this.combinedMonth)
      this.combinedMonth.forEach((combined: any)=>{

        // let index = this.combinedMonth.indexOf(combined)

        this.service.addCombinedMonth(combined).subscribe((combinedObj: any)=>{
      
          console.log("SAVEDDDD")
    
    
          
          this.combinedMonth.sort((a : any, b: any) => {
            if (a.Year === b.Year) {
              // If the years are the same, compare by month
              const months = this.monthList
              const aMonth = months.indexOf(a.Month);
              const bMonth = months.indexOf(b.Month);
              return aMonth - bMonth;
            } else {
              // Otherwise, compare by year
              return a.Year - b.Year;
            }
          });
    
          this.display1=true
          this.display2=false
          this.showProgress=false
    
    
    
    
          
            },
            (error: any)=>{
              this.showProgress=false
          
            })
      

      })
      




        }
      
        else{
          this.listOfConnections=this.combinedMonth
      if(this.kdmMonth.length === this.combinedMonth.length ){
        this.combinedMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });
      
      
        let success = true
        this.kdmMonth.forEach((kdm : any)=>{
          let innerCheck = false
          this.combinedMonth.forEach((combined: any)=>{
      
            if(kdm.Month == combined.Month && kdm.Year == combined.Year){
      
              // success= false
              innerCheck=true
      
      
            }
      
      
          })
          if(innerCheck==false){
            success=false
          }
        })
      if(success){
        // this.loadCombined()


  for(let i =0 ; i < this.combinedMonth.length; i++){

    if(!this.kdmMonth[i].isExecuted || !this.tpmMonth[i].isExecuted){

      let demoCombined = JSON.parse(JSON.stringify(this.combinedMonth[i]));
      demoCombined.TotalIncome= this.kdmMonth[i].TotalIncome + this.tpmMonth[i].TotalIncome
      demoCombined.NetProfit = this.kdmMonth[i].NetProfit + this.tpmMonth[i].NetProfit
      demoCombined.TotalExpense = this.kdmMonth[i].TotalExpense + this.tpmMonth[i].TotalExpense
      demoCombined.BlackReading = this.kdmMonth[i].BlackReading + this.tpmMonth[i].BlackReading
      demoCombined.ColourReading = this.kdmMonth[i].ColourReading + this.tpmMonth[i].ColourReading
      demoCombined.PaperUsed = this.kdmMonth[i].PaperUsed + this.tpmMonth[i].PaperUsed
      demoCombined.PaperCost = this.kdmMonth[i].PaperCost + this.tpmMonth[i].PaperCost

      demoCombined.Rent = this.kdmMonth[i].Rent + this.tpmMonth[i].Rent
      demoCombined.CurrentBill = this.kdmMonth[i].CurrentBill + this.tpmMonth[i].CurrentBill
      demoCombined.LabourSalary = this.kdmMonth[i].LabourSalary + this.tpmMonth[i].LabourSalary
      demoCombined.ExpenseCalculated = this.kdmMonth[i].ExpenseCalculated + this.tpmMonth[i].ExpenseCalculated


      demoCombined.Month=this.kdmMonth[i].Month
      demoCombined.Year= this.kdmMonth[i].Year
      demoCombined.isEdited=0
      demoCombined.isExecuted=0

      this.combinedMonth[i]= demoCombined


    }
  }
      
        this.display1=true
        this.display2=false
        this.showProgress=false
      }
      else{
        this.display1=false
        this.display2=true
        
        this.showProgress=false
      
      }
      
      
      
      
      }
      else if(this.kdmMonth.length > this.combinedMonth.length){
        // this.display1=false
        // this.display2=true
        
        // this.showProgress=false
        this.combinedMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });
        this.saveExtraCombined = []

        const extraObjects = this.kdmMonth.filter((elem: any) => !this.combinedMonth.some((smallElem: any) => smallElem.Month === elem.Month && smallElem.Year === elem.Year));
        extraObjects.forEach((kdm : any)=>{
          // let demoCombined = Util.creatD
          let demoCombined = JSON.parse(JSON.stringify(this.combinedObj));
          demoCombined.Month=kdm.Month
          demoCombined.Year= kdm.Year
        this.combinedMonth.push(demoCombined)
        this.saveExtraCombined.push(demoCombined)
        
        
        
        
        })


        for(let i=0 ; i < this.saveExtraCombined.length; i++){

          let index = 0

          this.kdmMonth.forEach((kdmObj : any)=>{

            if(kdmObj.Month === this.saveExtraCombined[i].Month && kdmObj.Year === this.saveExtraCombined[i].Year){

index = this.kdmMonth.indexOf(kdmObj)
            }
          })



          let demoCombined = JSON.parse(JSON.stringify(this.saveExtraCombined[i]));
          demoCombined.TotalIncome= this.kdmMonth[index].TotalIncome + this.tpmMonth[index].TotalIncome
          demoCombined.NetProfit = this.kdmMonth[index].NetProfit + this.tpmMonth[index].NetProfit
          demoCombined.TotalExpense = this.kdmMonth[index].TotalExpense + this.tpmMonth[index].TotalExpense
          demoCombined.BlackReading = this.kdmMonth[index].BlackReading + this.tpmMonth[index].BlackReading
          demoCombined.ColourReading = this.kdmMonth[index].ColourReading + this.tpmMonth[index].ColourReading
          demoCombined.PaperUsed = this.kdmMonth[index].PaperUsed + this.tpmMonth[index].PaperUsed
          demoCombined.PaperCost = this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost
  
          demoCombined.Rent = this.kdmMonth[index].Rent + this.tpmMonth[index].Rent
          demoCombined.CurrentBill = this.kdmMonth[index].CurrentBill + this.tpmMonth[index].CurrentBill
          demoCombined.LabourSalary = this.kdmMonth[index].LabourSalary + this.tpmMonth[index].LabourSalary
          demoCombined.ExpenseCalculated = this.kdmMonth[index].ExpenseCalculated + this.tpmMonth[index].ExpenseCalculated
  
  
          demoCombined.Month=this.kdmMonth[index].Month
          demoCombined.Year= this.kdmMonth[index].Year
        // this.combinedMonth.push(demoCombined)
        this.saveExtraCombined[i]= demoCombined

        // this.combinedMonth[i]= demoCombined


        }
        this.combinedMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });

        for(let i =0 ; i < this.combinedMonth.length; i++){

          if(!this.kdmMonth[i].isExecuted || !this.tpmMonth[i].isExecuted){
      
            let demoCombined = JSON.parse(JSON.stringify(this.combinedMonth[i]));
            demoCombined.TotalIncome= this.kdmMonth[i].TotalIncome + this.tpmMonth[i].TotalIncome
            demoCombined.NetProfit = this.kdmMonth[i].NetProfit + this.tpmMonth[i].NetProfit
            demoCombined.TotalExpense = this.kdmMonth[i].TotalExpense + this.tpmMonth[i].TotalExpense
            demoCombined.BlackReading = this.kdmMonth[i].BlackReading + this.tpmMonth[i].BlackReading
            demoCombined.ColourReading = this.kdmMonth[i].ColourReading + this.tpmMonth[i].ColourReading
            demoCombined.PaperUsed = this.kdmMonth[i].PaperUsed + this.tpmMonth[i].PaperUsed
            demoCombined.PaperCost = this.kdmMonth[i].PaperCost + this.tpmMonth[i].PaperCost
      
            demoCombined.Rent = this.kdmMonth[i].Rent + this.tpmMonth[i].Rent
            demoCombined.CurrentBill = this.kdmMonth[i].CurrentBill + this.tpmMonth[i].CurrentBill
            demoCombined.LabourSalary = this.kdmMonth[i].LabourSalary + this.tpmMonth[i].LabourSalary
            demoCombined.ExpenseCalculated = this.kdmMonth[i].ExpenseCalculated + this.tpmMonth[i].ExpenseCalculated
      
      
            demoCombined.Month=this.kdmMonth[i].Month
            demoCombined.Year= this.kdmMonth[i].Year
            demoCombined.isEdited=0
            demoCombined.isExecuted=0
      
            this.combinedMonth[i]= demoCombined
      
      
          }
        }

        this.saveExtraCombined.forEach((combined: any)=>{
      
          this.service.addCombinedMonth(combined).subscribe((combinedObj: any)=>{
        
        console.log("SAVEDDDD")
  
  
        
        this.combinedMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });
  
        this.display1=true
        this.display2=false
        this.showProgress=false
  
  
  
  
        
          },
          (error: any)=>{
            this.showProgress=false
        
          })
        })
        

      
      }
      else{
        this.combinedMonth.sort((a : any, b: any) => {
          if (a.Year === b.Year) {
            // If the years are the same, compare by month
            const months = this.monthList
            const aMonth = months.indexOf(a.Month);
            const bMonth = months.indexOf(b.Month);
            return aMonth - bMonth;
          } else {
            // Otherwise, compare by year
            return a.Year - b.Year;
          }
        });
        let saveExtraCombined : any

        const extraObjects = this.combinedMonth.filter((elem: any) => !this.kdmMonth.some((smallElem: any) => smallElem.Month === elem.Month && smallElem.Year === elem.Year));

        const filteredArray = this.combinedMonth.filter((elem: any) => !extraObjects.some((delElem : any) => delElem.Month === elem.Month && delElem.Year === elem.Year));
this.combinedMonth=filteredArray
this.listOfConnections=this.combinedMonth

extraObjects.forEach((extra : any)=>{
  this.service.deleteCombinedMonthById(extra.id).subscribe((deleted : any)=>{

    console.log("DELETED")

    this.combinedMonth.sort((a : any, b: any) => {
      if (a.Year === b.Year) {
        // If the years are the same, compare by month
        const months = this.monthList
        const aMonth = months.indexOf(a.Month);
        const bMonth = months.indexOf(b.Month);
        return aMonth - bMonth;
      } else {
        // Otherwise, compare by year
        return a.Year - b.Year;
      }
    });
    this.display1=true
        this.display2=false
        this.showProgress=false
  

  },
  (error: any)=>{
    console.log(error)
    this.showProgress=false
  })
})

      }
      
        }
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
isTpmEdit: boolean =false
isCombinedEdit : boolean =false
isKdmEdit : boolean =false
editKdmTpmObj : any;
editKdmObj: any;
editTpmObj : any;
editCombinedObj: any;
title : string =""

newKdmObj :kdmMonth = <kdmMonth>{
 
  "Month": "",
  "Year": 0,
  "TotalIncome": 0,
  "NetProfit": 0,
  "TotalExpense": 0,
  "BlackReading": 0,
  "ColourReading": 0,
  "TajPresent": 0,
  "NoorPresent": 0,
  "LabourSalary": 0,
  "Rent": 0,
  "CurrentBill": 0,
  "Expenses": 0,
  "ExpenseCalculated": 0,
  "ExpensePercentCalculate": 0,
  "PaperDay1": 0,
  "PaperLast": 0,
  "PaperArrivedTotal": 0,
  "PaperUsed": 0,
  "PaperCost": 0,
  "PaperSent": 0,
  "isEdited": 0,
  "isExecuted": 0
}

newTpmObj : tpmMonth =<tpmMonth>{
  
  "Month": "",
  "Year": 0,
  "TotalIncome": 0,
  "NetProfit": 0,
  "TotalExpense": 0,
  "BlackReading": 0,
  "ColourReading": 0,
  "AssanPresent": 0,
  "ManiPresent": 0,
  "RasheedPresent": 0,
  "LabourSalary": 0,
  "Rent": 0,
  "CurrentBill": 0,
  "Expenses": 0,
  "ExpenseCalculated": 0,
  "ExpensePercentCalculate": 0,
  "PaperDay1": 0,
  "PaperLast": 0,
  "PaperArrivedTotal": 0,
  "PaperUsed": 0,
  "PaperCost": 0,
  "PaperSent": 0,
  "isEdited": 0,
  "isExecuted": 0
}

newCombinedObj : combinedMonth = <combinedMonth>{
  
  "Month": "",
  "Year": 0,
  "TotalIncome": 0,
  "NetProfit": 0,
  "TotalExpense": 0,
  "BlackReading": 0,
  "ColourReading": 0,
  "PaperUsed": 0,
  "PaperCost": 0,
  "Rent": 0,
  "CurrentBill": 0,
  "LabourSalary": 0,
  "ExpenseCalculated": 0,
  "isEdited": 0,
  "isExecuted": 0
}
selectedIndex : any = 0
tpmEdit(index : any){
  index = this.combinedMonth.indexOf(index)

this.selectedIndex=index
  this.editTpmObj=this.tpmMonth[index]

  this.title="Trustpuram Monthly Data" + " " + this.editTpmObj.Month + this.editTpmObj.Year
  this.isTpmEdit=true
  this.isCombinedEdit=false
  this.isKdmEdit=false

}
combinedEdit(index : any){
  index = this.combinedMonth.indexOf(index)

  this.selectedIndex=index
this.editCombinedObj=this.combinedMonth[index]
this.title="Combined Monthly Data" + " " + this.editCombinedObj.Month + this.editCombinedObj.Year
  this.isTpmEdit=false
  this.isCombinedEdit=true
  this.isKdmEdit=false
}

kdmEdit(index : any){
  index = this.combinedMonth.indexOf(index)

  this.selectedIndex=index
this.editKdmObj=this.kdmMonth[index]

this.title="Kodambakkam Monthly Data" + " " + this.editKdmObj.Month + this.editKdmObj.Year
  this.isTpmEdit=false
  this.isCombinedEdit=false
  this.isKdmEdit=true
}

cancelEdit(){

  this.isTpmEdit=false
  this.isCombinedEdit=false
  this.isKdmEdit=false
}
saveEdit(){

if(this.isTpmEdit){
  this.editTpmObj.isExecuted=0
  this.editTpmObj.isEdited=1

this.showProgress=true



this.service.editTpmMonthById( this.editTpmObj,this.editTpmObj.id).subscribe((event : any)=>{
  this.showProgress=false
this.ngOnInit()

},
(error: any)=>{
  this.showProgress=false
  console.log(error)
})
console.log(this.editTpmObj)
}
else if(this.isKdmEdit){
  this.editKdmObj.isExecuted=0
  this.editKdmObj.isEdited=1


  this.showProgress=true
  this.service.editKdmMonthById( this.editKdmObj,this.editKdmObj.id,).subscribe((event : any)=>{

    this.showProgress=false
    this.ngOnInit()
  },
  (error: any)=>{

    this.showProgress=false
    console.log(error)
  })
console.log(this.editKdmObj)

}

else{
  this.editCombinedObj.isExecuted=0
  this.editCombinedObj.isEdited=1

  this.showProgress=true
  this.service.editCombinedMonthById( this.editCombinedObj,this.editCombinedObj.id).subscribe((event : any)=>{

    this.showProgress=false
    this.ngOnInit()
  },
  (error: any)=>{

    this.showProgress=false
    console.log(error)
  })
  console.log(this.editCombinedObj)
}
this.isTpmEdit=false
this.isCombinedEdit=false
this.isKdmEdit=false
}
deleteEdit(index : any){
 index = this.combinedMonth.indexOf(index)
  this.isTpmEdit=false
this.isCombinedEdit=false
this.isKdmEdit=false
  this.showProgress=true

  console.log(this.tpmMonth)
  console.log(this.kdmMonth)
  console.log(this.combinedMonth)
let tpmObjId = this.tpmMonth[index].id
let kdmObjId =  this.kdmMonth[index].id
let combinedObjId= this.combinedMonth[index].id

this.service.deleteCombinedMonthById(combinedObjId).subscribe((event1 : any)=>{

  this.service.deleteTpmMonthById(tpmObjId).subscribe((event2 : any)=>{

    this.service.deleteKdmMonthById(kdmObjId).subscribe((event3 : any)=>{
this.showProgress=false
this.ngOnInit()
    },(error: any)=>{
      console.log(error)
      this.showProgress=false
    })

  },(error: any)=>{

    console.log(error)
    this.showProgress=false
  }
  )

},(error: any)=>{

  console.log(error)
  this.showProgress=false
})




}
monthSelected : string =""
yearSelected : number =0
getMonthName(month: number): string {
  return new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' });
}
dateSelected(event : any){
let date = event

const month = date.getMonth() + 1; // add 1 to get the correct month number

this.monthSelected= this.getMonthName(month)


const year = date.getFullYear();

this.yearSelected= year

console.log(this.yearSelected, this.monthSelected)


this.checkAddingNewEntry()





}

checkAddingNewEntry(){
  let dataPresent = false
this.combinedMonth.forEach((combined : any)=>{


  if(combined.Month === this.monthSelected && combined.Year===this.yearSelected){

dataPresent=true
  }
})

if( dataPresent){
  this.showCal=false
this.display1=true
this.display2=false


}
else{

  
  this.showCal=false
  this.display1=true
  this.display2=false
  this.showProgress=true
  let combinedObj = JSON.parse(JSON.stringify(this.newCombinedObj));
  let kdmObj = JSON.parse(JSON.stringify(this.newKdmObj));
  let tpmObj = JSON.parse(JSON.stringify(this.newTpmObj));

  combinedObj.Month= this.monthSelected
  combinedObj.Year= this.yearSelected
  kdmObj.Month =this.monthSelected
  kdmObj.Year = this.yearSelected
  tpmObj.Month=this.monthSelected
  tpmObj.Year=this.yearSelected

  this.service.addCombinedMonth(combinedObj).subscribe((event1 : any)=>{

    this.service.addTpmMonth(tpmObj).subscribe((event2 : any)=>{
  
      this.service.addKdmMonth(kdmObj).subscribe((event3 : any)=>{


  this.showProgress=false



  this.ngOnInit()
      },(error: any)=>{
        console.log(error)
        this.showProgress=false
      })
  
    },(error: any)=>{
  
      console.log(error)
      this.showProgress=false
    }
    )
  
  },(error: any)=>{
  
    console.log(error)
    this.showProgress=false
  })
  
  



}


}

combinedEditCheck(index : any){
  index = this.combinedMonth.indexOf(index)
  if(!this.kdmMonth[index].isExecuted || !this.tpmMonth[index].isExecuted){

    return true
  }
  else{

    return false
  }
 
}
combinedExecuteCheck(index : any){
  index = this.combinedMonth.indexOf(index)
  if(!this.kdmMonth[index].isExecuted || !this.tpmMonth[index].isExecuted){

return true
  }

else if(!this.combinedMonth[index].isEdited){
    return true
  }
  else{
    return false
  }
 
}
combinedOutputCheck(index : any){
  index = this.combinedMonth.indexOf(index)
  if(!this.kdmMonth[index].isExecuted || !this.tpmMonth[index].isExecuted){

    return true
      }
    
    else if(!this.combinedMonth[index].isEdited){
        return true
      }
      else if (!this.combinedMonth[index].isExecuted ){
        return true
      }
      else{
        return false
      }
}

kdmEditCheck(index : any){

  return false
}
kdmExecuteCheck(index : any){
  index = this.combinedMonth.indexOf(index)

  if(!this.kdmMonth[index].isEdited){
    return true
  }
else{
  return false
}
}

kdmOutputCheck(index : any){
  index = this.combinedMonth.indexOf(index)

  if(!this.kdmMonth[index].isEdited){
    return true
  }
else if(!this.kdmMonth[index].isExecuted){
  return true
}
else{
  return false

}
 
}


tpmEditCheck(index : any){
  return false
}
tpmExecuteCheck(index : any){
  index = this.combinedMonth.indexOf(index)


  console.log(this.tpmMonth)
  if(!this.tpmMonth[index].isEdited){
    return true
  }
else{
  return false
}
}

tpmOutputCheck(index : any){
  index = this.combinedMonth.indexOf(index)

  if(!this.tpmMonth[index].isEdited){
    return true
  }
else if(!this.tpmMonth[index].isExecuted){
  return true
}
else{
  return false

}
}
combinedExecute(entry : any){
}

combinedOutput(entry : any){


}
executeSpin : boolean =false
kdmExecute(index : any){
  console.log(index)
  this.executeSpin=true
  index = this.combinedMonth.indexOf(index)
console.log(this.kdmMonth)
console.log(index)
let kdmObj  = JSON.parse(JSON.stringify(this.kdmMonth[index]));
let tpmObj = JSON.parse(JSON.stringify(this.tpmMonth[index]));
let combinedObj = JSON.parse(JSON.stringify(this.combinedMonth[index]));

console.log(kdmObj)
let expense =0
if(!kdmObj.TajPresent || !kdmObj.NoorPresent){
expense+= kdmObj.LabourSalary

}
else{
let salary = Math.ceil((kdmObj.TajPresent * this.tajSalary) + (kdmObj.NoorPresent * this.noorSalary))
  expense += salary

}
if(!kdmObj.ExpensePercentCalculate){
let income = kdmObj.TotalIncome + tpmObj.TotalIncome

 let kdmPercent = Math.ceil(((kdmObj.TotalIncome / income) * 100))
 let tpmPercent = (tpmObj.TotalIncome / income) * 100
kdmObj.ExpensePercentCalculate= kdmPercent
 kdmObj.ExpenseCalculated=  Math.ceil((kdmObj.Expenses / 100) * kdmPercent)
  expense+=kdmObj.ExpenseCalculated
}
else{

  kdmObj.ExpenseCalculated=  Math.ceil(( kdmObj.Expenses/100) * kdmObj.ExpensePercentCalculate )
  expense+=kdmObj.ExpenseCalculated
}

if(!kdmObj.PaperUsed|| !kdmObj.PaperCost ){
  if(kdmObj.PaperCost){

    expense+=kdmObj.PaperCost


  }
  else{

let arrived = kdmObj.PaperArrivedTotal
let day1 = kdmObj.PaperDay1
let sent =kdmObj.PaperSent
let dayLast = kdmObj.PaperLast

if(sent < tpmObj.PaperArrivedTotal){
  sent = tpmObj.PaperArrivedTotal
}

let paperUsed = (arrived + day1) - (sent + dayLast)
let paperCost =0
kdmObj.PaperSent= sent
kdmObj.PaperUsed= paperUsed

paperCost = (paperUsed*500)*this.paperRate

kdmObj.PaperCost= paperCost








expense += paperCost
  }
}
else{

  kdmObj.PaperCost= ((kdmObj.PaperUsed*500)*this.paperRate)
  expense += kdmObj.PaperCost
}
expense+= kdmObj.Rent + kdmObj.CurrentBill
kdmObj.isExecuted= 1
kdmObj.TotalExpense = expense
kdmObj.NetProfit= kdmObj.TotalIncome- kdmObj.TotalExpense
this.kdmMonth[index]= kdmObj
if(kdmObj.PaperDay1 && kdmObj.PaperArrivedTotal && kdmObj.PaperLast
  && tpmObj.PaperDay1 && tpmObj.PaperArrivedTotal && tpmObj.PaperLast ){
    let paperUsedBoth = kdmObj.PaperUsed + tpmObj.PaperUsed

    let calculatedPaper = ((kdmObj.PaperDay1 + kdmObj.PaperArrivedTotal+tpmObj.PaperDay1)-(kdmObj.PaperLast + tpmObj.PaperLast))
    // if(calculatedPaper<paperUsedBoth){
    
    //   this.combinedMonth[index].PaperUsed = calculatedPaper
    //   this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)


    //   console.log("111111")
    // }
    // else{
    

    //   this.combinedMonth[index].PaperUsed = calculatedPaper
    //   this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)

    //   console.log("22222")

    // }


    this.combinedMonth[index].PaperUsed = calculatedPaper
    this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)


this.combinedMonth[index].TotalExpense = (((this.kdmMonth[index].TotalExpense + this.tpmMonth[index].TotalExpense)-(this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost))+(this.combinedMonth[index].PaperCost))
    

  }

  else{
    this.combinedMonth[index].PaperUsed = this.kdmMonth[index].PaperUsed + this.tpmMonth[index].PaperUsed
    this.combinedMonth[index].PaperCost = this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost
this.combinedMonth[index].TotalExpense = this.kdmMonth[index].TotalExpense + this.tpmMonth[index].TotalExpense

  }


this.combinedMonth[index].TotalIncome= this.kdmMonth[index].TotalIncome + this.tpmMonth[index].TotalIncome
this.combinedMonth[index].NetProfit = this.combinedMonth[index].TotalIncome - this.combinedMonth[index].TotalExpense

this.combinedMonth[index].BlackReading = this.kdmMonth[index].BlackReading + this.tpmMonth[index].BlackReading
this.combinedMonth[index].ColourReading = this.kdmMonth[index].ColourReading + this.tpmMonth[index].ColourReading


this.combinedMonth[index].Rent = this.kdmMonth[index].Rent + this.tpmMonth[index].Rent
this.combinedMonth[index].CurrentBill = this.kdmMonth[index].CurrentBill + this.tpmMonth[index].CurrentBill
this.combinedMonth[index].LabourSalary = this.kdmMonth[index].LabourSalary + this.tpmMonth[index].LabourSalary
this.combinedMonth[index].ExpenseCalculated = this.kdmMonth[index].ExpenseCalculated + this.tpmMonth[index].ExpenseCalculated


this.service.editKdmMonthById(kdmObj, kdmObj.id).subscribe((event : any)=>{

  console.log(event)

  this.service.editCombinedMonthById(this.combinedMonth[index], this.combinedMonth[index].id).subscribe((event: any)=>{


    this.executeSpin=false

  },(error: any)=>{
    this.executeSpin=false
  })




},(error: any)=>{
  this.executeSpin=false
}
)
// Month : any;
// Year : any;
// TotalIncome : any;
// NetProfit : any;
// TotalExpense : any;
// BlackReading : any;
// ColourReading: any;
// TajPresent : any;-----
// NoorPresent : any;-----
// LabourSalary : any;-----------
// Rent : any;
// CurrentBill : any;
// Expenses : any; INCOMEEEEEEEING INPUTT 
// ExpenseCalculated : any;(((((((((OUTPPPUTTTTT)))))))))
// ExpensePercentCalculate : any;------
// PaperDay1 : any;
// PaperLast : any;
// PaperArrivedTotal : any;
// PaperUsed : any;----------
// PaperCost : any;----------
// PaperSent : any;
// isEdited : any;
// isExecuted: any;


  
}


graphOutput = false
kdmOutput(index : any){

}
// }
// }

tpmExecute(index : any){
  this.executeSpin=true


  index = this.combinedMonth.indexOf(index)
  let kdmObj  = JSON.parse(JSON.stringify(this.kdmMonth[index]));
  let tpmObj = JSON.parse(JSON.stringify(this.tpmMonth[index]));
  let combinedObj = JSON.parse(JSON.stringify(this.combinedMonth[index]));
  let expense =0
  if(!tpmObj.AssanPresent || !tpmObj.RasheedPresent || !tpmObj.ManiPresent){
  expense+= tpmObj.LabourSalary
  
  }
  else{
  let salary = Math.ceil((tpmObj.AssanPresent * this.assanSalary) + (tpmObj.RasheedPresent * this.rasheedSalary) +
 (tpmObj.ManiPresent * this.maniSalary) 
  )
    expense += salary
  
  }
  if(!tpmObj.ExpensePercentCalculate){
  let income = kdmObj.TotalIncome + tpmObj.TotalIncome
  
   let kdmPercent = (kdmObj.TotalIncome / income) * 100
   let tpmPercent = Math.ceil((tpmObj.TotalIncome / income) * 100)
   tpmObj.ExpensePercentCalculate= tpmPercent
   tpmObj.ExpenseCalculated=  Math.ceil(( tpmObj.Expenses/100) * tpmPercent)

  
    expense+=tpmObj.ExpenseCalculated
  }
  else{

    tpmObj.ExpenseCalculated=  Math.ceil((  tpmObj.Expenses/100) * tpmObj.ExpensePercentCalculate)


    expense+=tpmObj.ExpenseCalculated
  }
  
  if(!tpmObj.PaperUsed|| !tpmObj.PaperCost ){
    if(tpmObj.PaperCost){
  
      expense+=tpmObj.PaperCost
  
  
    }
    else{
  // PaperDay1 : any;
  // PaperLast : any;
  // PaperArrivedTotal : any;
  // PaperSent : any;
  let arrived = tpmObj.PaperArrivedTotal
  let day1 = tpmObj.PaperDay1
  let sent =tpmObj.PaperSent
  let dayLast = tpmObj.PaperLast
  

  
  let paperUsed = (arrived + day1) - (sent + dayLast)
  let paperCost =0
  tpmObj.PaperSent= sent
  tpmObj.PaperUsed= paperUsed
  
  paperCost = (paperUsed*500)*this.paperRate
  
  tpmObj.PaperCost= paperCost
  
  expense += paperCost
    }
  }
  else{
    tpmObj.PaperCost= ((tpmObj.PaperUsed*500)*this.paperRate)
    expense += tpmObj.PaperCost
  }
  expense+= tpmObj.Rent + tpmObj.CurrentBill
  tpmObj.isExecuted= 1
  tpmObj.TotalExpense = expense
  tpmObj.NetProfit= tpmObj.TotalIncome- tpmObj.TotalExpense
  this.tpmMonth[index]= tpmObj
  if(kdmObj.PaperDay1 && kdmObj.PaperArrivedTotal && kdmObj.PaperLast
    && tpmObj.PaperDay1 && tpmObj.PaperArrivedTotal && tpmObj.PaperLast ){
      let paperUsedBoth = kdmObj.PaperUsed + tpmObj.PaperUsed
  
      let calculatedPaper = ((kdmObj.PaperDay1 + kdmObj.PaperArrivedTotal+tpmObj.PaperDay1)-(kdmObj.PaperLast + tpmObj.PaperLast))
      // if(calculatedPaper<paperUsedBoth){
      
      //   this.combinedMonth[index].PaperUsed = calculatedPaper
      //   this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)


      //   console.log("111111")
      // }
      // else{
      

      //   this.combinedMonth[index].PaperUsed = calculatedPaper
      //   this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)

      //   console.log("22222")

      // }


      this.combinedMonth[index].PaperUsed = calculatedPaper
      this.combinedMonth[index].PaperCost = ((calculatedPaper*500)*this.paperRate)


this.combinedMonth[index].TotalExpense = (((this.kdmMonth[index].TotalExpense + this.tpmMonth[index].TotalExpense)-(this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost))+(this.combinedMonth[index].PaperCost))
      
  
    }
  
    else{
      this.combinedMonth[index].PaperUsed = this.kdmMonth[index].PaperUsed + this.tpmMonth[index].PaperUsed
      this.combinedMonth[index].PaperCost = this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost
this.combinedMonth[index].TotalExpense = this.kdmMonth[index].TotalExpense + this.tpmMonth[index].TotalExpense
  
    }

  
this.combinedMonth[index].TotalIncome= this.kdmMonth[index].TotalIncome + this.tpmMonth[index].TotalIncome
this.combinedMonth[index].NetProfit = this.combinedMonth[index].TotalIncome - this.combinedMonth[index].TotalExpense


this.combinedMonth[index].BlackReading = this.kdmMonth[index].BlackReading + this.tpmMonth[index].BlackReading
this.combinedMonth[index].ColourReading = this.kdmMonth[index].ColourReading + this.tpmMonth[index].ColourReading
// this.combinedMonth[index].PaperUsed = this.kdmMonth[index].PaperUsed + this.tpmMonth[index].PaperUsed
// this.combinedMonth[index].PaperCost = this.kdmMonth[index].PaperCost + this.tpmMonth[index].PaperCost

this.combinedMonth[index].Rent = this.kdmMonth[index].Rent + this.tpmMonth[index].Rent
this.combinedMonth[index].CurrentBill = this.kdmMonth[index].CurrentBill + this.tpmMonth[index].CurrentBill
this.combinedMonth[index].LabourSalary = this.kdmMonth[index].LabourSalary + this.tpmMonth[index].LabourSalary
this.combinedMonth[index].ExpenseCalculated = this.kdmMonth[index].ExpenseCalculated + this.tpmMonth[index].ExpenseCalculated




  this.service.editTpmMonthById(tpmObj, tpmObj.id).subscribe((event : any)=>{
  
    console.log(event)

  this.service.editCombinedMonthById(this.combinedMonth[index], this.combinedMonth[index].id).subscribe((event: any)=>{


    this.executeSpin=false

  },(error: any)=>{
    this.executeSpin=false
  })
  
  
  },(error: any)=>{
    this.executeSpin=false
  }
  )
  // Month : any;
  // Year : any;
  // TotalIncome : any;
  // NetProfit : any;
  // TotalExpense : any;
  // BlackReading : any;
  // ColourReading: any;
  // TajPresent : any;-----
  // NoorPresent : any;-----
  // LabourSalary : any;-----------
  // Rent : any;
  // CurrentBill : any;
  // Expenses : any; INCOMEEEEEEEING INPUTT 
  // ExpenseCalculated : any;(((((((((OUTPPPUTTTTT)))))))))
  // ExpensePercentCalculate : any;------
  // PaperDay1 : any;
  // PaperLast : any;
  // PaperArrivedTotal : any;
  // PaperUsed : any;----------
  // PaperCost : any;----------
  // PaperSent : any;
  // isEdited : any;
  // isExecuted: any;
  

}
data: any;
comboOptions : any


chartOptions: any;


// config: AppConfig;
tpmOutput(entry : any){

}

summaryCombined : any;
summaryKdm : any;
summaryTpm : any;
basicOptions : any;
basicData : any;
blackOptions : any;
blackData :any;
stackedData: any;
stackedOptions : any;
summaryYear(){
  this.summaryCombined = JSON.parse(JSON.stringify(this.combinedMonth));
  this.summaryKdm = JSON.parse(JSON.stringify(this.kdmMonth));
  this.summaryTpm = JSON.parse(JSON.stringify(this.tpmMonth));




  let label=[]
  let income=[]
  let netProfit=[]
  let expense=[]
  let black=[]
  let paper=[]

  this.summaryCombined.forEach((combined: any)=>{

    label.push(combined.Month)

  })
  this.data = {
    labels: [],
    datasets: [{
        type: 'line',
        label: 'PROFIT',
        borderColor: '#000000',
        borderWidth: 2,
        fill: false,
        data: [
    
        ]
    }, {
        type: 'bar',
        label: 'INCOME',
        backgroundColor: '#66BB6A',
        data: [
      
        ],
        borderColor: 'white',
        borderWidth: 2
    }, {
        type: 'bar',
        label: 'EXPENSE',
        backgroundColor: '#FFA726',
        data: [
     
        ]
    }]
};


this.summaryCombined.forEach((combined: any)=>{
  let date = ''
  date = combined.Month + combined.Year
  this.data.labels.push(date)
this.data.datasets.forEach((dataset : any)=>{
if(dataset.label==='PROFIT'){

  dataset.data.push(combined.NetProfit)
}
else if(dataset.label ==='INCOME'){

  dataset.data.push(combined.TotalIncome)
}
else if(dataset.label ==='EXPENSE'){

  dataset.data.push(combined.TotalExpense)
}
})
})

this.basicData = {
  labels: [],
  datasets: [
      {
          label: 'Paper Used',
          data: [],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
      },
      {
          label: 'Color Reading',
          data: [],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ]
};



this.summaryCombined.forEach((combined: any)=>{
  let date = ''
  date = combined.Month + combined.Year
  this.basicData.labels.push(date)
this.basicData.datasets.forEach((dataset : any)=>{
if(dataset.label==='Paper Used'){

  dataset.data.push(combined.PaperUsed)
}
else if(dataset.label ==='Color Reading'){

  dataset.data.push(combined.ColourReading)
}
// else if(dataset.label ==='EXPENSE'){

//   dataset.data.push(combined.TotalExpense)
// }
})
})
this.blackData = {
  labels: [],
  datasets: [
      {
        type: 'bar',
          label: 'Kodambakkam Black Reading',
          backgroundColor: '#42A5F5',
          data: []
      },
      {
        type: 'bar',
          label: 'Trustpuram Black Reading',
          backgroundColor: '#FFA726',
          data: []
      }
  ]
};

for(let i =0 ; i < this.summaryCombined.length; i++){
this.blackData.labels=this.data.labels


this.blackData.datasets.forEach((dataset : any)=>{
  if(dataset.label==='Kodambakkam Black Reading'){
  
    dataset.data.push(this.summaryKdm[i].BlackReading)
  }
  else if(dataset.label ==='Trustpuram Black Reading'){
  
    dataset.data.push(this.summaryTpm[i].BlackReading)
  }
  // else if(dataset.label ==='EXPENSE'){
  
  //   dataset.data.push(combined.TotalExpense)
  // }
  })


}
this.stackedData = {
  labels: [],
  datasets: [
    {
      type: 'bar',
      label: 'Kodambakkam Income',
      backgroundColor: '#66BB6A',
      data: [
     
      ]
  },
  {
    type: 'bar',
    label: 'Trustpuram Income',
    backgroundColor: '#FFA726',
    data: [

    ]
},
    {
      type: 'line',
      label: 'Total Income',
      backgroundColor: '#42A5F5',
      data: [
       
      ]
  }, ]
,
  options: this.stackedOptions
};


for(let i =0 ; i < this.summaryCombined.length; i++){
  this.stackedData.labels=this.data.labels
  
  
  this.stackedData.datasets.forEach((dataset : any)=>{
    if(dataset.label==='Total Income'){
    
      dataset.data.push(this.summaryCombined[i].TotalIncome)
    }
    else if(dataset.label ==='Kodambakkam Income'){
    
      dataset.data.push(this.summaryKdm[i].TotalIncome)
    }

    else if(dataset.label ==='Trustpuram Income'){
      dataset.data.push(this.summaryTpm[i].TotalIncome)

    }
    // else if(dataset.label ==='EXPENSE'){
    
    //   dataset.data.push(combined.TotalExpense)
    // }
    })
  
  
  }




this.stackedOptions = {

    plugins: {
      legend: {
          labels: {
              color: '#000000'
          }
      },
      tooltips: {
          mode: 'index',
          intersect: false
      }
  },


  // tooltips: {
  //     mode: 'index',
  //     intersect: false
  // },


  // responsive: true,
  scales: {
      x: {
          stacked: true,
      },
      y: {
          stacked: true
      }
  }
};

// this.stackedOptions = {
//   plugins: {
//       legend: {
//           labels: {
//               color: '#ebedef'
//           }
//       },
//       tooltips: {
//           mode: 'index',
//           intersect: false
//       }
//   },
//   scales: {
//       x: {
//           stacked: true,
//           ticks: {
//               color: '#ebedef'
//           },
//           grid: {
//               color: 'rgba(255,255,255,0.2)'
//           }
//       },
//       y: {
//           stacked: true,
//           ticks: {
//               color: '#ebedef'
//           },
//           grid: {
//               color: 'rgba(255,255,255,0.2)'
//           }
//       }
//   }
// };

this.blackOptions= {
  indexAxis: 'y',
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  },
  scales: {
      x: {
       
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      },
      y: {
       
          ticks: {
              color: '#495057'
          },
          grid: {
              color: '#ebedef'
          }
      }
  }
};
this.basicOptions=  {
  scales: {
    xAxes: [{
      ticks: {
        fontColor: '#000000' // change x-axis element color to red
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: '#000000' // change y-axis element color to red
      }
    }]
  }
};
this.chartOptions = {
  scales: {
    xAxes: [{
      ticks: {
        fontColor: '#000000' // change x-axis element color to red
      }
    }],
    yAxes: [{
      ticks: {
        fontColor: '#000000' // change y-axis element color to red
      }
    }]
  }
};

// this.updateChartOptions();
this.graphOutput=true


let result =[]
result.push(this.summaryCombined)
result.push(this.summaryKdm)
result.push(this.summaryTpm)

console.log("array",result)
  console.log(this.summaryCombined)
  console.log(this.summaryKdm)
  console.log(this.summaryTpm)

}


// if (this.config.dark)
   
// else
//     this.applyLightTheme();
// }








updateChartOptions() {
   this.applyDarkTheme();

}
applyLightTheme() {
  this.chartOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };
}

applyDarkTheme() {
  this.chartOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
      }
  };
}

  onSubmit() { 



  }
    // alert(JSON.stringify(this.loginForm.value));
}







