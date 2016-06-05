import { Component } from '@angular/core';
import { Comedian } from './models';
import { DataService } from './services';
import {FullNameFilter} from './pipes';

@Component({
  selector: 'comedian-list',
  templateUrl: 'app/comedian-list.component.html',
  providers: [DataService],
  pipes: [FullNameFilter]
})
export class ComedianListComponent {
  comedians: Comedian[];
  searchText: string = "";
  constructor(private dataService: DataService) { 
    this.comedians = this.dataService.getComeidans();
  }
}
