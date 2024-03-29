import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { ShopserviceService } from '../shopservice.service';
import { tpmAccounts } from './tpmDataModel';
import { tpmLabourDetails,tpmMonth } from './tpmDataModel';
import { ConfirmationService, MessageService ,} from 'primeng/api';
import { rentSheet,kdmAccounts,combinedMonth } from '../kodambakkam/kdmDataModel';
import { Validators,FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-trustpuram',
  templateUrl: './trustpuram.component.html',
  styleUrls: ['./trustpuram.component.css']
})
export class TrustpuramComponent implements OnInit {
  @Output() saveClicked = new EventEmitter();
  kdmAccountDetail: kdmAccounts = <kdmAccounts>{};
  dataIncome : any;
  kdmLabourDetail: tpmLabourDetails = <tpmLabourDetails>{};
  sundayKdmLabourDetail : tpmLabourDetails=<tpmLabourDetails>{};
  sundayAccountDetail : kdmAccounts = <kdmAccounts>{};
saveKdmAccount :kdmAccounts = <kdmAccounts>{};
saveLabourAccount: kdmAccounts = <kdmAccounts>{};
  customers:any=[];
  items:any;
  representatives: any;

  statuses: any;

  loading: boolean = true;
  activeIndex2: number=0;
 
  activityValues: number[] = [0, 100];
isEditAccount: boolean =false;
accountsTitle: string="Accounts Section"
labourTitle: string="Labour Attendance"
labours : any =[];
tableCheckBox:any;
selectedAccounts:any;
selectedLabours : any;
isKodambakkam : boolean =false;
isTrustpuram : boolean =false;
isAdminAccess : boolean =false;

todayStayCheck: boolean =false;
oldStayCheck : boolean =false;
oldSoldCheck : boolean =false;
  

todayStayList: any;
oldStayList: any;
oldSoldList : any;


// [
//   {
//       "copies": 5,
//       "money": 6
//   },
//   {
//       "copies": 7,
//       "money": 8
//   }
// ]
// id : any;
date : any;
day : string="MONDAY";
isSunday : number =0;
isHoliday : number =0;
isPaperCame: number=0;
isTonerCame: number=0;

isPaperSent : number =0;
isTonerSent: number =0;

paperQantityCame : number =0
paperQuantitySent: number =0
tonerQuantityCame : number =0
tonerQuantitySend: number=0




isItemsCame : number=0;
itemsInfo : string="No";
blackMachineReading1 : number=0;
blackMachineReading2 : number=0;
colourMachineReading1: number=0;
ColourMachineReading2 : number =0;
  blackCopies: number = 0;
  tempBlackCopies: number =0
colourCopies : number=0;
b2bCopies : number=0;
paperPresentToday : number=0;
paperSheet : number =0;
toner : number =0;
tonerSpent : number =0;
// paperYesterday : number=0;
paperSoldToday : number=0;
bindings : number=0;
expenses : number=0;
todayStayDetail :string='|';
pastStayDetail: string='|';
pastSoldDetail: string='|';
todayStayingCopies: number=0;
todayStayingMoney: number=0;
oldStayingCopies : number=0;
oldStayingMoney : number=0;
goneCopiesPast: number=0;
goneMoneyPast: number=0;
notesToday: string="Notes: ";
cashIncome: number=0;
paytmIncome: number=0;
totalIncome : number=0;
openingBalance : number=0;
netProfit : number=0;
getTime : number=0;



colourMachineReading2 : number =0;
// date: any;
// day : any;
// getTimeToday: any;
// // cashIncome: any;
// // isSunday : boolean =false;
// // isHoliday : boolean =false;
// blackMachine1Today: any;
// blackMachine2Today: any;
// colourMachine1Today: any;
// blackReadingToday: number=0;
// colourReadingToday: number=0;
// b2bCopyToday: number=0;
// totalBlackCopyToday : any
// totalColourCopyToday: any
// // paperPresentToday : any;
// paperPastToday : any;
// // paperSoldToday: any;
// bindingGoneToday : any;
// expenseToday: number=0;
// todayStayCopyToday: number=0;
// todayStayMoneyToday : number=0;
// oldStayCopyToday : number=0;
// oldStayMoneyToday: number=0;
// gonePastMoneyToday: number=0;
// gonePastCopyToday: number=0;
// cashIncomeToday: any;
// gpayIncomeToday: any;
// openingBalToday: number=0;
// // notesToday : any;
// netProfitToday : any;
// totalIncomeToday: any ;

 todayStayDetail2 :any;
pastStayDetail2: any;
pastSoldDetail2 : any


// tajPresentBool : any;
// noorPresentBool : any;
// isTajHalfDay : boolean =false;
// isNoorHalfDay : boolean =false;

assanPresentBool : any;
rasheedPresentBool : any;
maniPresentBool : any;
isAssanHalfDay =0;
isRasheedHalfDay=0;
isManiHalfDay=0;
// Date: any;
// Day : string;
// GetTime:string;
// TajPresent  : number;
// TajExpense  : number;
// NoorPresent  : number;
// NoorExpense  : number;

// tajPresent: number=1;
// noorPresent : number =1;
// tajExpense : number = 90;
// noorExpense: number = 240;


assanPresent : number =1;
rasheedPresent : number =1;
maniPresent : number =1;

assanExpense : number = 240;
rasheedExpense : number =70;
maniExpense : number =70;

// bata1 : number =90
// bata2 : number =70
// food: number =150
// tajSalary : number =633.33;
// noorSalary : number = 466.66;
// assanSalary : number =466.66;
// maniSalary : number = 333.33;
// rasheedSalary : number =333.33;
// tpmRent : number =516.66;
// kdmRent : number =800;
// currentBillKdm: number =110;
// currentBillTpm : number =110;

bata1 : any;
bata2 : any;
food: any;
tajSalary : any;
noorSalary : any;
assanSalary : any;
maniSalary : any;
rasheedSalary : any;
paperRate: any;
tonerRate : any;
singleRate: any;
b2bRate: any;
copiesPerToner : any;
tpmRent: any;
kdmRent: any;
currentBillKdm: any;
currentBillTpm : any;
tonerCost: any;
rentSheet: rentSheet = <rentSheet>{};
@Input() adminAccess : boolean =false
// blackDonar : number =450;

  constructor(  private service : ShopserviceService, private confirmationService : ConfirmationService) { }
// private getTime(date? : Date){
//   return date != null ? date.getTime() : 0;
// }

checkAttendence(){
  if(this.rasheedPresentBool===undefined || this.assanPresentBool===undefined ||this.maniPresentBool===undefined|| !this.rasheedPresentBool.length|| !this.assanPresentBool.length|| !this.maniPresentBool.length){
    return true
  }
  else{
    return false
  }
}
wholeDeleteShow: boolean =false;

isViewAccountDetail : boolean =false;
chartOptions: any;
chartOptions2 : any;
getDarkTheme() {
  return {
      plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
      }
  }
}



dataCopies : any
updateChartOptions() {
 this.getDarkTheme();
}
singleSideCopies1: any;
excessReach1: any;

showDataPrint : boolean =false;
editAccount2(id: any){

this.service.getTpmAccountsById(id).subscribe((account: any)=>{
  this.kdmAccountDetail=account

  this.labours.forEach((labour: any)=>{


    if(labour.GetTime===this.kdmAccountDetail.GetTime){
  
  this.kdmLabourDetail=labour
  
  
    }
  })



})





this.showDataPrint=true;

}


editAccount(id:any){
this.service.getTpmAccountsById(id).subscribe((account: any)=>{
this.kdmAccountDetail=account
this.labours.forEach((labour: any)=>{


  if(labour.GetTime===this.kdmAccountDetail.GetTime){

this.kdmLabourDetail=labour


  }
})
this.kdmAccountDetail.TotalIncome+=this.kdmAccountDetail.OpeningBalance
this.kdmAccountDetail.Expenses+=this.kdmLabourDetail.RasheedExpense
this.kdmAccountDetail.Expenses+= this.kdmLabourDetail.AssanExpense
this.kdmAccountDetail.Expenses+= this.kdmLabourDetail.ManiExpense
this.kdmAccountDetail.NetProfit= (this.kdmAccountDetail.TotalIncome- this.kdmAccountDetail.Expenses)
this.kdmAccountDetail.NetProfit+=this.kdmAccountDetail.TodayStayingMoney
this.kdmAccountDetail.NetProfit-= this.kdmAccountDetail.GoneMoneyPast
let colourCommission = Math.ceil((this.kdmAccountDetail.ColourCopies* 30)/100)
let bindingCommision = Math.ceil((this.kdmAccountDetail.Bindings * 20/100))

this.kdmAccountDetail.NetProfit-= colourCommission
this.kdmAccountDetail.NetProfit-= bindingCommision
// let excessReach = Math.ceil(this.kdmAccountDetail.BlackCopies * this.paperRate)
let excessReach= Math.ceil(this.kdmAccountDetail.PaperSoldToday * this.singleRate)
this.excessReach1=excessReach.toFixed(2)
this.dataIncome={
  labels: ['Total Income','Expenses','NetProfit','Excess Criteria'],
  datasets: [
      {
          data: [this.kdmAccountDetail.TotalIncome, this.kdmAccountDetail.Expenses, this.kdmAccountDetail.NetProfit,excessReach],
          backgroundColor: [
              "##8F00FF",
              "#FF0000",

              "#00FF00",
              "#FFCE56"
          ],
          hoverBackgroundColor: [
              "##8F00FF",
              "#FF0000",
              "#00FF00",
              "#FFCE56"
          ]
      }
  ]
};

let singleSideCopies = this.kdmAccountDetail.BlackCopies- this.kdmAccountDetail.B2bCopies
this.singleSideCopies1=singleSideCopies
this.dataCopies={
  labels: ['Paper Sheets','Single Copies','B2B Copies','Colour Copies', 'Bindings'],
  datasets: [
      {
          data: [this.kdmAccountDetail.PaperSoldToday,singleSideCopies,this.kdmAccountDetail.B2bCopies,this.kdmAccountDetail.ColourCopies,this.kdmAccountDetail.Bindings],
          backgroundColor: [
              "#7D3C98",
              "#A93226",
              "#2ECC71",
              "#F1C40F",
              "#2C3E50"
          ],
          hoverBackgroundColor: [
            "#7D3C98",
              "#A93226",
              "#2ECC71",
              "#F1C40F",
              "#2C3E50"
          ]
      }
  ]
};






this.updateChartOptions();


})








this.isViewAccountDetail=true

}








