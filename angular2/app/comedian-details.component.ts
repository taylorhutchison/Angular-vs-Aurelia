import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DataService } from './services';
import { RouteParams } from '@angular/router-deprecated';

import { Comedian } from './models';

@Component({
    selector: 'comedian-details',
    templateUrl: 'app/comedian-details.html',
    providers: [DataService]
})
export class ComedianDetailsComponent implements OnInit {
    comedian: Comedian;

    constructor(
        private dataService: DataService,
        private routeParams: RouteParams) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.dataService.getComedianById(id)
            .then(comedian => this.comedian = comedian);
    }
}