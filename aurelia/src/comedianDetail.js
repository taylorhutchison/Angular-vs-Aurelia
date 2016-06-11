import { inject } from 'aurelia-framework';

import { DataService } from './services';

@inject(DataService)
export class Comedians {
  constructor(dataService) {
    this.dataService = dataService;
  }

  activate(params) {
    this.comedian = this.dataService.getComedian(params.id);
  }
}