deleteId : any;
deleteTime: any;
deleteCheck: boolean =false
deleteConfirm(id: any, time: any){
this.deleteId=id
this.deleteTime= time
this.deleteCheck=true
}
cancelDelete(){
this.deleteCheck=false


}
sureDelete(){
this.deleteAccount(this.deleteId, this.deleteTime) 
this.deleteCheck=false
}





deleteCheck2: boolean =false
deleteAllEntryConfirm(){

this.deleteCheck2=true
}
cancelDelete2(){
this.deleteCheck2=false


}
sureDelete2(){
this.deleteAllEntry() 
this.deleteCheck2=false
}




dateCalc: any
showCal : boolean =false

calClicked(){
this.showCal=true
}


// dateSelected(event : any){
//   console.log(event)
//   let dateString1 =event
//   let month1 = '' + (dateString1.getMonth() + 1);
//   let day1 = '' + dateString1.getDate();
//   let year1 = '' + dateString1.getFullYear();

//   if (month1.length < 2) {
//     month1 = '0' + month1;
//   }
//   if (day1.length < 2) {
//     day1 = '0' + day1;
//   }
//   let dateSend = [year1, month1, day1].join('-');
// console.log(dateSend)


// this.selectedAccounts=[]
// this.customers.forEach((customer: any)=>{
//   let dateString =customer.Date
//   let month = '' + (dateString.getMonth() + 1);
//   let day = '' + dateString.getDate();
//   let year = '' + dateString.getFullYear();

//   if (month.length < 2) {
//     month = '0' + month;
//   }
//   if (day.length < 2) {
//     day = '0' + day;
//   }
//   let dateSend = [year, month, day].join('-');

// if(month===month1 && year===year1){

// this.selectedAccounts.push(customer)

// }

// })
// console.log(this.selectedAccounts)



// this.showAllStatics()

 


// }


deleteAccount(id: any, time: any){
  this.showProgress=true
   this.service.deleteTpmAccountsById(id).subscribe((event: any)=>{
        // this.ngOnInit()
        

        this.labours.forEach((labour: any)=>{
if(labour.GetTime===time){
this.service.deleteTpmLabourById(labour.id).subscribe((event: any)=>{
  this.ngOnInit()
},
error=>{
  console.log(error)
  this.showProgress=false
})

}
        })
      },
      error=>{
        console.log(error);
        this.showProgress=false
      })
}
deleteAllEntry(){
  this.showProgress=true
  this.selectedAccounts.forEach((account: any)=>{
    if(account===null || account===undefined){
     
    }
    else{
let id= account.id
      this.service.deleteTpmAccountsById(id).subscribe((event: any)=>{

        this.labours.forEach((labour: any)=>{



          if(labour.GetTime===account.GetTime){
            let id2 = labour.id
this.service.deleteTpmLabourById(id2).subscribe((event: any)=>{
this.ngOnInit()
},
error=>{
  this.showProgress=false
  console.log(error)
})
          }

        })

     



       
      },
      error=>{
        this.showProgress=false
        console.log(error);
      })
    }
  })
  this.wholeDeleteShow=false
}
checkTick: boolean =false
checkBoxx(){
if(!this.checkTick){
  this.wholeInfoShow=true
  this.wholeDeleteShow=true
  this.checkTick=true
}
else{
this.wholeDeleteShow=false
this.wholeInfoShow=false
this.checkTick=false

}

}
beforeDay : any;
getOldDetails(){

  if(this.customers.length){
    this.beforeDate=this.customers[0].Date
    this.beforeDay= this.customers[0].Day

  }
  else{
    this.beforeDate=new Date()
    this.beforeDay="No Day"
  }



  if(!this.customers.length){
    this.todayStayDetail2 ="";
    this.pastStayDetail2="";
    this.pastSoldDetail2="";
  }

else{
  this.todayStayDetail2 =this.customers[0].TodayStayDetail;
  this.pastStayDetail2=this.customers[0].PastStayDetail;
  this.pastSoldDetail2=this.customers[0].PastSoldDetail;

}
 
}


machine1BlackTemp : number =0
machine2BlackTemp: number=0
colour1Temp : number =0
colour2Temp : number =0
totalTempCash:number=0
totalTempPaytm: number=0;
totalCountCash(event : any){
let current=event.value
// this.totalIncome=0
// this.totalIncome+=current
// this.totalIncome+=this.totalTempPaytm
// this.totalTempCash=this.totalIncome
this.totalIncome=event.value + this.paytmIncome
}
totalCountPaytm(event : any){
let current = event.value
this.totalIncome=event.value + this.cashIncome
}
  copiesGone: number = 0
  paperSheetGone: number = 0

  showTpmCopies: boolean = false
  tpmCopyCheck: any = false

  saveTpmCopy() {

    let balanceCopies = 0
    balanceCopies = this.tempBlackCopies - this.copiesGone
    this.blackCopies = this.tempBlackCopies



    this.showTpmCopies = false
  }
  cancelTpmCopy() {
    this.blackCopies = this.tempBlackCopies
    this.showTpmCopies = false
  }
  tpmCopiesGone(event: any) {
    if (this.tpmCopyCheck === false) {
      let tempCopies = this.tempBlackCopies
      let current = event.value
      if (current < tempCopies) {
        this.showTpmCopies = true
        console.log(this.showTpmCopies)
      }

      console.log(event.value)
      this.tpmCopyCheck = true
    }




  }
machinecolour2(event: any){

  let oldReading: any
  if(!this.customers.length){
    oldReading=0
  }
  else{
    oldReading = this.customers[0].ColourMachineReading2
  }


  let current= event.value

  this.colourCopies=0
  this.colourCopies+=current-oldReading
  this.colourCopies+=this.colour1Temp
  this.colour2Temp=current-oldReading
  if(current==0){
    this.colourMachineReading2=oldReading
  }
 
}
beforeDate: any
machineblack1(event: any){

  let oldReading: any
  if(!this.customers.length){
    oldReading=0
  }
  else{
    oldReading = this.customers[0].BlackMachineReading1
  }
  
  let current= event.value
  if(current===0){
    this.blackMachineReading1=oldReading
  }




this.blackCopies=0
this.blackCopies+=current-oldReading
  this.blackCopies += this.machine2BlackTemp
  this.tempBlackCopies =  this.blackCopies 
this.machine1BlackTemp=current-oldReading




}


machineblack2(event : any){


  let oldReading: any
  if(!this.customers.length){
    oldReading=0
  }
  else{
    oldReading = this.customers[0].BlackMachineReading2
  }


 
  let current= event.value

  this.blackCopies=0
  this.blackCopies+=current-oldReading
  this.blackCopies += this.machine1BlackTemp
  this.tempBlackCopies = this.blackCopies 
  this.machine2BlackTemp=current-oldReading
  if(current==0){
    this.blackMachineReading2=oldReading
  }
 
}

machinecolour1(event : any){
  let oldReading: any;
  if(!this.customers.length){
    oldReading=0
  }
else{
  oldReading= this.customers[0].ColourMachineReading1
}

  let current= event.value
  if(current===0){
    this.colourMachineReading1=oldReading
  }



this.colourCopies=0
this.colourCopies+=current-oldReading
this.colourCopies+=this.colour2Temp
this.colour1Temp=current-oldReading



}


itemDetail: any="1"
stayDetail : any ="0"
itemsGot(event: any){
event.copyMoneyList.forEach((copyMoney: any)=>{

 
  let dateString = this.date
let month ='' + (dateString.getMonth()+1);
let day =''+ dateString.getDate();
let year =''+ dateString.getFullYear();

if(month.length< 2){
  month ='0'+ month;
}
if(day.length<2 ){
  day= '0'+ day;
}
let dateSend = [year,month,day].join('-');
this.itemsInfo= dateSend

  this.itemsInfo+= "|" + copyMoney.copies + "  " + "X" + "  " + copyMoney.money + "|"
})


this.isItemsCame=1
  this.itemsCheckBool2=false
}
copyMoneyGot(event : any){


if(this.todayStayCheck){
// copyMoney.copies
event.copyMoneyList.forEach((copyMoney: any)=>{
  this.todayStayingCopies+=copyMoney.copies
  this.todayStayingMoney+= copyMoney.money
  this.todayStayDetail+=  "|"  + copyMoney.copies +"   " + "X" + "   " + copyMoney.money + "|"

})

  this.todayStayCheck=false
}
else if(this.oldStayCheck){
  event.copyMoneyList.forEach((copyMoney: any)=>{
    this.oldStayingCopies+=copyMoney.copies
    this.oldStayingMoney+= copyMoney.money
    this.pastStayDetail+= "|"+copyMoney.copies +"   " + "X" + "   " +copyMoney.money + "|"
  
  })

  this.oldStayCheck=false;
}
else if(this.oldSoldCheck){
  event.copyMoneyList.forEach((copyMoney: any)=>{
    this.goneCopiesPast+=copyMoney.copies
    this.goneMoneyPast+= copyMoney.money
    this.pastSoldDetail+= "|"+  copyMoney.copies +"   " + "X" + "   " + copyMoney.money + "|"
  
  })

this.oldSoldCheck=false;
}

}
loginForm: any;
loginDetail : boolean =true
mainDetail: boolean =false
submitted = false;
activeIndex: number =0;
items2: any;

products: any;

sortOptions: any;

sortOrder: any;

sortField: any;
sortKey: any
showProgress: boolean =false;

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

items3:any

