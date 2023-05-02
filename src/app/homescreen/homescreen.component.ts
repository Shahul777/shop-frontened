import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopserviceService } from '../shopservice.service';
import { rentSheet } from '../kodambakkam/kdmDataModel';
import { houseAccount,rateSheet } from '../housespends/houseDataModel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {

  houseData : houseAccount = <houseAccount>{};
houseAccountDetail: houseAccount = <houseAccount>{};
houseRentSheet: rateSheet = <rateSheet>{};


  showkodambakkam: boolean = false;
  showTrustpuram: boolean = false;
  showCalculator: boolean = false;
  showAdmin: boolean = false;
  showNetCalculation: boolean = false;
  showHouseSpends: boolean = false;

  displayEditDialog : boolean =false;
  sourceProducts: any;
tempSourceProduct: any;
  targetProducts: any;

showData : boolean = false;
isBlackXerox: boolean =false
isBlackPrintout : boolean =false;
isColourXerox : boolean =false;
isColourPrintout : boolean =false;
isBinding : boolean =false;
isScanning : boolean =false;
isLamination : boolean =false;

title : any ='';
copy: any;
copy2: any
blackCopies : any;
singleCopies: any;
b2bCopies : any;
blackPrintCopies: any;
blacksinglePrint: any;
blackB2bPrint : any;
isNetCharge : boolean =true
isFreshCustomer : boolean = true
colourCopies: any;
colourPrintCopies: any;
scanCopies : any;
bindingRate : any;
laminationRate : any;
totalValue : number=0;
value1: string = "off";
value2 : string ="off"
houseValue : string ="cash"
stateOptions: any
rentSheet: rentSheet = <rentSheet>{};

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
tpmRent: any;
kdmRent: any;
currentBillKdm: any;
currentBillTpm : any;
  // subscription: Subscription;
  // private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService
  constructor(private router: Router , private service : ShopserviceService ,private http : HttpClient) { }

  items: any;
  trustpuramSaved() {
    this.adminTrustpuram = false;
    this.showTrustpuram = false;
    this.ngOnInit();
  }
  kodambakkamSaved() {
    this.showkodambakkam = false;
    this.adminKodambakkam = false
    this.ngOnInit();
  }
  dockItems: any;
  dockItemsSpents: any;
  menubarItems: any;
  adminTrustpuram: boolean = false
  dateShow: any;
  dateStr: any='';

  leftMenu: any[]=[

    {
      label: 'Paytm',
      tooltipOptions: {
          tooltipLabel: "Paytm",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/paytm.png",
      command: () => {

          this.paytmNavigate();
    
      }
  },
  {
    label: 'Camera',
    tooltipOptions: {
        tooltipLabel: "camera",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/hikconnect.png",
    command: () => {

        this.hikCamera();
  
    }
},


    {
      label: 'Kodambakkam',
      tooltipOptions: {
          tooltipLabel: "Kodambakkam",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/kodambakkam2.png",
      command: () => {
          // this.displayTerminal = true;
          // this.editClicked("Black-Printout")
          this.showkodambakkamFunc('labour');
      }
  }
,
  {
    label: 'Trustpuram',
    tooltipOptions: {
        tooltipLabel: "Trustpuram",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/trustpuram2.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        this.showTrustpuramFunc('labour');
     
    }
}



  ]
  tempMenu4: any[]=[
    {
      label: 'House-Spends',
      tooltipOptions: {
          tooltipLabel: "House-Spends",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/house.png",
      command: () => {
          // this.displayTerminal = true;
          // this.editClicked("Black-Printout")
         
          this.housespendsFunc()
      }
  }
,
  {
    label: 'Net-Calculations',
    tooltipOptions: {
        tooltipLabel: "Net-Calculations",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/rupee.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        this.netcalculateFunc();
     
    }
}



  ]




  tempMenu3 : any[]=[    {
    label: 'Grocerry',
    tooltipOptions: {
        tooltipLabel: "Grocerry",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/grocerry.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        this.houseSpendSave("grocerry")
    }
}]
  tempMenu : any[]=[
    {
        label: 'Calendar',
        tooltipOptions: {
            tooltipLabel: "Calendar",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/calendar.png",
        command: () => {
     
  
           this.calendarOn()
            console.log("fefef")
     
        }
    },
    {
        label: 'Grocerry',
        tooltipOptions: {
            tooltipLabel: "Grocerry",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/grocerry.png",
        command: () => {
            // this.displayTerminal = true;
            // this.editClicked("Black-Printout")
            this.houseSpendSave("grocerry")
        }
    },
    {
        label: 'Maintanence',
        tooltipOptions: {
            tooltipLabel: "Maintanence",
            tooltipPosition: 'top',
            positionLeft: 15,
            positionTop: -15
        },
        icon: "assets/showcase/maintanence.png",
        command: () => {
          this.houseSpendSave("maintanence")
          // this.editClicked("Colour-Xerox")
            // this.messageService.add({severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE'});
        }
    },
    {
        label: 'Entertainment',
        tooltipOptions: {
            tooltipLabel: "Entertainment",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/entertainment.png",
        command: () => {
          this.houseSpendSave("entertainment")
          // this.editClicked("Colour-Printout")
            // this.messageService.add({severity: 'warn', summary: 'Safari has stopped working'});
        }
    },
    {
        label: 'Deposit',
        tooltipOptions: {
            tooltipLabel: "Deposit",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/deposit.png",
        command: () => {
          this.houseSpendSave("deposit")
            // this.displayGalleria = true
            // this.editClicked("Bindings")
        }
    },
    {
      label: 'Delete Values',
      tooltipOptions: {
          tooltipLabel: "Delete Values",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/delete.png",
      command: () => {
        this.houseSpendSave("delete")
          // this.displayGalleria = true
          // this.editClicked("Bindings")
      }
  },
  
  ];
displayHouseSpend: boolean =false
grocerryClicked: boolean =false;
maintanenceClicked: boolean =false;
entertainmentClicked: boolean =false;
depositClicked: boolean =false;
deleteClicked: boolean =false;

grocerryAmt: number=0;
maintanenceAmt: number=0;
entertainmentAmt: number=0;
depositAmt: number=0;
deleteAmt: number=0;



cancelHouse(){



  this.grocerryClicked=false;
  this.maintanenceClicked=false;
  this.entertainmentClicked =false;
  this.depositClicked =false;
  this.deleteClicked=false
  
  this.displayHouseSpend=false
  this.initializeHouseAmt()
}


saveGrocerry(){

  this.displayHouseSpend=false
  this.dateSelected(new Date())
console.log(this.houseData)

// this.grocerryClicked=false;
// this.maintanenceClicked=false;
// this.entertainmentClicked =false;
// this.depositClicked =false;
// this.deleteClicked=false

// this.displayHouseSpend=false
// this.initializeHouseAmt()
// this.spendPage()
}



saveHouse(){



  if(this.grocerryClicked){

    if(this.houseValue==="cash"){
      this.houseData.CashExpense+=this.grocerryAmt
    }
    else{
      this.houseData.PaytmExpense+= this.grocerryAmt
    }

this.houseData.Grocerry+=this.grocerryAmt
console.log(this.houseValue)
this.showProgress=true
this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{

  console.log("EDITEDD HOUSE")
  this.showProgress=false
},
error=>{
  this.showProgress=false
  console.log("NOT EDITTED")
})

  }
  else if(this.maintanenceClicked){

    if(this.shopCurrentAmt){
this.houseData.ShopCurrentBill+= this.shopCurrentAmt




    }
   if(this.houseCurrentAmt){
    this.houseData.HomeCurrentBill+= this.houseCurrentAmt
    }
    if(this.paperAmt){
      this.houseData.PaperCost+= this.paperAmt
    }
    if(this.blackTonerAmt){
      this.houseData.BlackTonerCost+= this.blackTonerAmt
    }
    if(this.colourTonerAmt){
      this.houseData.ColourTonerCost+= this.colourTonerAmt
    }
    if(this.blackMaintainAmt){
      this.houseData.BlackMachineMaintanence+= this.blackMaintainAmt
    }
    if(this.colourMaintainAmt){
      this.houseData.ColourMachineMaintanence+= this.colourMaintainAmt
    }
    if(this.bindingAmt ){
      // this.houseData.+= this.bindingAmt 
      this.houseData.Bindings+= this.bindingAmt
    }
    if(this.otherAmt ){
      this.houseData.Others+= this.otherAmt 
    }


    if(this.houseValue==="cash"){
      this.houseData.CashExpense+=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
        this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
        this.bindingAmt+this.otherAmt )

        this.houseData.Maintanence+=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
          this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
          this.bindingAmt+this.otherAmt )
    }
    else{
      this.houseData.PaytmExpense+=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
        this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
        this.bindingAmt+this.otherAmt )

        
        this.houseData.Maintanence+=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
          this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
          this.bindingAmt+this.otherAmt )
    }
    
    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    
  }
  else if(this.entertainmentClicked){
    this.houseData.Entertainment+=this.entertainmentAmt
    if(this.houseValue==="cash"){
      this.houseData.CashExpense+=this.entertainmentAmt
    }
    else{
      this.houseData.PaytmExpense+= this.entertainmentAmt
    }
    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    

  }
  else if(this.depositClicked){
    this.houseData.MoneyDeposit+=this.depositAmt

    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    

  }

//   else if(this.deleteClicked){
// this.deleteHouseEntry=true

// let len = this.dockItemsSpents.length
// let index= len-1
// if(index !== -1){
//   this.dockItemsSpents.splice(index,1)
// }

// console.log(this.dockItemsSpents)
//   }

// if(!this.deleteClicked){

  this.grocerryClicked=false;
  this.maintanenceClicked=false;
  this.entertainmentClicked =false;
  this.depositClicked =false;
  this.deleteClicked=false
  
  this.displayHouseSpend=false
  this.initializeHouseAmt()
  this.spendPage()


}


deleteHouseEntry:boolean =false
deleteSaveHouse(){



  if(this.grocerryClicked){

    if(this.houseValue==="cash"){
      this.houseData.CashExpense-=this.grocerryAmt
      if(this.houseData.CashExpense<0){
        this.houseData.CashExpense=0
      }
    }
    else{

      this.houseData.PaytmExpense-= this.grocerryAmt

      if(this.houseData.PaytmExpense<0){
        this.houseData.PaytmExpense=0
      }


    }

this.houseData.Grocerry-=this.grocerryAmt


if(this.houseData.Grocerry<0){
  this.houseData.Grocerry=0
}



console.log(this.houseValue)
this.showProgress=true
this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{

  console.log("EDITEDD HOUSE")
  this.showProgress=false
},
error=>{
  this.showProgress=false
  console.log("NOT EDITTED")
})

  }
  else if(this.maintanenceClicked){

    if(this.shopCurrentAmt){
this.houseData.ShopCurrentBill-= this.shopCurrentAmt

if(this.houseData.ShopCurrentBill<0){
  this.houseData.ShopCurrentBill=0
}



    }
   if(this.houseCurrentAmt){
    this.houseData.HomeCurrentBill-= this.houseCurrentAmt

    if(this.houseData.HomeCurrentBill<0){
      this.houseData.HomeCurrentBill=0
    }
    


    }
    if(this.paperAmt){
      this.houseData.PaperCost-= this.paperAmt

      if(this.houseData.PaperCost<0){
        this.houseData.PaperCost=0
      }
      

    }
    if(this.blackTonerAmt){
      this.houseData.BlackTonerCost-= this.blackTonerAmt
      if(this.houseData.BlackTonerCost<0){
        this.houseData.BlackTonerCost=0
      }
      
    }
    if(this.colourTonerAmt){
      this.houseData.ColourTonerCost-= this.colourTonerAmt

      if(this.houseData.ColourTonerCost<0){
        this.houseData.ColourTonerCost=0
      }
      


    }
    if(this.blackMaintainAmt){
      this.houseData.BlackMachineMaintanence-= this.blackMaintainAmt
      if(this.houseData.BlackMachineMaintanence<0){
        this.houseData.BlackMachineMaintanence=0
      }
      

    }
    if(this.colourMaintainAmt){
      this.houseData.ColourMachineMaintanence-= this.colourMaintainAmt

      if(this.houseData.ColourMachineMaintanence<0){
        this.houseData.ColourMachineMaintanence=0
      }
      
    }
    if(this.bindingAmt ){
      // this.houseData.+= this.bindingAmt 
      this.houseData.Bindings-= this.bindingAmt

      if(this.houseData.Bindings<0){
        this.houseData.Bindings=0
      }
      


    }
    if(this.otherAmt ){
      this.houseData.Others-= this.otherAmt 

      if(this.houseData.Others<0){
        this.houseData.Others=0
      }
      



    }


    if(this.houseValue==="cash"){
      this.houseData.CashExpense-=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
        this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
        this.bindingAmt+this.otherAmt )

        this.houseData.Maintanence-=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
          this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
          this.bindingAmt+this.otherAmt )


          if(this.houseData.CashExpense<0){
            this.houseData.CashExpense=0
          }
          if(this.houseData.Maintanence<0){
            this.houseData.Maintanence=0
          }
              



    }
    else{
      this.houseData.PaytmExpense-=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
        this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
        this.bindingAmt+this.otherAmt )

        
        this.houseData.Maintanence-=(this.shopCurrentAmt+this.houseCurrentAmt+this.paperAmt+
          this.blackTonerAmt+this.colourTonerAmt+this.blackMaintainAmt+this.colourMaintainAmt+
          this.bindingAmt+this.otherAmt )

          if(this.houseData.PaytmExpense<0){
            this.houseData.PaytmExpense=0
          }
          if(this.houseData.Maintanence<0){
            this.houseData.Maintanence=0
          }
              


    }
    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    

  }
  else if(this.entertainmentClicked){
    this.houseData.Entertainment-=this.entertainmentAmt

    if(this.houseData.Entertainment<0){
      this.houseData.Entertainment=0
    }
        


    if(this.houseValue==="cash"){
      this.houseData.CashExpense-=this.entertainmentAmt
      if(this.houseData.CashExpense<0){
        this.houseData.CashExpense=0
      }
          
  
    }
    else{
      this.houseData.PaytmExpense-= this.entertainmentAmt

      if(this.houseData.PaytmExpense<0){
        this.houseData.PaytmExpense=0
      }
          
  


    }
    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    

  }
  else if(this.depositClicked){
    this.houseData.MoneyDeposit-=this.depositAmt

    if(this.houseData.MoneyDeposit<0){
      this.houseData.MoneyDeposit=0
    }
        

    this.showProgress=true
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{
    
      console.log("EDITEDD HOUSE")
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      console.log("NOT EDITTED")
    })
    

  }

  // else if(this.deleteClicked){


  // }

