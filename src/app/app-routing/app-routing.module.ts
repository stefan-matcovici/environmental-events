import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { EventsComponent }      from '../events-list/events-list.component';
import { EventDetailComponent }  from '../event-detail/event-detail.component';
import { EventEditComponent }  from '../event-edit/event-edit.component';
import { ProxyComponent }  from '../proxy/proxy.component';

const routes: Routes = [
  { path: ':id', component: ProxyComponent },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:type/:id', component: EventDetailComponent },
  { path: 'events',     component: EventsComponent },
  { path: 'edit/:type/:id',     component: EventEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