showButton: boolean =false
nameClicked(){
this.showButton=true
}
  ngOnInit(): void {
    this.showCal=false
    this.showProgress=true
    if(this.adminAccess){
      this.loginDetail=true
      this.mainDetail=false
    }
    else{
      this.loginDetail=false
      this.mainDetail=true
    }
    this.loginForm = new FormGroup({
      'login': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
  });





    this.activeIndex2=0
    this.rasheedPresentBool=[]
    this.assanPresentBool=[]
    this.maniPresentBool=[]
    this.date = new Date()
this.day ="MONDAY";
this.isSunday  =0;
this.isHoliday  =0;
this.isPaperCame=0;
this.isTonerCame=0;
this.isItemsCame =0;
this.itemsInfo ="No";
this.blackMachineReading1 =0;
this.blackMachineReading2 =0;
this.colourMachineReading1=0;
this.colourMachineReading2=0;
    this.blackCopies = 0;
    this.tempBlackCopies = 0


this.colourCopies =0;
this.b2bCopies =0;
this.paperPresentToday =0;
this.paperSheet  =0;
this.toner  =0;
this.tonerSpent  =0;
// paperYesterday : number=0;
this.paperSoldToday =0;
this.bindings =0;
this.expenses =0;
this.todayStayDetail ='|';
this.pastStayDetail='|';
this.pastSoldDetail='|';
this.todayStayingCopies=0;
this.todayStayingMoney=0;
this.oldStayingCopies =0;
this.oldStayingMoney =0;
this.goneCopiesPast=0;
this.goneMoneyPast=0;
this.notesToday="Notes: ";
this.cashIncome=0;
this.paytmIncome=0;
this.totalIncome =0;
this.openingBalance =0;
this.netProfit =0;
this.getTime=0;



this.colourMachineReading2 =0;
    // this.isKodambakkam=true;

// this.rentSheet
this.service.getRateSheet().subscribe((rate: any)=>{
  this.rentSheet=rate[0]

  // this.tajExpense= this.rentSheet.bata1
  // this.noorExpense= this.rentSheet.bata1+ this.rentSheet.food
  this.assanExpense=this.rentSheet.bata1+ this.rentSheet.food
  this.rasheedExpense=this.rentSheet.bata2
  this.maniExpense=this.rentSheet.bata2



 

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


  
})
    this.items = [
      {label: 'Accounts Section'},
      {label: 'Labour Section'},
      {label: 'Data Section'},
      
  ];
  this.items3=[
    {label: 'Accounts Section'},
    {label: 'Labour Section'},
  ]
  this.service.getTpmLabours().subscribe((labour: any)=>{
this.labours=labour
if(!this.labours.length){

  this.showProgress=false
}

this.labours.forEach((customer: any) => {
  customer.Date = new Date(customer.Date)

  customer.Date.setHours(0);
  customer.Date.setMinutes(0);
  customer.Date.setSeconds(0);


let d = customer.Date.getDay()
if(d===0){
customer.Day="SUNDAY"

}
else if(d===1){
customer.Day="MONDAY"
}
else if(d===2){
customer.Day="TUESDAY"
}
else if(d===3){
customer.Day="WEDNESDAY"
}
else if(d===4){
customer.Day="THURSDAY"
}
else if(d===5){
customer.Day="FRIDAY"
}
else if(d===6){
customer.Day="SATURDAY"
}


 }
 );



for(let i =0 ; i < this.labours.length;i++){
// this.labours[i].Date= new Date(this.labours[i].Date)
this.labours[i].GetTime=this.labours[i].Date.getTime()

if(i===this.labours.length-1){
this.sortArrayLabour()
}
}




  })
    this.service.getTpmAccounts().subscribe((account: any)=>{
   
      this.customers = account;
      if(!this.customers.length){

        this.showProgress=false
    
       }
      this.loading = false;
// this.customers.reverse()
       this.customers.forEach((customer: any) => {
        customer.Date = new Date(customer.Date)
        customer.Date.setHours(0);
        customer.Date.setMinutes(0);
        customer.Date.setSeconds(0);
        


  let d = customer.Date.getDay()
  if(d===0){
    customer.Day="SUNDAY"

  }
  else if(d===1){
    customer.Day="MONDAY"
  }
  else if(d===2){
    customer.Day="TUESDAY"
  }
  else if(d===3){
    customer.Day="WEDNESDAY"
  }
  else if(d===4){
    customer.Day="THURSDAY"
  }
  else if(d===5){
    customer.Day="FRIDAY"
  }
  else if(d===6){
    customer.Day="SATURDAY"
  }

  
       }
       );

  


if(!this.customers.length){
  this.paperPresentYesterday=0
}
for(let i =0 ; i < this.customers.length;i++){
  // this.customers[i].Date= new Date(this.customers[i].Date)
  this.customers[i].GetTime=this.customers[i].Date.getTime()

  if(i===this.customers.length-1){
    this.sortArray()
    this.blackMachineReading1= this.customers[0].BlackMachineReading1
    this.blackMachineReading2= this.customers[0].BlackMachineReading2
    this.colourMachineReading1= this.customers[0].ColourMachineReading1
    this.colourMachineReading2= this.customers[0].ColourMachineReading2
    let val8: number=0
let toners : number =0
let sheet : number =0
    if(!this.customers.length){
      val8 =0
      toners=0
      sheet =0
    }
else{
  val8 = this.customers[0].PaperPresentToday
  toners=this.customers[0].Toner
  sheet = this.customers[0].PaperSheet
}
this.tonerYesterday=toners
    this.sheetYesterday= sheet
    this.paperPresentYesterday=val8
    this.showProgress=false
  }
}

})


}
tonerYesterday: number=0;
paperPresentYesterday:number =0;
sheetYesterday : number =0

adminKey: number =0;
adminCheck : boolean = true;
adminGo(event : any){
  let current = event.value
  if(current===77){
this.adminAccess=true
this.adminCheck=false
  }
}
confirm(key: string, message: string, header1: string) {
  // this.confirmationService.confirm({

  //   // let key: string = "changeField";
  //   // let header: string = "Confirmation"
  //   // let msg: string = "Please make sure changes in techniques are saved, otherwise changes will be lost";
  //   header: header1,
  //   icon: 'pi pi-exclamation-triangle',
  //   message: message,
  //   accept: () => {
   
  //   },
  //   reject: () => {
    

  //   }
  // })
}



sortArrayLabour(){
  this.labours.sort((a: any,b: any)=>{
    return b.GetTime-a.GetTime
   })
}
sortArray(){
 this.customers.sort((a: any,b: any)=>{
  return b.GetTime-a.GetTime
 })
 
}
labourShow : boolean =false;
labourTable(){
this.labourShow=true;
}
clear(table: any) {
  table.clear();
}
isAddAccounts: boolean =false
paperQuantityCame: number =0
  addAccounts() {

    this.activeIndex2=0
    this.blackMachineReading1= this.customers[0].BlackMachineReading1
    this.blackMachineReading2= this.customers[0].BlackMachineReading2
    this.colourMachineReading1= this.customers[0].ColourMachineReading1
    this.colourMachineReading2= this.customers[0].ColourMachineReading2

    this.bindings=0
    this.cashIncome=0
    this.paytmIncome=0
    this.paperPresentToday=0
    this.paperSheet=0
    this.openingBalance=0
    this.expenses=0
    this.oldStayingCopies=0
    this.oldStayingMoney=0
    this.goneCopiesPast=0
    this.goneMoneyPast=0
    this.todayStayingMoney=0
    this.todayStayingCopies=0
    this.todayStayDetail="|"
    this.pastStayDetail="|"
    this.pastSoldDetail="|"
    this.paperQuantityCame=0
    this.paperQuantitySent=0
    this.tonerQuantityCame=0
    this.tonerQuantitySend=0
    this.toner=0
    this.b2bCopies=0
    this.isSunday =0
    this.isHoliday =0
    this.isPaperCame=0
    this.isPaperSent =0

    this.isTonerCame=0
    this.isTonerSent =0

this.tonerSpent=0
this.paperSoldToday=0
    this.isItemsCame =0
    this.itemsInfo="No Items"
    this.blackCopies =0
    this.colourCopies =0
    this.b2bCopies =0
this.totalIncome=0
this.netProfit=0
    this.date = new Date()

this.maniExpense=0
this.assanExpense=0
this.rasheedExpense=0

this.maniPresentBool=''
this.assanPresentBool=''
this.rasheedPresentBool=''
this.isManiHalfDay=0
this.isAssanHalfDay=0
this.isRasheedHalfDay=0







    this.kdmAccountDetail.PaperQuantitySent = 0
    this.kdmAccountDetail.isPaperCame = 0
    this.kdmAccountDetail.isPaperSent = 0
    this.kdmAccountDetail.isTonerSent = 0
    this.kdmAccountDetail.isItemsCame = 0

    this.kdmAccountDetail.Toner = 0

    this.kdmAccountDetail.TonerSpent = 0
    this.kdmAccountDetail.PaperQuantityCame = 0
    this.kdmAccountDetail.isTonerCame = 0
    this.kdmAccountDetail.TonerQuantityCame = 0
    this.kdmAccountDetail.TonerQuantitySent = 0
    this.kdmAccountDetail.isHoliday = 0
    this.kdmAccountDetail.PaperSheet = 0



    if(this.adminAccess){

      console.log(this.customers)
      console.log(this.date)
    this.date = new Date(this.customers[0].Date)
      this.date.setDate(this.date.getDate() + 1)
      console.log(this.date)
    }
    
    
    this.isAddAccounts=true
    
    if(this.adminAccess){
      this.showEntryInput=true
    }
}
storeDateFormat : any;

sundayId: any;
sundayIdAccount : any
finalNextButton()