// if(!this.deleteClicked){

  this.grocerryClicked=false;
  this.maintanenceClicked=false;
  this.entertainmentClicked =false;
  this.depositClicked =false;
  this.deleteClicked=false
  
  this.displayHouseSpend=false
  this.initializeHouseAmt()
  this.spendPage()



}















  houseSpendSave(value : string){
    if(!this.calendarClicked){
      this.grocerryClicked=true;
      this.maintanenceClicked=false;
      this.entertainmentClicked =false;
      this.depositClicked =false;
      this.deleteClicked=false
  
  
      this.displayHouseSpend=true


    }
else{
  if(value==="grocerry"){

    this.grocerryClicked=true;
    this.maintanenceClicked=false;
    this.entertainmentClicked =false;
    this.depositClicked =false;
    this.deleteClicked=false


    this.displayHouseSpend=true

  }
  else if( value==="maintanence"){

    this.grocerryClicked=false;
    this.maintanenceClicked=true;
    this.entertainmentClicked =false;
    this.depositClicked =false;
    this.deleteClicked=false




    this.displayHouseSpend=true
  }
  else if( value==="entertainment"){

    this.grocerryClicked=false;
    this.maintanenceClicked=false;
    this.entertainmentClicked =true;
    this.depositClicked =false;
    this.deleteClicked=false



    this.displayHouseSpend=true
  }
  else if( value==="deposit"){

    this.grocerryClicked=false;
    this.maintanenceClicked=false;
    this.entertainmentClicked =false;
    this.depositClicked =true;
    this.deleteClicked=false



    this.displayHouseSpend=true
  }

  else if( value==="delete"){

    this.grocerryClicked=false;
    this.maintanenceClicked=false;
    this.entertainmentClicked =false;
    this.depositClicked =false;
    this.deleteClicked=false;


    this.deleteHouseEntry=true

    let len = this.dockItemsSpents.length
    let index= len-1
    if(index !== -1){
      this.dockItemsSpents.splice(index,1)
    }
    
    console.log(this.dockItemsSpents)




    // this.displayHouseSpend=true
  }


}


  }
  initializeHouseAccount(){

   
    this.houseAccountDetail.Date = new Date()
this.houseAccountDetail.DateString =""
this.houseAccountDetail.MonthString =""
this.houseAccountDetail.YearString =""
this.houseAccountDetail.Grocerry =0
this.houseAccountDetail.Entertainment=0
this.houseAccountDetail.Maintanence =0
this.houseAccountDetail.ShopCurrentBill=0
this.houseAccountDetail.HomeCurrentBill =0
this.houseAccountDetail.PaperCost =0
this.houseAccountDetail.BlackTonerCost =0
this.houseAccountDetail.ColourTonerCost =0
this.houseAccountDetail.Bindings =0
this.houseAccountDetail.Others =0
this.houseAccountDetail.BlackMachineMaintanence =0
this.houseAccountDetail.ColourMachineMaintanence =0
this.houseAccountDetail.MoneyDeposit =0
this.houseAccountDetail.PaytmExpense =0
this.houseAccountDetail.CashExpense=0
this.houseAccountDetail.TotalExpense =0
this.houseAccountDetail.TotalProfit =0

  }
  moneyOptions : any
  passwordClick : boolean = false

  paytmNavigate(){
    // window.location.href = "paytm://";
    

    window.open('https://play.google.com/store/apps/details?id=com.paytm.business&hl=en_IN&gl=US&pli=1', '_blank');
  }
  hikCamera(){
    // window.location.href = "hikconnect://"

    window.open('https://play.google.com/store/apps/details?id=com.connect.enduser&hl=en_IN&gl=US', '_blank');
  }
  imageUrls = ['giphy.gif', 'wall.jpg', 'wall3.jpg','tea.gif'];
  currentImageIndex = 0;

  changeBackgroundImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    
    let dockWindow : any
    
     dockWindow = document.querySelector('.dock-window'+this.currentImageIndex);

    
    // dockWindow.style.backgroundImage = `url(${this.imageUrls[this.currentImageIndex]})`;
    // dockWindow.classList.add('fade-out');
    setTimeout(() => {
      // dockWindow.style.backgroundImage = `url(${this.imageUrls[this.currentImageIndex]})`;
      // dockWindow.classList.remove('fade-out');
    }, 1000);
  


    
  }
  ngOnInit() {
    this.imageUrls = [ 'giphy.gif','wall.jpg','wall3.jpg','tea.gif',];
    setInterval(() => {
      this.changeBackgroundImage();
    }, 2000);
    this.passwordClick= false
    this.deleteHouseEntry=false
this.initializeHouseAccount()
this.initializeHouseAmt()

if(this.spendShow){
this.spendPage()

}



    this.totalValue=0
    this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
    this.moneyOptions=  [{label: 'Cash', value: 'cash'}, {label: 'Paytm', value: 'paytm'}];
    this.sourceProducts=[{'name': 'Black-Xerox','price':0,'image':'blackxerox'},{
      'name': 'Black-Printout','price':0,'image':'blackxerox'
    },{'name': 'Colour-Xerox','price':0,'image':'colour'},
    {'name': 'Colour-Printout','price':0,'image':'colour'},
    {'name': 'Bindings','price':0,'image':'binding'},
    {'name': 'Lamination','price':0,'image':'lamination'},
    {'name': 'Scanning','price':0,'image':'scanning'},
  ]
  this.tempSourceProduct=[{'name': 'Black-Xerox','price':0,'image':'blackxerox'},{
    'name': 'Black-Printout','price':0,'image':'blackxerox'
  },{'name': 'Colour-Xerox','price':0,'image':'colour'},
  {'name': 'Colour-Printout','price':0,'image':'colour'},
  {'name': 'Bindings','price':0,'image':'binding'},
  {'name': 'Lamination','price':0,'image':'lamination'},
  {'name': 'Scanning','price':0,'image':'scanning'},
]
      this.targetProducts = [];
      this.showData=true


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




    this.dateShow=new Date()

    let dateString = this.dateShow
    let month = '' + (dateString.getMonth() + 1);
    let day = '' + dateString.getDate();
    let year = '' + dateString.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    this.dateStr = [day, month, year].join('-');


    this.showCalculator = true
    this.adminKodambakkam = false
    this.adminTrustpuram = false
    this.menubarItems = [
      {
          label: 'Reset',
          className: 'menubar-root',
          command: () => {
          
            this.resetAll()
          }


         
      },
   
  ];



  this.dockItems = [

    {
      label: 'Reset',
      tooltipOptions: {
          tooltipLabel: "reset",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/reset.png",
      command: () => {
          // this.displayFinder = true;
       this.resetAll()
      }
  },




    {
        label: 'Black Xerox',
        tooltipOptions: {
            tooltipLabel: "Black Xerox",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/blackxerox.png",
        command: () => {
            // this.displayFinder = true;
            console.log("fefef")
            this.editClicked("Black-Xerox")
        }
    },
    {
        label: 'Black Printout',
        tooltipOptions: {
            tooltipLabel: "Black Printout",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/blackxerox.png",
        command: () => {
            // this.displayTerminal = true;
            this.editClicked("Black-Printout")
        }
    },
    {
        label: 'Colour Xerox',
        tooltipOptions: {
            tooltipLabel: "Colour Xerox",
            tooltipPosition: 'top',
            positionLeft: 15,
            positionTop: -15
        },
        icon: "assets/showcase/colour.png",
        command: () => {
          this.editClicked("Colour-Xerox")
            // this.messageService.add({severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE'});
        }
    },
    {
        label: 'Colour Printout',
        tooltipOptions: {
            tooltipLabel: "Colour Printout",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/colour.png",
        command: () => {
          this.editClicked("Colour-Printout")
            // this.messageService.add({severity: 'warn', summary: 'Safari has stopped working'});
        }
    },
    {
        label: 'Bindings',
        tooltipOptions: {
            tooltipLabel: "Bindings",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/binding.png",
        command: () => {
            // this.displayGalleria = true
            this.editClicked("Bindings")
        }
    },
    {
        label: 'Lamination',
        tooltipOptions: {
          tooltipLabel: "Lamination",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/lamination.png",
      command: () => {
          // this.displayGalleria = true
          this.editClicked("Lamination")
      }
    },
    {
      label: 'Scanning',
      tooltipOptions: {
        tooltipLabel: "Scanning",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/scanning.png",
    command: () => {
        // this.displayGalleria = true
        this.editClicked("Scanning")
    }
    },
    {
      label: 'Net-Calculations',
      tooltipOptions: {
          tooltipLabel: "Net-Calculations",
          tooltipPosition: 'top',
          positionTop: -15,
          positionLeft: 15
      },
      icon: "assets/showcase/rupee.png",
      command: () => {
          // this.displayTerminal = true;
          // this.editClicked("Black-Printout")
          this.netcalculateFunc();
       
      }
    }
    ,
];





    this.items = [
      {
        label: 'Kodambakkam',
        icon: 'pi pi-refresh', command: () => {
          this.showkodambakkamFunc('labour');
        }
      },
      {
        label: 'Trustpuram',
        icon: 'pi pi-times', command: () => {
          this.showTrustpuramFunc('labour');
        }
      },
      {
        label: 'Net-Calculation',
        icon: 'pi pi-external-link'
        , command: () => {
          this.netcalculateFunc();
        }
      },
      {
        label: 'House-Spends',
        icon: 'pi pi-upload', command: () => {
          this.housespendsFunc();
        }
      },


    ];





  }

  spendShow: boolean =false;
  dateSpend: any
  calendarShow : boolean=false
shopCurrentAmt : number =0
houseCurrentAmt : number =0
paperAmt : number =0
blackTonerAmt : number =0
colourTonerAmt : number =0
blackMaintainAmt : number =0
colourMaintainAmt : number =0
bindingAmt : number =0
otherAmt : number =0



  initializeHouseAmt(){
    this.shopCurrentAmt =0
    this.houseCurrentAmt  =0
    this.paperAmt  =0
    this.blackTonerAmt  =0
    this.colourTonerAmt  =0
    this.blackMaintainAmt  =0
    this.colourMaintainAmt  =0
    this.bindingAmt  =0
    this.otherAmt =0


    
    this.grocerryAmt=0;
    this.maintanenceAmt=0;
    this.entertainmentAmt=0;
    this.depositAmt=0;
    this.deleteAmt=0;
  }


  calendarOn(){
    this.spendShow=false
    this.calendarShow=true
    this.calendarClicked=true
  }
  showProgress: boolean =false
  houseId : any;
  // houseIdPresent : boolean =false
calendarClicked: boolean =false
  dateSelected(event:any){
    if(this.calendarClicked){
      this.spendShow=true
    }
  


this.showProgress=true

console.log(event)

if(this.calendarClicked){
  this.houseValue ="cash"
  this.initializeHouseAmt()
  let temp=[]
  for(let i=1 ; i < this.tempMenu.length ; i++){
    
    temp.push(this.tempMenu[i])
  }
  this.dockItemsSpents=[]
  this.dockItemsSpents=temp
}



let dateString = event
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

this.initializeHouseAccount()
this.houseAccountDetail.MonthString= month
this.houseAccountDetail.YearString=year
this.houseAccountDetail.Date=dateSend
this.houseAccountDetail.DateString= day
this.service.getHouseAccounts().subscribe((account: any)=>{

  if(!account.length){

    this.service.addHouseAccounts(this.houseAccountDetail).subscribe((event: any)=>{


      this.addedHouseGetThat(day, month, year)
      console.log("ADDDED HOUSE ACCOUNT")
    },error=>{
      this.calendarShow=false
      console.log("CANT ADD HOUSE ACCOUNT")
      this.showProgress=false
    })





 

  }

  else{


this.service.getHouseAccounts().subscribe((account: any)=>{

let accountCheck = false
account.forEach((ele : any)=>{

  if(ele.MonthString===month && ele.YearString===year){
    this.houseData=ele
    accountCheck=true
    console.log(this.houseData)
this.houseId= ele.id


if(!this.calendarClicked){

  this.houseData.Grocerry+=this.grocerryAmt
  
if(this.houseValue==="cash"){
this.houseData.CashExpense+=this.grocerryAmt
}
else{
this.houseData.PaytmExpense+= this.grocerryAmt
}
this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{

console.log("EDITEDD HOUSE")
this.spendPage()
this.showProgress=false
},
error=>{
this.showProgress=false
this.spendPage()
console.log("NOT EDITTED")
})


}
    else{
      this.calendarShow=false
      this.showProgress=false
    }

  }


})

if(!accountCheck){
  this.service.addHouseAccounts(this.houseAccountDetail).subscribe((event: any)=>{


    this.addedHouseGetThat(day, month, year)
    console.log("ADDDED HOUSE ACCOUNT")
  },error=>{

    console.log("CANT ADD HOUSE ACCOUNT")
    this.calendarShow=false
    
    this.showProgress=false
  })



}

},error=>{
  this.calendarShow=false
    
    this.showProgress=false
})


  }
},
error=>{
  console.log(error)
  this.calendarShow=false
  this.showProgress=false
}
)




  }

  tempMenu2: any=[
    {
        label: 'Admin',
        tooltipOptions: {
            tooltipLabel: "Admin",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/admin.png",
        command: () => {
     
  
           this.adminClicked()
            console.log("fefef")
     
        }
    },
    {
        label: 'Kodambakkam',
        tooltipOptions: {
            tooltipLabel: "Kodambakkam",
            tooltipPosition: 'top',
            positionTop: -15,
            positionLeft: 15
        },
        icon: "assets/showcase/kodambakkam.png",
        command: () => {
          this.kodambakkamAdmin()
            // this.displayTerminal = true;
            // this.editClicked("Black-Printout")
        }
    },
    {
        label: 'Trustpuram',
        tooltipOptions: {
            tooltipLabel: "Trustpuram",
            tooltipPosition: 'top',
            positionLeft: 15,
            positionTop: -15
        },
        icon: "assets/showcase/trustpuram.png",
        command: () => {

          this.trustpuramAdmin()
          // this.editClicked("Colour-Xerox")
            // this.messageService.add({severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE'});
        }
    },

  
  ];
  addedHouseGetThat(day : string , month : string , year : string){
  this.service.getHouseAccounts().subscribe((account: any)=>{


    if(account.length){

      account.forEach((ele : any)=>{

        if(ele.MonthString===month && ele.YearString===year){
          this.houseData=ele

          this.houseId= ele.id

          if(!this.calendarClicked){

            this.houseData.Grocerry+=this.grocerryAmt
            
    if(this.houseValue==="cash"){
      this.houseData.CashExpense+=this.grocerryAmt
    }
    else{
      this.houseData.PaytmExpense+= this.grocerryAmt
    }
    this.service.editHouseAccountsById(this.houseData, this.houseId).subscribe((event: any)=>{

      console.log("EDITEDD HOUSE")
      this.spendPage()
      this.showProgress=false
    },
    error=>{
      this.showProgress=false
      this.spendPage()
      console.log("NOT EDITTED")
    })


          }

          console.log(this.houseData)
        }


      })

if(this.calendarClicked){
  this.calendarShow=false

      this.showProgress=false
}
    

    }
    else{
      this.calendarShow=false


      this.showProgress=false
    }
  },
  error=>{

    this.showProgress=false
  })
  
  }
  kodambakkamAdmin(){
    this.showkodambakkam=true
    this.adminKodambakkam=true
  }
  trustpuramAdmin(){
    this.showTrustpuram=true
    this.adminTrustpuram=true
  }
  adminClicked(){
    this.dockItemsSpents=[]
    let temp=[]
for(let i=1 ; i < this.tempMenu2.length ; i++){
  
  temp.push(this.tempMenu2[i])
}
this.dockItemsSpents=[]
this.dockItemsSpents=temp
  }
  dataEntry: boolean =true

itemPassTemp : any[]=[ 
  {
    label: 'zero',
    tooltipOptions: {
        tooltipLabel: "zero",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/0.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("0","zero")
    }
  },
  {
    label: 'five',
    tooltipOptions: {
        tooltipLabel: "five",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/5.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("5","five")
    }
  },
  {
    label: 'eight',
    tooltipOptions: {
        tooltipLabel: "eight",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/8.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("8","eight")
    }
  },
  {
    label: 'seven',
    tooltipOptions: {
        tooltipLabel: "seven",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/7.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("7" ,"seven")
    }
  },
  {
    label: 'six',
    tooltipOptions: {
        tooltipLabel: "six",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/6.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("6" , "six")
    }
  }]



  dockItemsPass: any[]=[ 
{
  label: 'zero',
  tooltipOptions: {
      tooltipLabel: "zero",
      tooltipPosition: 'top',
      positionTop: -15,
      positionLeft: 15
  },
  icon: "assets/showcase/0.png",
  command: () => {
      // this.displayTerminal = true;
      // this.editClicked("Black-Printout")
      // this.houseSpendSave("grocerry")
      this.passValidate("0" ,"zero")
  }
},
{
  label: 'five',
  tooltipOptions: {
      tooltipLabel: "five",
      tooltipPosition: 'top',
      positionTop: -15,
      positionLeft: 15
  },
  icon: "assets/showcase/5.png",
  command: () => {
      // this.displayTerminal = true;
      // this.editClicked("Black-Printout")
      // this.houseSpendSave("grocerry")
      this.passValidate("5","five")
  }
},
{
  label: 'eight',
  tooltipOptions: {
      tooltipLabel: "eight",
      tooltipPosition: 'top',
      positionTop: -15,
      positionLeft: 15
  },
  icon: "assets/showcase/8.png",
  command: () => {
      // this.displayTerminal = true;
      // this.editClicked("Black-Printout")
      // this.houseSpendSave("grocerry")
      this.passValidate("8","eight")
  }
},
{
  label: 'seven',
  tooltipOptions: {
      tooltipLabel: "seven",
      tooltipPosition: 'top',
      positionTop: -15,
      positionLeft: 15
  },
  icon: "assets/showcase/7.png",
  command: () => {
      // this.displayTerminal = true;
      // this.editClicked("Black-Printout")
      // this.houseSpendSave("grocerry")
      this.passValidate("7", "seven")
  }
},
{
  label: 'six',
  tooltipOptions: {
      tooltipLabel: "six",
      tooltipPosition: 'top',
      positionTop: -15,
      positionLeft: 15
  },
  icon: "assets/showcase/6.png",
  command: () => {
      // this.displayTerminal = true;
      // this.editClicked("Black-Printout")
      // this.houseSpendSave("grocerry")
      this.passValidate("6","six")
  }
}]

password : string = "786"
counter: number =0
passEnter: string=""
passValidate(number: string, word: string){
  this.counter+=1

  this.passEnter+=number


  if(this.counter===5 && this.passEnter!==this.password ){
    this.counter=0
      this.passEnter=""
      this.spendPage()

  }
  else if(this.counter===3 && this.passEnter==this.password ){



this.dockItemsSpents=[]


    this.dockItemsSpents.push(this.tempMenu3[0])
         this.dockItemsSpents.push(this.tempMenu[0])
      this.dockItemsSpents.push(this.tempMenu2[0])
      this.dockItemsSpents.push(this.tempMenu4[0])
      this.dockItemsSpents.push(this.tempMenu4[1])

      this.passwordClick=false
this.spendShow=true



  }
  else{

    this.dockItemsSpents=[]
    this.spendShow=false

    if(this.dockItemsPass.length){

      for(let i=0 ; i< this.dockItemsPass.length;i++){
        if(this.dockItemsPass[i].label===word){
        
          let index = i
          if(index !== -1){
          this.dockItemsPass.splice(index,1)
        
          break
        }
        }
        
        
        
            }
        
    }


// let len = this.dockItemsSpents.length
// let index= len-1
// if(index !== -1){
//   this.dockItemsSpents.splice(index,1)
// }

  }

  // }

}
  spendPage(){

    if(!this.spendShow){
      this.counter=0
      this.passEnter=""
      this.dockItemsPass=[ 
  {
    label: 'zero',
    tooltipOptions: {
        tooltipLabel: "zero",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/0.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("0","zero")
    }
  },
  {
    label: 'five',
    tooltipOptions: {
        tooltipLabel: "five",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/5.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("5","five")
    }
  },
  {
    label: 'eight',
    tooltipOptions: {
        tooltipLabel: "eight",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/8.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("8","eight")
    }
  },
  {
    label: 'seven',
    tooltipOptions: {
        tooltipLabel: "seven",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/7.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("7" ,"seven")
    }
  },
  {
    label: 'six',
    tooltipOptions: {
        tooltipLabel: "six",
        tooltipPosition: 'top',
        positionTop: -15,
        positionLeft: 15
    },
    icon: "assets/showcase/6.png",
    command: () => {
        // this.displayTerminal = true;
        // this.editClicked("Black-Printout")
        // this.houseSpendSave("grocerry")
        this.passValidate("6" , "six")
    }
  }]
      this.passwordClick=true
      this.spendShow=true
      this.dockItemsSpents=[]
      this.dateSpend=new Date()
      this.dockItemsSpents.push(this.tempMenu3[0])
      // this.dockItemsSpents.push(this.tempMenu[0])
      // this.dockItemsSpents.push(this.tempMenu2[0])
      // this.dockItemsSpents.push(this.tempMenu4[0])
      // this.dockItemsSpents.push(this.tempMenu4[1])

this.dataEntry=false

      this.deleteHouseEntry=false
      this.calendarClicked=false
    }
    else{

      this.counter=0
      this.passEnter=""


      this.passwordClick=false
      this.dockItemsSpents=[]

      this.dockItemsPass=[ 
        {
          label: 'zero',
          tooltipOptions: {
              tooltipLabel: "zero",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/0.png",
          command: () => {
              // this.displayTerminal = true;
              // this.editClicked("Black-Printout")
              // this.houseSpendSave("grocerry")
              this.passValidate("0","zero")
          }
        },
        {
          label: 'five',
          tooltipOptions: {
              tooltipLabel: "five",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/5.png",
          command: () => {
              // this.displayTerminal = true;
              // this.editClicked("Black-Printout")
              // this.houseSpendSave("grocerry")
              this.passValidate("5","five")
          }
        },
        {
          label: 'eight',
          tooltipOptions: {
              tooltipLabel: "eight",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/8.png",
          command: () => {
              // this.displayTerminal = true;
              // this.editClicked("Black-Printout")
              // this.houseSpendSave("grocerry")
              this.passValidate("8","eight")
          }
        },
        {
          label: 'seven',
          tooltipOptions: {
              tooltipLabel: "seven",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/7.png",
          command: () => {
              // this.displayTerminal = true;
              // this.editClicked("Black-Printout")
              // this.houseSpendSave("grocerry")
              this.passValidate("7" ,"seven")
          }
        },
        {
          label: 'six',
          tooltipOptions: {
              tooltipLabel: "six",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/6.png",
          command: () => {
              // this.displayTerminal = true;
              // this.editClicked("Black-Printout")
              // this.houseSpendSave("grocerry")
              this.passValidate("6" , "six")
          }
        }]
      this.dataEntry=true
      this.spendShow=false
      this.calendarShow=false
      this.dateSpend=new Date()
      this.deleteHouseEntry=false
      this.calendarClicked=false


    }

  }
  adminfunc(event: any) {
    console.log(event)
  }
  netcalculateFunc() {
    this.showCalculator = false;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = true;
    this.showHouseSpends = false;
  }
  housespendsFunc() {
    this.showCalculator = false;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = false;
    this.showHouseSpends = true;
  }
  adminKodambakkam: boolean = false;

  showkodambakkamFunc(event: any) {
    if (event === "admin") {
      console.log(event)
      this.adminKodambakkam = true
      this.showCalculator = false;
      this.showTrustpuram = false;
      this.showkodambakkam = true;
      this.showNetCalculation = false;
      this.showHouseSpends = false;


    }
    else {
      console.log(event)
      this.adminKodambakkam = false
      this.showCalculator = false;
      this.showTrustpuram = false;
      this.showkodambakkam = true;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }

  }
  showTrustpuramFunc(event: any) {
    if (event === "admin") {
      console.log(event)
      this.adminTrustpuram = true
      this.showCalculator = false;
      this.showTrustpuram = true;
      this.showkodambakkam = false;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }
    else {
      console.log(event)
      this.adminTrustpuram = false;
      this.showCalculator = false;
      this.showTrustpuram = true;
      this.showkodambakkam = false;
      this.showNetCalculation = false;
      this.showHouseSpends = false;
    }

  }
  showCalculatorFunc() {
    this.showCalculator = true;
    this.showTrustpuram = false;
    this.showkodambakkam = false;
    this.showNetCalculation = false;
    this.showHouseSpends = false;
  }
  adminUrl : any= this.service.adminUrl
  showAdminFunc(){
console.log(this.adminUrl)
  }



  copySelected: boolean=false
  saveEdit(){
  this.copySelected=false
    if(this.isBlackXerox){
      let rate=0
      if(this.value1==='off'){
        if(this.copy==="Single-Side"){
          rate = Math.ceil(this.blackCopies * this.singleRate)
        }
        else if(this.copy==="Front-&-Back"){
          rate =Math.ceil(this.blackCopies * this.b2bRate)
   
   
   
        }
        else{
          rate =0
        }
        this.sourceProducts.forEach((prod: any)=>{
         if(prod.name==="Black-Xerox"){
           prod.price=rate
         }
        })
      }
     else{
let rate1 = Math.ceil(this.singleCopies * this.singleRate)
let rate2 = Math.ceil(this.b2bCopies * this.b2bRate)
rate= rate1+rate2
this.sourceProducts.forEach((prod: any)=>{
  if(prod.name==="Black-Xerox"){
    prod.price=rate
  }
 })
     }
 
    }
    else if(this.isBlackPrintout){
      let rate=0
      if(this.value2==='off'){
        if(this.copy2==="Single-Side"){
          if(this.isNetCharge){
            if(this.isFreshCustomer){
              if(this.blackPrintCopies<=10){
                rate+=10
                rate +=Math.ceil(this.blackPrintCopies * 2)
              }
              else{
                rate+=10
                let copies = this.blackPrintCopies-10
                rate+=20
                rate+=Math.ceil(copies * this.singleRate)
              }
            }
            else{
            
                rate+=10
                rate +=Math.ceil(this.blackPrintCopies * this.singleRate)
              
       
            }
           
         
          }
          else{
            if(this.isFreshCustomer){
              if(this.blackPrintCopies<=10){
       
                rate +=Math.ceil(this.blackPrintCopies * 2)
              }
              else{
               
                let copies = this.blackPrintCopies-10
                rate+=20
                rate+=Math.ceil(copies * this.singleRate)
              }
            }
            else{
              rate +=Math.ceil(this.blackPrintCopies * this.singleRate)
            }
          }
   
        }
        else if(this.copy2==="Front-&-Back"){
          if(this.isNetCharge){
            if(this.isFreshCustomer){
              rate+=10
              if(this.blackPrintCopies<=10){
             
                rate +=Math.ceil(this.blackPrintCopies * 2)
              }
              else{
             
                let copies = this.blackPrintCopies-10
                rate+=20
                rate+=Math.ceil(copies * 1)
              }
            }
            else{
            
                rate+=10
                rate +=Math.ceil(this.blackPrintCopies * 1)
              
       
            }
           

          }
          else{
            if(this.isFreshCustomer){
              if(this.blackPrintCopies<=10){
       
                rate +=Math.ceil(this.blackPrintCopies * 2)
              }
              else{
               
                let copies = this.blackPrintCopies-10
                rate+=20
                rate+=Math.ceil(copies * 1)
              }
            }
            else{
              rate +=Math.ceil(this.blackPrintCopies * 1)
            }
          }
   
   
   
        }
        else{
          rate =0
        }
        this.sourceProducts.forEach((prod: any)=>{
         if(prod.name==="Black-Printout"){
           prod.price=rate
         }
        })
      }
     else{

     }
this.isNetCharge=true
this.isFreshCustomer=true
    }
    else if(this.isColourXerox){
      let rate = 0
      if(this.colourCopies===1){
        rate=15

      }
      else if(this.colourCopies>1){
        let copies =this.colourCopies-1
rate+=15
rate +=Math.ceil(copies * 10)
      }
      this.sourceProducts.forEach((prod: any)=>{
        if(prod.name==="Colour-Xerox"){
          prod.price=rate
        }
       })
    }
    else if(this.isColourPrintout){
      let rate =0
      if(this.isNetCharge){
        rate+=10

          if(this.colourPrintCopies===1){
            rate+=15
    
          }
          else if(this.colourPrintCopies>1){
            let copies =this.colourPrintCopies-1
    rate+=15
    rate +=Math.ceil(copies * 10)
          }
    

      }
      else{
        if(this.colourPrintCopies===1){
          rate+=15
  
        }
        else if(this.colourPrintCopies>1){
          let copies =this.colourPrintCopies-1
  rate+=15
  rate +=Math.ceil(copies * 10)
        }
      }


      this.sourceProducts.forEach((prod: any)=>{
        if(prod.name==="Colour-Printout"){
          prod.price=rate
        }
       })
      this.isNetCharge=true
this.isFreshCustomer=true
      
    }
    else if(this.isBinding ){
      this.sourceProducts.forEach((prod: any)=>{
        if(prod.name==="Bindings"){
          prod.price=this.bindingRate
        }
       })
    }
    else if(this.isScanning){
      let rate=0
      rate =Math.ceil(this.scanCopies * 10)
      this.sourceProducts.forEach((prod: any)=>{
        if(prod.name==="Scanning"){
          prod.price=rate
        }
       })
    }
    else if(this.isLamination){
      this.sourceProducts.forEach((prod: any)=>{
        if(prod.name==="Lamination"){
          prod.price=this.laminationRate
        }
       })
    }
    this.displayEditDialog=false



// this.totalValue=0
this.sourceProducts.forEach((source: any)=>{

  this.totalValue+= source.price
})


this.cancelCalc()














}

cancelCalc(){
  this.isBlackXerox=false
  this.isBlackPrintout  =false;
  this.isColourXerox=false;
  this.isColourPrintout =false;
  this.isBinding  =false;
  this.isScanning  =false;
  this.isLamination  =false;
  let temp =[{'name': 'Black-Xerox','price':0,'image':'blackxerox'},{
    'name': 'Black-Printout','price':0,'image':'blackxerox'
  },{'name': 'Colour-Xerox','price':0,'image':'colour'},
  {'name': 'Colour-Printout','price':0,'image':'colour'},
  {'name': 'Bindings','price':0,'image':'binding'},
  {'name': 'Lamination','price':0,'image':'lamination'},
  {'name': 'Scanning','price':0,'image':'scanning'},
]
this.sourceProducts=[]
  this.sourceProducts=temp

  
  this.displayEditDialog=false
  this.initialize()


}

initialize(){
  this.title =""
  this.copy=0
  this.copy2=0
  this.blackCopies=0
  this.singleCopies=0
  this.b2bCopies =0
  this.blackPrintCopies=0
  this.blacksinglePrint=0
  this.blackB2bPrint =0
  this.isNetCharge  =true
  this.isFreshCustomer= true
  this.colourCopies=0
  this.colourPrintCopies=0
  this.scanCopies =0
  this.bindingRate =0
  this.laminationRate=0
  // this.totalValue =0
  this.value1 = "off";
  this.value2  ="off"
this.houseValue ="cash"

}

resetAll(){
  this.totalValue=0
  this.targetProducts=[]
  this.sourceProducts.forEach((source: any)=>{
    source.price=0
  })

  this.ngOnInit()
}
editClicked(event : any){

  console.log(event)

  // (onClick)="editClicked(product.name)" 
 let item: any




item =event


  if(item==='Black-Xerox'){
    this.isBlackXerox=true
    this.isBlackPrintout  =false;
    this.isColourXerox=false;
    this.isColourPrintout =false;
    this.isBinding  =false;
    this.isScanning  =false;
    this.isLamination  =false;
    this.title="Black & White Xerox"
  }
  else if(item==='Black-Printout'){
    this.isBlackXerox=false
    this.isBlackPrintout  =true;
    this.isColourXerox=false;
    this.isColourPrintout =false;
    this.isBinding  =false;
    this.isScanning  =false;
    this.isLamination  =false;
    this.title="Black & White Printout"
  }
  else if(item==='Colour-Xerox'){
    this.isBlackXerox=false
    this.isBlackPrintout  =false;
    this.isColourXerox=true;
    this.isColourPrintout =false;
    this.isBinding  =false;
    this.isScanning  =false;
    this.isLamination  =false;
    this.title="Colour Xerox"
  }
  else if(item==='Colour-Printout'){
    this.isBlackXerox=false
    this.isBlackPrintout  =false;
    this.isColourXerox=false;
    this.isColourPrintout =true;
    this.isBinding  =false;
    this.isScanning  =false;
    this.isLamination  =false;
    this.title="Colour Printout"
  }
  else if(item==='Bindings'){
    this.isBlackXerox=false
    this.isBlackPrintout  =false;
    this.isColourXerox=false;
    this.isColourPrintout =false;
    this.isBinding  =true;
    this.isScanning  =false;
    this.isLamination  =false;
    this.title="Binding"
  }
  else if(item==='Lamination'){
    this.isBlackXerox=false
    this.isBlackPrintout  =false;
    this.isColourXerox=false;
    this.isColourPrintout =false;
    this.isBinding  =false;
    this.isScanning  =false;
    this.isLamination  =true;
    this.title="Lamination"
  }
  else if(item==='Scanning'){
    this.isBlackXerox=false
    this.isBlackPrintout  =false;
    this.isColourXerox=false;
    this.isColourPrintout =false;
    this.isBinding  =false;
    this.isScanning  =true;
    this.isLamination  =false;
    this.title="Scanning"
  }
  this.displayEditDialog=true
}
public file: File | null = null;
public text: string | null = null;
public onFileSelected(event: any): void {

  console.log(event)
  this.file = event.target.files[0];
console.log(this.file)
}

public onSubmit(): void {
  if (this.file) {

    console.log("HHGU")
    const formData = new FormData();
    formData.append('image', this.file, this.file.name);


    this.service.getText(formData).subscribe((event: any)=>{
      this.text = event.text;
      console.log(this.text)
   
    },
    error=>{
 
      console.log("NOT EDITTED")
    })





//     this.http.post<any>('http://127.0.0.1:8000/extract_text/', formData).subscribe(
//       (response) => {
//         this.text = response.text;

// console.log("HG")
        
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
  }
}

}