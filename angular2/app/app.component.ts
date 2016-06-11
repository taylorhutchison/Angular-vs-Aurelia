import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ComedianListComponent } from './comedian-list.component';
import { ComedianDetailsComponent } from './comedian-details.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS],
    template: '<router-outlet></router-outlet>',
})
@RouteConfig([
    {
        path: '/',
        name: 'ComedianList',
        component: ComedianListComponent,
        useAsDefault: true
    },
    {
        path: '/details/:id',
        name: 'CommedianDetail',
        component: ComedianDetailsComponent
    }
])
export class AppComponent {}