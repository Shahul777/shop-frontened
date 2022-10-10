import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { kdmAccounts } from './kodambakkam/kdmDataModel';
@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {
  // readonly APIUrl ="http://127.0.0.1:8000";
  // readonly adminUrl ="http://127.0.0.1:8000/admin/"
  readonly APIUrl ="https://shop-backened.herokuapp.com";
  readonly adminUrl ="https://shop-backened.herokuapp.com/admin/"

  constructor(private http : HttpClient) { }


  getKdmAccounts():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/kodambakkam/accounts/')
  }
  getKdmAccountsById(id : any):Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/kodambakkam/accounts/' + id)
  }

addKdmAcccounts(accounts: kdmAccounts):Observable<any[]>{
  return this.http.post<any[]>(this.APIUrl + '/kodambakkam/accounts/', accounts)
}
editKdmAccountsById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/accounts/' +id, accounts)
}
deleteKdmAccountsById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/accounts/' +id)
}
getKdmLabours():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/labours/')
}
getKdmLaboursById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/labours/' + id)
}
addKdmLabours(accounts: any):Observable<any[]>{
  return this.http.post<any[]>(this.APIUrl + '/kodambakkam/labours/', accounts)
}
editKdmLaboursById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/labours/' +id, accounts)
}
deleteKdmLabourById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/labours/' +id)
}

getTpmAccounts():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/accounts/')
}
getTpmAccountsById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/accounts/' + id)
}

addTpmAcccounts(accounts: any):Observable<any[]>{
return this.http.post<any[]>(this.APIUrl + '/trustpuram/accounts/', accounts)
}
editTpmAccountsById(accounts: any, id: any):Observable<any[]>{
return this.http.put<any[]>(this.APIUrl + '/trustpuram/accounts/' +id, accounts)
}
deleteTpmAccountsById(id: any):Observable<any[]>{
return this.http.delete<any[]>(this.APIUrl + '/trustpuram/accounts/' +id)
}
getTpmLabours():Observable<any[]>{
return this.http.get<any[]>(this.APIUrl + '/trustpuram/labours/')
}
getTpmLaboursById(id : any):Observable<any[]>{
return this.http.get<any[]>(this.APIUrl + '/trustpuram/labours/' + id)
}
addTpmLabours(accounts: any):Observable<any[]>{
return this.http.post<any[]>(this.APIUrl + '/trustpuram/labours/', accounts)
}
editTpmLaboursById(accounts: any, id: any):Observable<any[]>{
return this.http.put<any[]>(this.APIUrl + '/trustpuram/labours/' +id, accounts)
}
deleteTpmLabourById(id: any):Observable<any[]>{
return this.http.delete<any[]>(this.APIUrl + '/trustpuram/labours/' +id)
}

getRateSheet():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/rate/')
}
}
