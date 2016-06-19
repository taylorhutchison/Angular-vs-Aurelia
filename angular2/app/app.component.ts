import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ComedianListComponent } from './comedian-list.component';
import { ComedianDetailsComponent } from './comedian-details.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>',
})
export class AppComponent {}