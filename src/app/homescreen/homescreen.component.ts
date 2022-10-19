import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopserviceService } from '../shopservice.service';
import { rentSheet } from '../kodambakkam/kdmDataModel';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
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
  constructor(private router: Router , private service : ShopserviceService) { }

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
  menubarItems: any;
  adminTrustpuram: boolean = false
  dateShow: any;
  dateStr: any='';
  ngOnInit() {


    this.totalValue=0
    this.stateOptions = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];
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
      {
        label: 'Kodambakkam',
        icon: 'pi pi-refresh', 
        command: () => {
          console.log("wdwd")
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
      }
  ];




  this.dockItems = [
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
    }
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



    // {
    //   label: 'Kodambakkam-Admin',
    //   icon: 'pi pi-slack', command: () => {
    //     this.showkodambakkamFunc('admin');
    //   }
    // },
    // {
    //   label: 'Trustpuram-Admin',
    //   icon: 'pi pi-paypal', command: () => {
    //     this.showTrustpuramFunc('admin');
    //   }
    // },


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

}

resetAll(){
  this.totalValue=0
  this.targetProducts=[]
  this.sourceProducts.forEach((source: any)=>{
    source.price=0
  })
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



}