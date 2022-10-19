import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { rentSheet } from '../kodambakkam/kdmDataModel';
import { ShopserviceService } from '../shopservice.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
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




  constructor(private service : ShopserviceService) { }
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






  }







  calculateTotal(){

  }
  listItems:any;
  editClicked(event : any){

    console.log(event)

    // (onClick)="editClicked(product.name)" 
   let item: any

   this.listItems=event.items[0]

   console.log(this.listItems)
  item =event.items[0].name
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
  selectToTarget(event : any){
    if(this.targetProducts.length){
      this.targetProducts== JSON.parse(JSON.stringify(this.targetProducts)) as typeof this.targetProducts;
      let movedModel = event.items[0].name
      
      let changes =JSON.parse(JSON.stringify(event.items[0])) as typeof event.items[0];
      
changes.price=0
          this.sourceProducts.push(changes)

let check : boolean =false
let index : any
      this.targetProducts.forEach((model: any)=>{
    if(model.price===0){
       index = this.targetProducts.indexOf(model, 0);
      check=true

    }
      })
      if(check){
        if (index > -1) {
          this.targetProducts.splice(index, 1);
       }
      }
    }
    if(this.targetProducts.length){

      let total=0
      this.targetProducts.forEach((prod: any)=>{
        if(prod.price!==0){
          total+=prod.price
        }
      })
      this.totalValue=total


    }

  }
  resetAll(){
    this.totalValue=0
    this.targetProducts=[]
    this.sourceProducts.forEach((source: any)=>{
      source.price=0
    })
  }
  targetToSource(event:any){
    
    if(this.sourceProducts.length){
      let counter : any =0
      let check : boolean =false;
      let movedModel = event.items[0].name
      this.sourceProducts.forEach((model: any)=>{
        if(model.name===movedModel){
          counter+=1
        }
      })
      if(counter>1){
        for(let i =1 ; i< counter; i++){
          let check : boolean =false
let index : any
          this.sourceProducts.forEach((model : any)=>{
            if(model.name===movedModel){
              index = this.sourceProducts.indexOf(model, 0);
             check=true
       
           }
          })
          if(check){
            if (index > -1) {
              this.sourceProducts.splice(index, 1);
           }
          }
        }

      }

      this.sourceProducts.forEach((model: any)=>{
        if(model.name===movedModel){
          if(model.price!==0){
            model.price=0
          }
        }
      })
      
    }
    if(this.targetProducts.length){

      let total=0
      this.targetProducts.forEach((prod: any)=>{
        if(prod.price!==0){
          total+=prod.price
        }
      })
      this.totalValue=total


    }
    else{
      this.totalValue=0
    }
  }
}
