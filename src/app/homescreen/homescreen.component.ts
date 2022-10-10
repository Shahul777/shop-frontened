import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
showkodambakkam : boolean=false;
showTrustpuram : boolean=false;
showCalculator: boolean =false;
showAdmin: boolean =false;
showNetCalculation : boolean =false;
showHouseSpends : boolean =false;



  // subscription: Subscription;
  // private galleriaService: PhotoService, private nodeService: NodeService, private messageService: MessageService, private terminalService: TerminalService
  constructor(private router : Router) { }

  items: any;
  trustpuramSaved(){
this.adminTrustpuram=false;
    this.showTrustpuram=false;
    this.ngOnInit();
  }
kodambakkamSaved(){
  this.showkodambakkam=false;
  this.adminKodambakkam=false
  this.ngOnInit();
}
adminTrustpuram : boolean =false
ngOnInit() {
this.showCalculator=true
this.adminKodambakkam=false
this.adminTrustpuram =false
    this.items = [
        {
            label: 'Kodambakkam',
            icon: 'pi pi-refresh', command: () => {
              this.showkodambakkamFunc('admin');
        }},
        {
            label: 'Trustpuram',
            icon: 'pi pi-times', command: () => {
              this.showTrustpuramFunc('admin');
        }},
        {
            label: 'Net-Calculation',
            icon: 'pi pi-external-link'
            , command: () => {
              this.netcalculateFunc();
        }},
        {
            label: 'House-Spends',
            icon: 'pi pi-upload', command: () => {
              this.housespendsFunc();
        }},
    ];
}
adminfunc(event : any){
console.log(event)
}
netcalculateFunc(){
  this.showCalculator=false;
  this.showTrustpuram=false;
  this.showkodambakkam=false;
  this.showNetCalculation=true;
  this.showHouseSpends=false;
}
housespendsFunc(){
  this.showCalculator=false;
  this.showTrustpuram=false;
  this.showkodambakkam=false;
  this.showNetCalculation=false;
  this.showHouseSpends=true;
}
adminKodambakkam: boolean =false;

showkodambakkamFunc(event: any){
  if(event==="admin"){
    console.log(event)
    this.adminKodambakkam=true
    this.showCalculator=false;
    this.showTrustpuram=false;
    this.showkodambakkam=true;
    this.showNetCalculation=false;
    this.showHouseSpends=false;


  }
  else{
    console.log(event)
    this.adminKodambakkam=false
    this.showCalculator=false;
    this.showTrustpuram=false;
    this.showkodambakkam=true;
    this.showNetCalculation=false;
    this.showHouseSpends=false;
  }

}
showTrustpuramFunc(event: any){
  if(event ==="admin"){
    console.log(event)
    this.adminTrustpuram=true
    this.showCalculator=false;
    this.showTrustpuram=true;
    this.showkodambakkam=false;
    this.showNetCalculation=false;
  this.showHouseSpends=false;
  }
  else{
    console.log(event)
    this.adminTrustpuram=false;
    this.showCalculator=false;
    this.showTrustpuram=true;
    this.showkodambakkam=false;
    this.showNetCalculation=false;
  this.showHouseSpends=false;
  }

}
showCalculatorFunc(){
  this.showCalculator=true;
this.showTrustpuram=false;
this.showkodambakkam=false;
this.showNetCalculation=false;
this.showHouseSpends=false;
}
}


