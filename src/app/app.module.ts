import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { MygroupsComponent } from './pages/mygroups/mygroups.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TwoColumnComponent } from './two-column/two-column.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContentComponent } from './content/content.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { TicketviewComponent } from './pages/ticketview/ticketview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyprofileComponent,
    NavComponent,
    NotFoundComponent,
    MygroupsComponent,
    FooterComponent,
    AboutusComponent,
    TwoColumnComponent,
    TicketsComponent,
    ProfileComponent,
    ContentComponent,
    WelcomeComponent,
    LoginComponent,
    TicketviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
