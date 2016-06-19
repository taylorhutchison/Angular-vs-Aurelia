import { provideRouter, RouterConfig } from '@angular/router';
import {ComedianListComponent} from './comedian-list.component';
import {ComedianDetailsComponent} from './comedian-details.component';

export const routes: RouterConfig = [
    {
        path: '',
        component: ComedianListComponent,
    },
    {
        path: 'details/:id',
        component: ComedianDetailsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];