{

  console.log("JDHJDH")
  console.log(this.customers , this.labours)
  if(!this.customers.length && !this.labours.length){

    this.sundayId=0
    this.sundayIdAccount=0
  }
  else{
    this.sundayId=this.labours[0].id
    this.sundayIdAccount=this.customers[0].id
  }

  this.date.setHours(0);
  this.date.setMinutes(0);
  this.date.setSeconds(0);

  // this.activeIndex2=1
let d = this.date.getDay()
if(d===0){
this.day="SUNDAY"

}
else if(d===1){
  this.day="MONDAY"
}
else if(d===2){
  this.day="TUESDAY"
}
else if(d===3){
  this.day="WEDNESDAY"
}
else if(d===4){
  this.day="THURSDAY"
}
else if(d===5){
  this.day="FRIDAY"
}
else if(d===6){
  this.day="SATURDAY"
}
let accounts : kdmAccounts = <kdmAccounts>{};
let time = this.date.getTime()
this.storeDateFormat=this.date
// let paperYesterday = this.customers[0].paperPresentToday

// let paperSoldToday : any;
// if(this.paperPresentToday> paperYesterday){

// }
if(!this.paperCalculated && !this.paperTpmCalculated ){
  this.kdmAccountDetail.isPaperCame=0
  this.kdmAccountDetail.PaperQuantityCame=0
  this.kdmAccountDetail.isPaperSent=0
  this.kdmAccountDetail.PaperQuantitySent=0
  let yesterdayPaper = ((this.paperPresentYesterday * 500) + this.sheetYesterday)
  let todayPaper =((this.paperPresentToday * 500) + this.paperSheet)
  this.kdmAccountDetail.PaperSoldToday=  yesterdayPaper- todayPaper
}
if(!this.tonerCalculated){
  // this.kdmAccountDetail.isTonerCame=0
  this.kdmAccountDetail.TonerQuantityCame=0
  // this.kdmAccountDetail.TonerSpent= this.tonerYesterday - this.toner

  // this.kdmAccountDetail.TonerSpent=this.toner
  this.kdmAccountDetail.Toner =0
  this.kdmAccountDetail.isTonerSent=0
  this.kdmAccountDetail.TonerQuantitySent=0
}

if(this.paperCalculated){


  this.kdmAccountDetail.PaperSoldToday-=this.paperSheet
}

let dateString = this.date
let month ='' + (dateString.getMonth()+1);
let day =''+ dateString.getDate();
let year =''+ dateString.getFullYear();

if(month.length< 2){
  month ='0'+ month;
}
if(day.length<2 ){
  day= '0'+ day;
}
let dateSend = [year,month,day].join('-');
this.kdmAccountDetail.TonerQuantityCame= this.cashIncome
this.kdmAccountDetail.TonerQuantitySent=this.paytmIncome
this.kdmAccountDetail.TonerSpent=this.expenses
this.kdmAccountDetail.Date=dateSend;
this.kdmAccountDetail.Day=this.day
this.kdmAccountDetail.isSunday=0
this.kdmAccountDetail.isHoliday=0;
this.kdmAccountDetail.GetTime=time;
this.kdmAccountDetail.BlackMachineReading1=this.blackMachineReading1;
this.kdmAccountDetail.BlackMachineReading2=this.blackMachineReading2
this.kdmAccountDetail.ColourMachineReading1=this.colourMachineReading1
this.kdmAccountDetail.ColourMachineReading2= this.colourMachineReading2
this.kdmAccountDetail.BlackCopies=this.blackCopies
this.kdmAccountDetail.ColourCopies=this.colourCopies
// this.kdmAccountDetail.PaperYesterday=this.paperPresentYesterday
this.kdmAccountDetail.PaperPresentToday=this.paperPresentToday
this.kdmAccountDetail.B2bCopies=this.b2bCopies


//this.kdmAccountDetail.Expenses=this.expenses
// this.kdmAccountDetail.Expenses+=this.kdmRent
// this.kdmAccountDetail.Expenses+=this.currentBillKdm
// this.kdmAccountDetail.Expenses+= this.tonerCost* this.blackCopies
// this.kdmAccountDetail.Expenses+= this.paperRate* this.paperSoldToday

this.kdmAccountDetail.Bindings=this.bindings
this.kdmAccountDetail.TodayStayDetail=this.todayStayDetail
this.kdmAccountDetail.PastSoldDetail=this.pastSoldDetail
this.kdmAccountDetail.PastStayDetail=this.pastStayDetail
this.kdmAccountDetail.TodayStayingCopies=this.todayStayingCopies
this.kdmAccountDetail.TodayStayingMoney=this.todayStayingMoney
this.kdmAccountDetail.OldStayingCopies=this.oldStayingCopies
this.kdmAccountDetail.OldStayingMoney=this.oldStayingMoney
this.kdmAccountDetail.GoneMoneyPast=this.goneMoneyPast
this.kdmAccountDetail.GoneCopiesPast=this.goneCopiesPast
this.kdmAccountDetail.NotesToday=this.notesToday
this.kdmAccountDetail.CashIncome=this.cashIncome
this.kdmAccountDetail.PaytmIncome=this.paytmIncome
this.kdmAccountDetail.TotalIncome=this.totalIncome
this.kdmAccountDetail.OpeningBalance=this.openingBalance
this.kdmAccountDetail.isItemsCame=this.isItemsCame
this.kdmAccountDetail.ItemsInfo= this.itemsInfo;
this.kdmAccountDetail.isPaperCame= this.isPaperCame
this.kdmAccountDetail.isTonerCame= this.isTonerCame
this.kdmAccountDetail.Toner=this.toner
this.kdmAccountDetail.PaperSheet=this.paperSheet


// this.kdmAccountDetail.ItemsInfo= "No"
// this.kdmAccountDetail.isItemsCame=0
// this.kdmAccountDetail.isTonerCame=0
this.kdmAccountDetail.NetProfit=0




if(this.isHoliday){

}
else{
  this.activeIndex2=1;
}


}

paperRecieved : boolean =false;
extraPaperRecieved : any;
extraTonerRecieved : any;
paperCalculated : boolean =false;
paperTpmCalculated : boolean =false;
paperCalculationFinal(){

  // let todayPaperRecieved = this.extraPaperRecieved
  // this.extraPaperRecieved=0

  // let actualTodaySpent =(this.paperPresentToday- todayPaperRecieved)+ paperYesterday
  // this.kdmAccountDetail.PaperSoldToday=actualTodaySpent
  // this.paperCalculated=true

  if(this.paperToTpm===0.000 || this.paperToTpm===null ||this.paperToTpm===0 || this.paperToTpm===undefined){

  }
  else{

    this.paperTpmCalculated=true
    // let todaySentToTpm = this.paperToTpm
    let todaySentToTpmSheet = this.paperToTpm * 500
    this.kdmAccountDetail.isPaperSent=1
    this.kdmAccountDetail.PaperQuantitySent= this.paperToTpm
    this.paperToTpm=0
    // let paperYesterday = this.customers[0].paperPresentToday
    
    if(this.paperCalculated){
      // this.kdmAccountDetail.PaperSoldToday-=todaySentToTpm
      this.kdmAccountDetail.PaperSoldToday-=todaySentToTpmSheet
    }
    else{
      let paperToSheetYesterday = ((this.paperPresentYesterday * 500) + this.sheetYesterday)
      // this.kdmAccountDetail.PaperSoldToday=Math.abs(this.paperPresentYesterday-(todaySentToTpm+this.paperPresentToday))
      this.kdmAccountDetail.PaperSoldToday=Math.abs(paperToSheetYesterday-(todaySentToTpmSheet+this.totalPaperSheet))
    }
    // let actualTodaySpent =()
    this.waitNext=false
     this.tpmPaperSent=false;
     this.askTpmPaperReport=false;
     this.finalNextButton()
  }

}
sheetCalculation(){

}
papersendedToTpm(){
  this.waitNext=true;
  this.tpmPaperSent=true
}
paperToTpm : any;
entryPaperCheck2(){
if(this.paperToTpm===0.000 || this.paperToTpm===null ||this.paperToTpm===0 || this.paperToTpm===undefined){
  return true
}
else{
  return false
}
}
entryTonerCheck(){

  if(this.extraTonerRecieved===0 || this.extraTonerRecieved===undefined|| this.extraTonerRecieved===null|| this.extraTonerRecieved===0){
    return true
  }
  else{
    return false
  }


}

entryPaperCheck(){
  if(this.extraPaperRecieved===0 || this.extraPaperRecieved===undefined|| this.extraPaperRecieved===null|| this.extraPaperRecieved===0){
    return true
  }
  else{
    return false
  }
}

askTpmPaperReport: boolean =false;
tpmPaperSent: boolean =false;

excessreach2 : any;
singleSideCopies2 : any;
finalIncome : any;
finalCopy : any;
wholePaperCount : any
allAccountDetail :kdmAccounts = <kdmAccounts>{};
allLabourDetail:  tpmLabourDetails = <tpmLabourDetails>{};
monthlySalaryAssan : any;
monthlySalaryRasheed : any;
monthlySalaryMani : any;
paperCameDate: any;
tonerCameDate: any;
  totalItemCameDetail: any;
  expenseSplit: any = ''
  totalDays: number = 0
  averageIncome: number = 0
  averageProfit: number = 0
  colourPerDay: number = 0
  bindingPerDay: number = 0
  blackPerDay: number = 0
  paperPerDay: number = 0


  singleAnalysis(customer : any){
    this.selectedAccounts=[]
    this.selectedAccounts.push(customer)
  
    
    this.showAllStatics()
  
  
  }
startDate: any;
endDate: any;



getMonthName(month: number): string {
  return new Date(2000, month - 1, 1).toLocaleString('default', { month: 'long' });
}
monthSelected: string =""
monthNumber : number = 0
yearSelected : number = 0

previousDate : any
isPreviousDatePresent : boolean =false
indexPrevious : number = 0

totalDaysInMonth: number =0
isEntryPresent : boolean =false

dateSelected(event : any){
  this.isPreviousDatePresent=false;
  this.isEntryPresent=false
 
  let dateString1 =event
  let month1 = '' + (dateString1.getMonth() + 1);
  let day1 = '' + dateString1.getDate();
  let year1 = '' + dateString1.getFullYear();

  if (month1.length < 2) {
    month1 = '0' + month1;
  }
  if (day1.length < 2) {
    day1 = '0' + day1;
  }
  let dateSend = [year1, month1, day1].join('-');



this.selectedAccounts=[]
this.customers.forEach((customer: any)=>{
  let dateString =customer.Date
  let month = '' + (dateString.getMonth() + 1);
  let day = '' + dateString.getDate();
  let year = '' + dateString.getFullYear();

  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  let dateSend = [year, month, day].join('-');

if(month===month1 && year===year1){

this.selectedAccounts.push(customer)

}

})



const year = dateString1.getFullYear();

this.yearSelected= year
const month = dateString1.getMonth() + 1; // add 1 to get the correct month number
this.monthNumber= month
this.monthSelected= this.getMonthName(month)

const daysInMonth = this.getDaysInMonth(this.yearSelected, this.monthNumber);
// console.log(daysInMonth);
this.totalDaysInMonth=daysInMonth
if(this.selectedAccounts.length === this.totalDaysInMonth){

  
const reversedArray=[]

for (let i = this.selectedAccounts.length - 1; i >= 0; i--) {
  reversedArray.push(this.selectedAccounts[i]);
}
  let startDate = reversedArray[0]
  console.log(startDate)
  console.log(this.customers)
  let index = 0
  this.customers.forEach((entry : any)=>{

    if(entry.id === startDate.id){
      index = this.customers.indexOf(entry);
      this.indexPrevious=index
      this.indexPrevious+=1


    }
  })
  console.log("INDEX =", index)
if(index!=0){
  if(index+1 < this.customers.length){
    this.previousDate = this.customers[index+1]
    this.isPreviousDatePresent= true
  }
  else{
    this.isPreviousDatePresent=false
  }

  
}
else{
  this.isPreviousDatePresent=false
}



}
this.checkEntryPresent()
 

 

}

