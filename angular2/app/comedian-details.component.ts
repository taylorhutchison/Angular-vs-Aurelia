import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './services';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute }  from '@angular/router';

import { Comedian } from './models';

@Component({
    selector: 'comedian-details',
    templateUrl: 'app/comedian-details.html',
    providers: [DataService],
    directives: [ROUTER_DIRECTIVES]
})
export class ComedianDetailsComponent implements OnInit, OnDestroy{
    comedian: Comedian;
    id: number;

    private routeObserver: any;

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router){}

    ngOnInit() {
        this.routeObserver= this.route
        .params
        .subscribe(params => {
            this.id = parseInt(params['id']);
            this.dataService.getComedianById(this.id)
            .then(comedian => this.comedian = comedian);
        });        
    }

    ngOnDestroy(){
        if (this.routeObserver) {
            this.routeObserver.unsubscribe();
        }
    }
}