import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-copy-money',
  templateUrl: './copy-money.component.html',
  styleUrls: ['./copy-money.component.css']
})
export class CopyMoneyComponent implements OnInit {
items: any[]=[]
storageCopy : any[]=[]
storageMoney: any[]=[]
copies : any;
money : any;
copyList : any[]=[]
moneyList: any[]=[]
counter: number=0
@Output() saveClicked = new EventEmitter();
@Input() isItemDetail : any= "0"
  constructor() { }

  ngOnInit(): void {
    this.items=[]
    this.storageCopy=[]
    this.storageMoney=[]
    this.items.push(0)
    this.storageCopy.push(0)
    this.storageMoney.push(0)

  }
addClicked(){
  this.copyList.push({copies: this.storageCopy[this.counter], money : this.storageMoney[this.counter]})
this.storageCopy.push(0)
this.storageMoney.push(0)
console.log(this.storageCopy, this.storageMoney)
  // this.copyList.push(this.copies)
  // this.copies=''
  // this.moneyList.push(this.moneyList)
  // this.money=''
  this.items.push(0)
  this.counter+=1


}
saveFuncClicked(){

this.copyList.push({copies: this.storageCopy[this.counter], money : this.storageMoney[this.counter]})

  let event ={copyMoneyList : this.copyList}
this.saveClicked.emit(event)
}
}