checkEntryPresent(){
  //*****// isEntryPresent
  // isEntryPresent
this.service.getTpmMonth().subscribe((event: any) => {
console.log(event)
event.forEach((data: any)=>{

  if(data.Month=== this.monthSelected && data.Year === this.yearSelected){
    this.isEntryPresent=true
  }


})


this.showAllStatics()

},
  error => {
    console.log(error);

  })
  
}
getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

checkWholeSave(){
  
if(this.selectedAccounts.length ===this.totalDaysInMonth && this.isPreviousDatePresent  && !this.isEntryPresent ){

  return true
}
else{
  return false
}



}

checkMonthSaved(){
  if(this.selectedAccounts.length ===this.totalDaysInMonth && this.isPreviousDatePresent  && this.isEntryPresent ){

    return true
  }
  else{
    return false
  }
  

}
deleteWholeMonth(){


}
// monthlyObj : 
monthlyObj: tpmMonth = <tpmMonth>{};
combinedObj : combinedMonth =<combinedMonth>{};
saveWholeMonth(){
console.log(this.yearSelected)
console.log(this.monthSelected)
console.log(this.totalDaysInMonth);
console.log(this.selectedAccounts)
console.log(this.customers)
console.log(this.previousDate)
console.log(this.isPreviousDatePresent)

this.monthlyObj.Month= this.monthSelected
this.monthlyObj.Year= this.yearSelected
this.monthlyObj.BlackReading= this.allAccountDetail.BlackCopies
this.monthlyObj.ColourReading= this.allAccountDetail.ColourCopies
this.monthlyObj.TotalIncome=this.allAccountDetail.TotalIncome

this.monthlyObj.AssanPresent= this.allLabourDetail.AssanPresent
this.monthlyObj.ManiPresent = this.allLabourDetail.ManiPresent
this.monthlyObj.RasheedPresent = this.allLabourDetail.RasheedPresent
this.monthlyObj.PaperDay1 = this.customers[this.indexPrevious].PaperPresentToday
console.log("🚀 ~ file: tr ~ this.monthlyObj.PaperDay1:", this.monthlyObj.PaperDay1)


this.monthlyObj.PaperLast = this.selectedAccounts[this.selectedAccounts.length-1].PaperPresentToday
this.monthlyObj.PaperUsed=Math.ceil( this.wholePaperCount )
this.monthlyObj.PaperCost= Math.ceil( this.wholePaperCount * 500 * this.paperRate)
this.monthlyObj.PaperSent= this.paperSentTotal

console.log(this.paperArrivedTotal)


this.monthlyObj.PaperArrivedTotal = this.paperArrivedTotal
this.monthlyObj.Expenses =0
this.monthlyObj.ExpenseCalculated = 0
this.monthlyObj.ExpensePercentCalculate = 0
this.monthlyObj.NetProfit = 0
this.monthlyObj.TotalExpense = 0
this.monthlyObj.isExecuted=0
this.monthlyObj.isEdited=0
this.monthlyObj.CurrentBill= 4000
this.monthlyObj.Rent= this.kdmRentMonth

this.monthlyObj.LabourSalary= this.laboursSalary
// LabourSalary : any;

this.service.addTpmMonth(this.monthlyObj).subscribe((event: any)=>{
  
  
//   this.isAddAccounts=false
// console.log("edfgerg")
  
//       this.saveClicked.emit()
this.showAllStaticDetail=false
      this.ngOnInit();

}, error=>{
 
console.log(error)
})


}


paperArrivedTotal : number =0
kdmRentMonth : number =0
laboursSalary : number =0
paperSentTotal : number =0











showAllStatics(){
  

    this.showProgress=true
    this.kdmRentMonth=0
    this.paperCameDate = ""
    this.paperArrivedTotal = 0
    this.laboursSalary=0
 this.paperSentTotal=0
  // this.paperCameDate= "";
  this.tonerCameDate ="";
  this.totalItemCameDetail= "";
  
  this.wholePaperCount=0
  this.allAccountDetail.Date= new Date()
  this.allAccountDetail.BlackCopies=0
  this.allAccountDetail.B2bCopies=0
  this.allAccountDetail.ColourCopies=0
  this.allAccountDetail.TotalIncome=0
  this.allAccountDetail.PaperSoldToday=0
  this.allAccountDetail.Bindings=0
  this.allAccountDetail.Expenses=0
  this.allAccountDetail.NetProfit=0
  this.allAccountDetail.TonerQuantityCame =0
  this.allAccountDetail.TonerQuantitySent =0
  this.allLabourDetail.RasheedExpense=0
  this.allLabourDetail.RasheedPresent=0
  this.allLabourDetail.isRasheedHalfDay=0
  this.allLabourDetail.AssanExpense=0
  this.allLabourDetail.AssanPresent=0
  this.allLabourDetail.isAssanHalfDay=0
  this.allLabourDetail.ManiExpense=0
  this.allLabourDetail.ManiPresent=0
  this.allLabourDetail.isManiHalfDay=0

  this.monthlySalaryAssan=0
  this.monthlySalaryRasheed=0
  this.monthlySalaryMani=0
  let counter =0
  let tempPaperCount =0
  let paperSentCount = 0
  let leaveCount =0
  let accountLength = this.selectedAccounts.length
  console.log(this.selectedAccounts)

  if(this.selectedAccounts.length){
    this.startDate=this.selectedAccounts[accountLength-1].Date
    this.endDate= this.selectedAccounts[0].Date
  }

  let absentRasheed = 0
  let absentMani = 0
  let absentAssan=0
  let accountList:any;
accountList=this.selectedAccounts.reverse()


accountList.forEach((account: any)=>{

if(account!==undefined && account!==null){
  counter+=1
  console.log(counter)
let accountDetail :kdmAccounts = <kdmAccounts>{};    
let labourDetail :tpmLabourDetails = <tpmLabourDetails>{};
accountDetail=account
this.labours.forEach((labour: any)=>{

  if(labour.GetTime===account.GetTime){

    labourDetail= labour
    if(labour.AssanPresent){
      if(labour.isAssanHalfDay){

this.allLabourDetail.AssanPresent+=0.5
this.allLabourDetail.AssanExpense+=labour.AssanExpense
        this.monthlySalaryAssan += this.assanSalary / 2
        absentAssan+=0.5
      }
      else{
this.allLabourDetail.AssanPresent+=1
this.allLabourDetail.AssanExpense+=labour.AssanExpense
this.monthlySalaryAssan+=this.assanSalary
      }
    }
    else{
      this.allLabourDetail.AssanExpense+=labour.AssanExpense
      this.monthlySalaryAssan += this.assanSalary
      absentAssan+=1
    }
    if(labour.RasheedPresent){

      if(labour.isRasheedHalfDay){
        this.allLabourDetail.RasheedPresent+=0.5
        this.allLabourDetail.RasheedExpense+=labour.RasheedExpense
        this.monthlySalaryRasheed += this.rasheedSalary / 2
        absentRasheed+=0.5
      }
      else{
        this.allLabourDetail.RasheedPresent+=1
        this.allLabourDetail.RasheedExpense+=labour.RasheedExpense
        this.monthlySalaryRasheed+=this.rasheedSalary
      }
    }
else{
  this.allLabourDetail.RasheedExpense+=labour.RasheedExpense
      this.monthlySalaryRasheed += this.rasheedSalary
      absentRasheed+=1
}
if(labour.ManiPresent){

  if(labour.isManiHalfDay){
    this.allLabourDetail.ManiPresent+=0.5
    this.allLabourDetail.ManiExpense+=labour.ManiExpense
    this.monthlySalaryMani += this.maniSalary / 2
    absentMani+=0.5
  }
  else{
    this.allLabourDetail.ManiPresent+=1
    this.allLabourDetail.ManiExpense+=labour.ManiExpense
    this.monthlySalaryMani+=this.maniSalary
  }
}
else{
this.allLabourDetail.ManiExpense+=labour.ManiExpense
  this.monthlySalaryMani += this.maniSalary
  absentMani+=1
}

// account.TotalIncome+=account.OpeningBalance
console.log("🚀 ~ file: kodamours.forEach ~ account.Expenses", account.Expenses)

//account.Expenses+=labour.RasheedExpense
//account.Expenses+= labour.AssanExpense
//account.Expenses+= labour.ManiExpense
//account.NetProfit= (account.TotalIncome- account.Expenses)

    if (account.isSunday || account.isHoliday) {
      leaveCount+=1
  let sunday_exp= 0
  sunday_exp= labour.AssanExpense + labour.RasheedExpense + labour.ManiExpense 
  //this.allAccountDetail.Expenses += sunday_exp
  // this.allAccountDetail.Expenses += this.tpmRent
  this.allAccountDetail.Expenses += this.currentBillTpm

  this.allAccountDetail.NetProfit +=0
  this.allAccountDetail.TotalIncome += 0
  this.allAccountDetail.TonerQuantityCame += 0
  this.allAccountDetail.TonerQuantitySent += 0
}
else{
  //this.allAccountDetail.Expenses += account.Expenses
  this.allAccountDetail.Expenses += this.currentBillTpm
  // this.allAccountDetail.Expenses += this.tpmRent
  this.allAccountDetail.NetProfit +=account.NetProfit
  this.allAccountDetail.TotalIncome += account.TotalIncome

  console.log(account.TonerQuantityCame)
  console.log(account.TonerQuantitySent)
   
  this.allAccountDetail.TonerQuantityCame += account.TonerQuantityCame
  
  this.allAccountDetail.TonerQuantitySent += account.TonerQuantitySent

  if(accountLength===counter){
    this.allAccountDetail.TotalIncome+= account.TodayStayingMoney + account.OldStayingMoney
  }
}

this.paperSentTotal += account.PaperQuantitySent

if(account.isPaperCame){
  let dateString = account.Date
  let month ='' + (dateString.getMonth()+1);
  let day =''+ dateString.getDate();
  let year =''+ dateString.getFullYear();
  
  if(month.length< 2){
    month ='0'+ month;
  }
  if(day.length<2 ){
    day= '0'+ day;
  }
  let dateSend = [year,month,day].join('-');

this.paperCameDate +=  " | " + dateSend + "-->" + account.PaperQuantityCame + " | " 
this.paperArrivedTotal+=account.PaperQuantityCame


}
if(account.isTonerCame){

  let dateString = account.Date
  let month ='' + (dateString.getMonth()+1);
  let day =''+ dateString.getDate();
  let year =''+ dateString.getFullYear();
  
  if(month.length< 2){
    month ='0'+ month;
  }
  if(day.length<2 ){
    day= '0'+ day;
  }
  let dateSend = [year,month,day].join('-');


  this.tonerCameDate+=  " | " + dateSend + " | "
}
if(account.isItemsCame){
this.totalItemCameDetail += " | " + account.ItemsInfo + " | "
}
this.allAccountDetail.B2bCopies+= account.B2bCopies

this.allAccountDetail.BlackCopies+=account.BlackCopies
this.allAccountDetail.ColourCopies+=account.ColourCopies
this.allAccountDetail.Bindings+= account.Bindings
this.allAccountDetail.TonerSpent+=account.TonerSpent


let singleSideCopies = account.BlackCopies- account.B2bCopies



this.singleSideCopies1+=singleSideCopies

this.allAccountDetail.PaperSoldToday+=account.PaperSoldToday
this.wholePaperCount+=account.PaperSoldToday


  }




})



}



})

  this.totalDays = accountLength
  let rent =0
  if (accountLength === 31 || accountLength === 30) {
    this.monthlySalaryMani = (30 - absentMani) * this.maniSalary
    this.monthlySalaryAssan = (30 - absentAssan) * this.assanSalary
    this.monthlySalaryRasheed = (30 - absentRasheed) * this.rasheedSalary

    this.allAccountDetail.Expenses +=  2000

    this.allLabourDetail.AssanPresent=30 - absentAssan
    this.allLabourDetail.RasheedPresent=30 - absentRasheed
    this.allLabourDetail.ManiPresent=30 - absentMani

    rent = Math.ceil(30 * this.tpmRent)
  }
  else {
    this.monthlySalaryMani = this.allLabourDetail.ManiPresent * this.maniSalary
    this.monthlySalaryAssan = this.allLabourDetail.AssanPresent * this.assanSalary
    this.monthlySalaryRasheed = this.allLabourDetail.RasheedPresent * this.rasheedSalary


    rent = Math.ceil(accountLength * this.tpmRent)
  }
 

  let colourCommission = Math.ceil(((this.allAccountDetail.ColourCopies*10) * 40) / 100)
  let bindingCommision = Math.ceil((this.allAccountDetail.Bindings * 70 / 100))
  let salary = Math.ceil(this.monthlySalaryMani + this.monthlySalaryAssan + this.monthlySalaryRasheed)
  let commision = colourCommission + bindingCommision
  let tonerCost = Math.ceil(this.tonerCost * this.allAccountDetail.BlackCopies)
  // let rent = Math.ceil(accountLength * this.tpmRent)
  this.allAccountDetail.Expenses += commision
  this.allAccountDetail.Expenses += salary
  this.allAccountDetail.Expenses += rent
  let paperAmount = Math.ceil(this.allAccountDetail.PaperSoldToday * this.paperRate)
  this.allAccountDetail.Expenses += paperAmount
  this.allAccountDetail.Expenses += tonerCost
  this.expenseSplit += 'Rent:' + rent + "|| " + 'Salary :' + salary + "|| " + 'Paper Cost:' + paperAmount + "|| " + 'Binding & colour:' + commision + "|| " + 'Toner Cost :' + tonerCost
  this.allAccountDetail.NetProfit = this.allAccountDetail.TotalIncome - this.allAccountDetail.Expenses

  this.averageIncome = Math.ceil((this.allAccountDetail.TotalIncome) / (this.totalDays - leaveCount))
  this.averageProfit = Math.ceil((this.allAccountDetail.NetProfit) / (this.totalDays)) 
  this.colourPerDay = Math.ceil((this.allAccountDetail.ColourCopies) / (this.totalDays - leaveCount))

  this.bindingPerDay = Math.ceil((this.allAccountDetail.Bindings) / (this.totalDays - leaveCount))
  this.blackPerDay = Math.ceil((this.allAccountDetail.BlackCopies) / (this.totalDays - leaveCount))

  this.laboursSalary= salary

  this.kdmRentMonth = rent

  this.allAccountDetail.NetProfit = Math.ceil(this.allAccountDetail.NetProfit/1)
  this.allAccountDetail.TotalIncome = Math.ceil(this.allAccountDetail.TotalIncome/1)
this.allAccountDetail.Expenses= Math.ceil(this.allAccountDetail.Expenses/1)

  this.averageIncome = Math.ceil(this.averageIncome)
  this.averageProfit = Math.ceil(this.averageProfit)
  this.excessreach2 = (this.allAccountDetail.TotalIncome / this.wholePaperCount).toFixed(2)
  this.wholePaperCount = this.wholePaperCount / 500
  this.paperPerDay = this.wholePaperCount / (this.totalDays - leaveCount)
  this.finalIncome={
    labels: ['Total Income','Expenses','NetProfit','Excess Criteria'],
    datasets: [
        {
            data: [this.allAccountDetail.TotalIncome, this.allAccountDetail.Expenses, this.allAccountDetail.NetProfit,this.excessreach2],
            backgroundColor: [
                "##8F00FF",
                "#FF0000",
  
                "#00FF00",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "##8F00FF",
                "#FF0000",
                "#00FF00",
                "#FFCE56"
            ]
        }
    ]
  };
  
  let singleSideCopies = this.allAccountDetail.BlackCopies- this.allAccountDetail.B2bCopies
  this.singleSideCopies1=singleSideCopies
  this.finalCopy={
    labels: ['Paper Sheets','Single Copies','B2B Copies','Colour Copies', 'Bindings'],
    datasets: [
        {
            data: [this.wholePaperCount,this.singleSideCopies1,this.allAccountDetail.B2bCopies,this.allAccountDetail.ColourCopies,this.allAccountDetail.Bindings],
            backgroundColor: [
                "#7D3C98",
                "#A93226",
                "#2ECC71",
                "#F1C40F",
                "#2C3E50"
            ],
            hoverBackgroundColor: [
              "#7D3C98",
                "#A93226",
                "#2ECC71",
                "#F1C40F",
                "#2C3E50"
            ]
        }
    ]
  };
  
  
  
  this.salaryChart={
    labels: ['Assan Salary','Rasheed Salary','Mani Salary'],
    datasets: [
        {
        data: [this.monthlySalaryAssan, this.monthlySalaryRasheed, this.monthlySalaryMani],
            backgroundColor: [
                "#7D3C98",
                "#A93226",
                "#2ECC71",
              
            ],
            hoverBackgroundColor: [
              "#7D3C98",
                "#A93226",
                "#2ECC71",
             
            ]
        }
    ]
  };
  
  
  this.updateChartOptions();

  this.showProgress=false
    
    this.showAllStaticDetail=true
}


