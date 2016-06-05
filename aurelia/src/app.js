import { inject } from 'aurelia-framework';

import { DataService } from './services';

@inject(DataService)
export class App {
  constructor(dataService) {
    this.dataService = dataService;
  }

  filterComedian(filterText) {
    let lowerFilterText = filterText.toLowerCase();
    this.comedians = this.dataService.getComedians()
      .filter(c => c.fullName.toLowerCase().includes(lowerFilterText));
  }

  activate() {
    this.comedians = this.dataService.getComedians();
  }
}
