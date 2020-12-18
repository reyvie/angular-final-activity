import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  alias = ''

  constructor(private globalService: GlobalService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('MyTicket | Home');

    this.globalService.httpGetProfile();
    this.globalService.onHttpGetProfile.subscribe(
      (profile: any) => {
        this.alias = profile.alias
      }
    );
  }

}