salaryChart : any


showAllStaticDetail: boolean =false;

wholeInfoShow: boolean =false;
allDetailIndex : number =0
staticNextClicked(){
  this.allDetailIndex++
  }
  staticBackClicked(){
  this.allDetailIndex--
  }
nextClicked(){
  if (this.blackCopies==0){
    this.machineblack1( {value : this.blackMachineReading1})
      this.machineblack2( {value:this.blackMachineReading2})
    }
    if (this.colourCopies==0){
      this.machinecolour1( {value : this.colourMachineReading1})
        this.machinecolour2( {value:this.colourMachineReading2})
      }
  if(this.totalIncome==0){
        this.totalIncome= this.cashIncome +  this.paytmIncome
      
      }
  if(this.paperRepeatAsk){
    this.askTpmPaperReport=false
    this.finalNextButton()
  }
  else{
    this.askTpmPaperReport=true
  }

}

waitNext:boolean=false
paperRepeatAsk : boolean =false
  paperCalculation(name: any){
    if (name === "kodambakkam") {
      if (this.extraPaperRecieved === 0 || this.extraPaperRecieved === undefined || this.extraPaperRecieved === null || this.extraPaperRecieved === 0) {

      }
      else {

        let todayPaperRecievedSheet = this.extraPaperRecieved * 500
        this.paperRepeatAsk = true
        this.kdmAccountDetail.isPaperCame = 1
        this.kdmAccountDetail.PaperQuantityCame = this.extraPaperRecieved
        this.extraPaperRecieved = 0

        let paperToSheetYesterday = ((this.paperPresentYesterday * 500) + this.sheetYesterday)
        let actualSpentSheet = Math.abs((paperToSheetYesterday + todayPaperRecievedSheet) - this.totalPaperSheet)

        this.kdmAccountDetail.PaperSoldToday = actualSpentSheet
        this.paperCalculated = true
        this.paperRecieved = false
        this.waitNext = false;
        this.isPaperCame = 1
        this.tpmPaperSent = false;
        this.askTpmPaperReport = false;
        this.finalNextButton();


      }

    }

    else {
      if (this.extraPaperRecieved === 0 || this.extraPaperRecieved === undefined || this.extraPaperRecieved === null || this.extraPaperRecieved === 0) {

      }
      else {

        let todayPaperRecievedSheet = this.extraPaperRecieved * 500
        this.paperRepeatAsk = true
        this.kdmAccountDetail.isPaperCame = 1
        this.kdmAccountDetail.PaperQuantityCame = this.extraPaperRecieved
        this.extraPaperRecieved = 0

        let paperToSheetYesterday = ((this.paperPresentYesterday * 500) + this.sheetYesterday)
        let actualSpentSheet = Math.abs((paperToSheetYesterday + todayPaperRecievedSheet) - this.totalPaperSheet)

        this.kdmAccountDetail.PaperSoldToday = actualSpentSheet
        this.paperCalculated = true
        this.paperRecieved = false
        this.waitNext = false;
        this.isPaperCame = 1
      }

    }


}
tonerCalculated : boolean =false;

