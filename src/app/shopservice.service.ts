import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { kdmAccounts } from './kodambakkam/kdmDataModel';
@Injectable({
  providedIn: 'root'
})
export class ShopserviceService {
   //readonly APIUrl ="http://127.0.0.1:8000";
  // readonly adminUrl ="http://127.0.0.1:8000/admin/"





   readonly APIUrl ="https://shopbackened.up.railway.app";
   readonly adminUrl = "https://shopbackened.up.railway.app/admin/"

  readonly imageText ="http://127.0.0.1:8000/extract_text/"
 
  constructor(private http : HttpClient) { }

getText(formdata : any):Observable<any[]>{
  return this.http.post<any[]>(this.imageText , formdata)
}
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
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/accounts/' +id + '/' , accounts)
}
deleteKdmAccountsById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/accounts/' + id + '/')
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
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/labours/' + id + '/', accounts)
}
deleteKdmLabourById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/labours/' + id + '/')
}


getKdmMonth():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/kdmMonth/')
}
getKdmMonthById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/kdmMonth/' + id)
}
addKdmMonth(accounts: any):Observable<any[]>{
  return this.http.post<any[]>(this.APIUrl + '/kodambakkam/kdmMonth/', accounts)
}
editKdmMonthById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/kdmMonth/' + id + '/', accounts)
}
deleteKdmMonthById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/kdmMonth/' + id + '/')
}


getCombinedMonth():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/combinedEntry/')
}
getCombinedMonthById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/combinedEntry/' + id)
}
addCombinedMonth(accounts: any):Observable<any[]>{
  return this.http.post<any[]>(this.APIUrl + '/kodambakkam/combinedEntry/', accounts)
}
editCombinedMonthById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/kodambakkam/combinedEntry/' + id + '/', accounts)
}
deleteCombinedMonthById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/kodambakkam/combinedEntry/' + id + '/')
}



getTpmMonth():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/tpmMonth/')
}
getTpmMonthById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/tpmMonth/' + id)
}
addTpmMonth(accounts: any):Observable<any[]>{
  return this.http.post<any[]>(this.APIUrl + '/trustpuram/tpmMonth/', accounts)
}
editTpmMonthById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/trustpuram/tpmMonth/' + id + '/', accounts)
}
deleteTpmMonthById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/trustpuram/tpmMonth/' + id + '/')
}









getTpmAccounts():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/accounts2/')
}
getTpmAccountsById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/trustpuram/accounts2/' + id)
}

addTpmAcccounts(accounts: any):Observable<any[]>{
return this.http.post<any[]>(this.APIUrl + '/trustpuram/accounts2/', accounts)
}
editTpmAccountsById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/trustpuram/accounts2/' + id + '/', accounts)
}
deleteTpmAccountsById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/trustpuram/accounts2/' + id + '/')
}
getTpmLabours():Observable<any[]>{
return this.http.get<any[]>(this.APIUrl + '/trustpuram/labours2/')
}
getTpmLaboursById(id : any):Observable<any[]>{
return this.http.get<any[]>(this.APIUrl + '/trustpuram/labours2/' + id)
}
addTpmLabours(accounts: any):Observable<any[]>{
return this.http.post<any[]>(this.APIUrl + '/trustpuram/labours2/', accounts)
}
editTpmLaboursById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/trustpuram/labours2/' + id + '/', accounts)
}
deleteTpmLabourById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/trustpuram/labours2/' + id + '/')
}

getRateSheet():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/kodambakkam/rate/')
}





getHouseAccounts():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/house/accounts3/')
}
getHouseAccountsById(id : any):Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/house/accounts3/' + id)
}

addHouseAccounts(accounts: any):Observable<any[]>{
return this.http.post<any[]>(this.APIUrl + '/house/accounts3/', accounts)
}
editHouseAccountsById(accounts: any, id: any):Observable<any[]>{
  return this.http.put<any[]>(this.APIUrl + '/house/accounts3/' + id + '/', accounts)
}
deleteHouseAccountsById(id: any):Observable<any[]>{
  return this.http.delete<any[]>(this.APIUrl + '/house/accounts3/' + id + '/')
}


getHouseRateSheet():Observable<any[]>{
  return this.http.get<any[]>(this.APIUrl + '/house/rate3/')
}













}
