import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Comedian } from './models';
import { DataService } from './services';

@Component({
  selector: 'comedian-list',
  templateUrl: 'app/comedian-list.component.html',
  providers: [DataService]
})
export class ComedianListComponent implements OnInit {
  comedians: Comedian[];

  constructor(private dataService: DataService) { }

  filterComedians(filterText: string) {
    let lowerFilterText = filterText.toLowerCase();

    this.comedians =
      this.dataService.getComeidans()
        .filter(c => c.fullName.toLowerCase().includes(lowerFilterText));
  }

  ngOnInit() {
    this.comedians = this.dataService.getComeidans();
  }
}