tonerCalculation(){
  if(this.extraTonerRecieved===0 || this.extraTonerRecieved===undefined|| this.extraTonerRecieved===null|| this.extraTonerRecieved===0){

  }
  else {
    let todayTonerRecieved = this.extraTonerRecieved
    this.extraTonerRecieved=0
    // let paperYesterday = this.customers[0].paperPresentToday
    // let actualTodaySpent =(this.paperPresentToday- todayPaperRecieved)+ paperYesterday
    let actualTodaySpent=Math.abs((this.tonerYesterday + todayTonerRecieved)-this.toner)
    // this.kdmAccountDetail.TonerSpent=actualTodaySpent
    this.tonerCalculated=true
    this.tonerRecieved=false
    this.waitNext=false;
    this.isTonerCame=1
  }
   

}
tonerRecieved : boolean =false
tonerCheck(event:any){
  let current = event.value
if(current> this.tonerYesterday){

  this.tonerRecieved=true
  this.waitNext=true
}
else{
  this.waitNext=false
}
}
packetToSheet : number =0;
totalPaperSheet : number =0
sheetCheck(event : any){
  let current = event.value

  this.totalPaperSheet= current + this.packetToSheet

  

}
waitingForPacketEntry : boolean =true;
nextCheck(){
  if(this.paperRecieved){
    return false
  }
  else{

    if(this.tonerRecieved){
    return false
    }
    else{
      if(this.paperPresentToday===0 || this.paperPresentToday===null || this.cashIncome===0 || this.paytmIncome===null || this.cashIncome===null){
        return false
      }
      else{
        return true
      
      }
    }


  }

 
}
paperCheck(event : any){
let current = event.value
this.waitingForPacketEntry=false;

this.packetToSheet= current * 500
this.totalPaperSheet=this.packetToSheet + this.paperSheet 
if(current>= this.paperPresentYesterday){
  this.paperRecieved=true;
  this.waitNext=true
}
else{
  this.waitNext=false
}
}
tonerCame(event : any){
  let current = event.value
  if(current> 0){
    this.kdmAccountDetail.isTonerCame=1
    this.isTonerCame=1
    
  }
  else{
    this.kdmAccountDetail.isTonerCame=0
    this.isTonerCame=0
  }
}
kdmAccountHolidayDetail : kdmAccounts = <kdmAccounts>{};
saveAccounts(){
this.isAddAccounts=false
this.showProgress=true



if(this.noEntry){


  this.finalNextButton()
if(this.customers){
  this.kdmAccountHolidayDetail=this.customers[0]

}
  else{
    console.log("NO DATA")
    this.ngOnInit()
  }


  this.kdmAccountDetail.BlackMachineReading1= this.kdmAccountHolidayDetail.BlackMachineReading1
  this.kdmAccountDetail.BlackMachineReading2= this.kdmAccountHolidayDetail.BlackMachineReading2
  this.kdmAccountDetail.ColourMachineReading1=this.kdmAccountHolidayDetail.ColourMachineReading1
  this.kdmAccountDetail.ColourMachineReading2=this.kdmAccountHolidayDetail.ColourMachineReading2
this.kdmAccountDetail.TodayStayDetail= this.kdmAccountHolidayDetail.TodayStayDetail
this.kdmAccountDetail.PastStayDetail=this.kdmAccountHolidayDetail.PastStayDetail
this.kdmAccountDetail.PastSoldDetail=this.kdmAccountHolidayDetail.PastSoldDetail
this.kdmAccountDetail.PaperPresentToday=this.kdmAccountHolidayDetail.PaperPresentToday
this.kdmAccountDetail.PaperSheet=this.kdmAccountHolidayDetail.PaperSheet
this.kdmAccountDetail.OpeningBalance= this.kdmAccountHolidayDetail.OpeningBalance
this.kdmAccountDetail.OldStayingMoney= this.kdmAccountHolidayDetail.OldStayingMoney
this.kdmAccountDetail.OldStayingCopies=this.kdmAccountHolidayDetail.OldStayingCopies


  this.kdmAccountDetail.isSunday= 0
  this.kdmAccountDetail.isHoliday= 1
  this.kdmAccountDetail.isPaperCame=0
  this.kdmAccountDetail.isTonerCame=0
  this.kdmAccountDetail.isItemsCame=0
  this.kdmAccountDetail.ItemsInfo="No Items"
  this.kdmAccountDetail.BlackCopies=0
  this.kdmAccountDetail.ColourCopies=0
  this.kdmAccountDetail.B2bCopies=0
  this.kdmAccountDetail.Bindings=0
  
  this.kdmAccountDetail.Expenses=0
  this.kdmAccountDetail.Expenses=20
  //this.kdmAccountDetail.Expenses+=this.tpmRent
  this.kdmAccountDetail.Expenses+=this.currentBillKdm
  //this.kdmAccountDetail.Expenses+= this.tonerCost* this.kdmAccountDetail.BlackCopies
  this.kdmAccountDetail.PaperSoldToday=0
  //this.kdmAccountDetail.Expenses+= this.paperRate* this.kdmAccountDetail.PaperSoldToday
  this.kdmAccountDetail.Expenses= Math.ceil(this.kdmAccountDetail.Expenses)
  
  this.kdmAccountDetail.TonerSpent=0
  
  this.kdmAccountDetail.TodayStayingCopies=0
  this.kdmAccountDetail.TodayStayingMoney=0
  // this.kdmAccountDetail.OldStayingCopies=0
  // this.kdmAccountDetail.OldStayingMoney=0
  this.kdmAccountDetail.GoneCopiesPast=0
  this.kdmAccountDetail.GoneMoneyPast=0
  this.kdmAccountDetail.NotesToday="No Notes"
  this.kdmAccountDetail.CashIncome=0
  this.kdmAccountDetail.PaytmIncome=0
  this.kdmAccountDetail.TotalIncome=0
  


  

    this.kdmLabourDetail.RasheedPresent=1
  
    
    let rasheedexpense = this.rasheedSalary 
  
    this.rasheedExpense=Math.ceil(rasheedexpense)
   
  

    this.kdmLabourDetail.AssanPresent=1
    let assanexpense = this.assanSalary  +this.food
    this.assanExpense=Math.ceil(assanexpense)
    this.kdmLabourDetail.ManiPresent=1
  
    
    let maniexpense = this.maniSalary 
  
    this.maniExpense=Math.ceil(maniexpense)
  
  // }
  this.kdmLabourDetail.Date= this.kdmAccountDetail.Date
  this.kdmLabourDetail.Day = this.kdmAccountDetail.Day
  this.kdmLabourDetail.GetTime= this.kdmAccountDetail.GetTime
  this.kdmLabourDetail.RasheedExpense= this.rasheedExpense
  this.kdmLabourDetail.AssanExpense=this.assanExpense
  this.kdmLabourDetail.ManiExpense=this.maniExpense
  this.kdmLabourDetail.isManiHalfDay= this.isManiHalfDay
  this.kdmLabourDetail.isAssanHalfDay = this.isAssanHalfDay
  this.kdmLabourDetail.isRasheedHalfDay=this.isRasheedHalfDay
  /////////////////////////////////////////////////////////////
  // this.kdmAccountDetail.Expenses+=this.tajExpense
  // this.kdmAccountDetail.Expenses+= this.noorExpense
  console.log(this.kdmAccountDetail)
  console.log(this.kdmLabourDetail)
  
  this.service.addTpmAcccounts(this.kdmAccountDetail).subscribe((event)=>{
   
  this.service.addTpmLabours(this.kdmLabourDetail).subscribe((event: any)=>{
  
  
    this.isAddAccounts=false
  console.log("edfgerg")
    
        this.saveClicked.emit()
        // this.ngOnInit();
  
  }, error=>{
  
  console.log(error)
  })
  
  },error=>{
    console.log(error)
  
  })
  
  
    // },
    // error=>{
    //   console.log(error)
    // })
  // },
  // error=>{
  //   console.log(error)
  // })










this.noEntry=false;
}
else{



if(this.rasheedPresentBool==="present"){
if(this.isRasheedHalfDay){
  this.kdmLabourDetail.RasheedPresent=1
  this.kdmLabourDetail.isRasheedHalfDay=1
  let rasheedsalary= this.rasheedSalary/2
  let rasheedexpense = rasheedsalary+this.bata2

  this.rasheedExpense=Math.ceil(rasheedexpense)

}
else{

  this.kdmLabourDetail.RasheedPresent=1
  this.kdmLabourDetail.isRasheedHalfDay=0
  
  let rasheedexpense = this.rasheedSalary + this.bata2
  this.rasheedExpense=Math.ceil(rasheedexpense)
}
}
else if(this.rasheedPresentBool==="absent"){
  this.kdmLabourDetail.isRasheedHalfDay=0
  this.kdmLabourDetail.RasheedPresent=0
  let rasheedexpense = 0
  this.rasheedExpense=Math.ceil(rasheedexpense)

}

if(this.assanPresentBool==="present"){

  if(this.isAssanHalfDay){
    this.kdmLabourDetail.isAssanHalfDay=1
    this.kdmLabourDetail.AssanPresent=1

    let assansalary= this.assanSalary/2
    let assanexpense= assansalary+ this.bata1+ this.food
    this.assanExpense=Math.ceil(assanexpense)


  }
  else{
    this.kdmLabourDetail.isAssanHalfDay=0
    this.kdmLabourDetail.AssanPresent=1
    let assanexpense = this.assanSalary + this.bata1 +this.food
    this.assanExpense=Math.ceil(assanexpense)
  }

}
else if(this.assanPresentBool==="absent"){
  this.kdmLabourDetail.isAssanHalfDay=0
  this.kdmLabourDetail.AssanPresent=0
  let assanexpense = this.food
  this.assanExpense=Math.ceil(assanexpense)

}

if(this.maniPresentBool==="present"){
  if(this.isManiHalfDay){
    this.kdmLabourDetail.isManiHalfDay=1
    this.kdmLabourDetail.ManiPresent=1
    let manisalary= this.maniSalary/2
    let maniexpense = manisalary+this.bata2
  
    this.maniExpense=Math.ceil(maniexpense)
  
  }
  else{
    this.kdmLabourDetail.isManiHalfDay=0
    this.kdmLabourDetail.ManiPresent=1
  
    
    let maniexpense = this.maniSalary + this.bata2
    this.maniExpense=Math.ceil(maniexpense)
  }
  }
  else if(this.maniPresentBool==="absent"){
    this.kdmLabourDetail.isManiHalfDay=0
    this.kdmLabourDetail.ManiPresent=0
    let maniexpense = 0
    this.maniExpense=Math.ceil(maniexpense)
  
  }


this.kdmLabourDetail.RasheedExpense=this.rasheedExpense
this.kdmLabourDetail.AssanExpense=this.assanExpense
this.kdmLabourDetail.ManiExpense=this.maniExpense
this.kdmLabourDetail.Date=this.kdmAccountDetail.Date
this.kdmLabourDetail.Day=this.kdmAccountDetail.Day
this.kdmLabourDetail.GetTime=this.kdmAccountDetail.GetTime

// this.kdmAccountDetail.Expenses=this.expenses
  this.kdmAccountDetail.Expenses = 20
  //this.kdmAccountDetail.Expenses += this.tpmRent
this.kdmAccountDetail.Expenses+=this.currentBillKdm
//this.kdmAccountDetail.Expenses+= this.tonerCost* this.blackCopies
//this.kdmAccountDetail.Expenses+= this.paperRate* this.kdmAccountDetail.PaperSoldToday
// this.kdmAccountDetail.Expenses+=this.tajExpense
// this.kdmAccountDetail.Expenses+= this.noorExpense
this.kdmAccountDetail.Expenses= Math.ceil(this.kdmAccountDetail.Expenses)

if(this.kdmAccountDetail.Day==="SATURDAY"){
this.service.addTpmAcccounts(this.kdmAccountDetail).subscribe((event: any)=>{
 

  this.service.addTpmLabours(this.kdmLabourDetail).subscribe((event: any)=>{


//     this.saveClicked.emit()
//     this.isAddAccounts=false
// this.ngOnInit();

this.kdmAccountDetail.isSunday= 1
this.kdmAccountDetail.isHoliday= 0
this.kdmAccountDetail.isPaperCame=0
this.kdmAccountDetail.isTonerCame=0
this.kdmAccountDetail.isItemsCame=0
this.kdmAccountDetail.ItemsInfo="No Items"
this.kdmAccountDetail.BlackCopies=0
this.kdmAccountDetail.ColourCopies=0
this.kdmAccountDetail.B2bCopies=0
this.kdmAccountDetail.Bindings=0

this.kdmAccountDetail.Expenses=0
    this.kdmAccountDetail.Expenses = 20
   // this.kdmAccountDetail.Expenses += this.tpmRent
this.kdmAccountDetail.Expenses+=this.currentBillKdm
//this.kdmAccountDetail.Expenses+= this.tonerCost* this.blackCopies
//this.kdmAccountDetail.Expenses+= this.paperRate* this.kdmAccountDetail.PaperSoldToday
this.kdmAccountDetail.Expenses= Math.ceil(this.kdmAccountDetail.Expenses)

this.kdmAccountDetail.TonerSpent=0
this.kdmAccountDetail.PaperSoldToday=0
this.kdmAccountDetail.TodayStayingCopies=0
this.kdmAccountDetail.TodayStayingMoney=0
this.kdmAccountDetail.OldStayingCopies=0
this.kdmAccountDetail.OldStayingMoney=0
this.kdmAccountDetail.GoneCopiesPast=0
this.kdmAccountDetail.GoneMoneyPast=0
this.kdmAccountDetail.NotesToday="No Notes"
this.kdmAccountDetail.CashIncome=0
this.kdmAccountDetail.PaytmIncome=0
this.kdmAccountDetail.TotalIncome=0



this.storeDateFormat.setHours(0);
this.storeDateFormat.setMinutes(0);
this.storeDateFormat.setSeconds(0);


let tmrw = this.storeDateFormat

tmrw.setDate(tmrw.getDate()+1);
this.tomorrowDate=tmrw
let sundayTime = tmrw.getTime()

let dateString = tmrw
let month ='' + (dateString.getMonth()+1);
let day =''+ dateString.getDate();
let year =''+ dateString.getFullYear();

if(month.length< 2){
  month ='0'+ month;
}
if(day.length<2 ){
  day= '0'+ day;
}
let dateSend = [year,month,day].join('-');
this.kdmAccountDetail.Date=dateSend
this.kdmAccountDetail.Day="SUNDAY"
this.kdmAccountDetail.GetTime= sundayTime

// this.kdmAccountDetail.NetProfit
// 


/**********************NETPROFIT CALCULATE****************************************/



if(this.kdmLabourDetail.RasheedPresent===1){
  this.kdmLabourDetail.RasheedPresent=1

  
  let rasheedexpense = this.rasheedSalary 

  this.rasheedExpense=Math.ceil(rasheedexpense)
 

}
if(this.kdmLabourDetail.AssanPresent===1){
  this.kdmLabourDetail.AssanPresent=1
  let assanexpense = this.assanSalary  +this.food
  this.assanExpense=Math.ceil(assanexpense)


}

if(this.kdmLabourDetail.ManiPresent===1){
  this.kdmLabourDetail.ManiPresent=1

  
  let maniexpense = this.maniSalary 

  this.maniExpense=Math.ceil(maniexpense)
 

}
this.kdmLabourDetail.Date= this.kdmAccountDetail.Date
this.kdmLabourDetail.Day = this.kdmAccountDetail.Day
this.kdmLabourDetail.GetTime= this.kdmAccountDetail.GetTime
this.kdmLabourDetail.RasheedExpense= this.rasheedExpense
this.kdmLabourDetail.AssanExpense=this.assanExpense
this.kdmLabourDetail.ManiExpense= this.maniExpense
/////////////////////////////////////////////////////////////
// this.kdmAccountDetail.Expenses+=this.tajExpense
// this.kdmAccountDetail.Expenses+= this.noorExpense


this.service.addTpmAcccounts(this.kdmAccountDetail).subscribe((event)=>{

this.service.addTpmLabours(this.kdmLabourDetail).subscribe((event: any)=>{


  this.isAddAccounts=false

  
      this.saveClicked.emit()
      // this.ngOnInit();

}, error=>{

console.log(error)
})

},error=>{
  console.log(error)

})


  },
  error=>{
    console.log(error)
  })
},
error=>{
  console.log(error)
})
}

else if(this.kdmAccountDetail.Day==="MONDAY"){
  // sundayKdmLabourDetail
  // getKdmLaboursById(id : any)
this.service.getTpmLaboursById(this.sundayId).subscribe((labour: any)=>{

  this.sundayKdmLabourDetail=labour
  if(this.kdmLabourDetail.RasheedPresent===0){
    this.sundayKdmLabourDetail.RasheedPresent=0
    this.sundayKdmLabourDetail.RasheedExpense =0
  }
if(this.kdmLabourDetail.AssanPresent===0){
  this.sundayKdmLabourDetail.AssanPresent=0
  this.sundayKdmLabourDetail.AssanExpense =this.food
}
if(this.kdmLabourDetail.ManiPresent===0){
  this.sundayKdmLabourDetail.ManiPresent=0
  this.sundayKdmLabourDetail.ManiExpense =0
}

this.service.editTpmLaboursById(this.sundayKdmLabourDetail,this.sundayId).subscribe((event: any)=>{


this.service.getTpmAccountsById(this.sundayIdAccount).subscribe((account: any)=>{
   this.sundayAccountDetail=account

   if(this.kdmLabourDetail.RasheedPresent===0){
    this.sundayAccountDetail.Expenses
    this.sundayKdmLabourDetail.RasheedExpense =0
  }
if(this.kdmLabourDetail.AssanPresent===0){
  this.sundayKdmLabourDetail.AssanPresent=0
  this.sundayKdmLabourDetail.AssanExpense =this.food
}
if(this.kdmLabourDetail.ManiPresent===0){
  this.sundayAccountDetail.Expenses
  this.sundayKdmLabourDetail.ManiExpense =0
}
  
})

this.service.addTpmAcccounts(this.kdmAccountDetail).subscribe((event)=>{
  
  this.service.addTpmLabours(this.kdmLabourDetail).subscribe((event: any)=>{
  
  
    this.isAddAccounts=false
        this.saveClicked.emit()
     
  // this.ngOnInit();
  
  
  }, error=>{
  
  console.log(error)
  })
  
  },error=>{
    console.log(error)
  
  })





})
})
  


// this.kdmAccountDetail.Expenses+=this.tajExpense
// this.kdmAccountDetail.Expenses+= this.noorExpense
// this.kdmAccountDetail.Expenses= Math.ceil(this.kdmAccountDetail.Expenses)

  
}
else{

  this.service.addTpmAcccounts(this.kdmAccountDetail).subscribe((event: any)=>{
 

    this.service.addTpmLabours(this.kdmLabourDetail).subscribe((event: any)=>{
  
  
      this.saveClicked.emit()
      this.isAddAccounts=false
  // this.ngOnInit();
  

  
    },
    error=>{
      console.log(error)
    })
  },
  error=>{
    console.log(error)
  })





}



}



}

