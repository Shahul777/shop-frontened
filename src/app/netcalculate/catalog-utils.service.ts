import { Injectable } from '@angular/core';
import { FilterService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class CatalogUtilsService {
  constructor(private filterService: FilterService) {}

  public filterEntities(
    filterData: any,
    originalList: any,
    filterParams: any
  ): any {
    let tempFilterArray;
    if (filterData) {
      // console.log(originalList);
      // console.log(filterParams);
      // console.log(filterData);
      tempFilterArray = this.filterService.filter(
        originalList,
        filterParams,
        filterData,
        'contains'
      );
    } else {
      tempFilterArray = originalList;
    }
    return tempFilterArray;
  }
}
