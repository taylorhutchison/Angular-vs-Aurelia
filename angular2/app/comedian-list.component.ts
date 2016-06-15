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
  private allComedians: Comedian[];

  constructor(private dataService: DataService) { }

  filterComedians(filterText: string) {
    let lowerFilterText = filterText.toLowerCase();

    this.comedians =
      this.allComedians
        .filter(c => c.fullName.toLowerCase().includes(lowerFilterText));
  }

  ngOnInit() {
    this.dataService.getComeidans().then(c => {
      this.allComedians = c;
      this.comedians = this.allComedians;
    });
  }
}