itemsCheckBool2: boolean=false;
itemsCheckBool: any;
itemsCame(){

  if(this.itemsCheckBool.length){
    this.itemsCheckBool2=true
  }
  else{
    this.itemsCheckBool2=false;
  }
 

  
}


noEntry: boolean =false;
datePresent: boolean =false
showEntryInput : boolean =false;

tomorrowDate: any;
calenderSelected(){

  
  this.showEntryInput=true


}

calenderSelected2(){
  if(this.customers){
    console.log(this.date)
    this.date.setHours(0)
    this.date.setMinutes(0)
    this.date.setSeconds(0)
    if(this.date.getDay()===0){
      
      this.isAddAccounts=false
    this.showEntryInput=false

    this.date= new Date()
    this.date.setHours(0)
    this.date.setMinutes(0)
    this.date.setSeconds(0)
    }
    else{
  
      let today= new Date()
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
    
      if(this.date.getDay()===today.getDay() && this.date.getMonth()===today.getMonth() && this.date.getFullYear()===today.getFullYear()){

        let yesterday = today
  
        yesterday.setDate(yesterday.getDate()-1);
        // this.tomorrowDate=yesterday
        let yesterdayTime = yesterday.getTime()

        if(yesterday.getDay()===this.customers[0].Date.getDay() && yesterday.getMonth()===this.customers[0].Date.getMonth() && yesterday.getFullYear()===this.customers[0].Date.getFullYear()){


          this.showEntryInput=true




        }
        else{

          this.showEntryInput=false
          this.isAddAccounts=false

          this.date= new Date()
          this.date.setHours(0)
          this.date.setMinutes(0)
          this.date.setSeconds(0)

        }
  
  
  
  
          // this.showEntryInput=true
      }
      else{
        this.showEntryInput=false
        this.isAddAccounts=false

        this.date= new Date()
        this.date.setHours(0)
        this.date.setMinutes(0)
        this.date.setSeconds(0)


      }
  
    }

  }
else{
  this.showEntryInput=true
}

}






isHolidayCheck : boolean =false;
holidayClicked(){
  console.log(this.isHolidayCheck)
  console.log(this.date)
if(this.isHolidayCheck){
  this.isHoliday=1

}
else{
  this.isHoliday=0
}
  if(this.isHoliday){
    if(this.date){

      this.noEntry=true;
      this.saveAccounts()


  
    


    }



  }
}

  }

