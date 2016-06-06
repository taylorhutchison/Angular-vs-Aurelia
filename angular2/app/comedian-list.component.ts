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
  comedians: Comedian[] = [];
  constructor(private dataService: DataService) { }

  filterComedians(filterText: string) {
    this.comedians = [];
    let lowerFilterText = filterText.toLowerCase();
    this.dataService.getComedians().subscribe(
      comedian => {
        if(comedian.fullName.toLowerCase().includes(lowerFilterText)){
          this.comedians.push(comedian);
        }
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.dataService.getComedians().subscribe(
      comedians => {
         this.comedians.push(comedians);
      },
      error => console.log(error)
    )
  }
}
