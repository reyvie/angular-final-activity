import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { MygroupsComponent } from './pages/mygroups/mygroups.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketviewComponent } from './pages/ticketview/ticketview.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { TwoColumnComponent } from './two-column/two-column.component';

const token = localStorage.getItem('token') || '';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', component: TwoColumnComponent, children: [
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'tickets', component: TicketsComponent},
    {path: 'my-profile', component: MyprofileComponent},
    {path: 'tickets/:id/view', component: TicketviewComponent}
  ]},
  {path: 'my-profile', component: MyprofileComponent},
  {path: 'my-groups', component: MygroupsComponent},
  {path: 'about-us', component: AboutusComponent },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
