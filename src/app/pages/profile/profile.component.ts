import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalService } from 'src/app/services/global.service';
import { Profile } from '../myprofile/profile-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isLogged = true;
  profile: Profile = {
    email: '',
    first_name: '',
    last_name: '',
    alias: '',
    password: '',
    mobile_number: '',
    job_title: '',
    photo_url: ''
  }

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.httpGetProfile();
    this.globalService.onHttpGetProfile.subscribe(
      (profile: any) => {
        console.log('this is from my profile ts', profile);
        this.profile.first_name = profile.meta.first_name,
        this.profile.email = profile.email,
        this.profile.last_name = profile.meta.last_name,
        this.profile.alias = profile.alias,
        this.profile.mobile_number = profile.meta.mobile_number,
        this.profile.job_title = profile.meta.job_title,
        this.profile.photo_url = profile.meta.photo_url
      }
    );
    this.globalService.checkLogStatus();

    if (this.globalService.getToken() != '') {
      this.isLogged = true
    } else {
      this.isLogged = false
    }
    // this.globalService.isLogged.subscribe(
    //   (logged: any) => {
    //     console.log('isLogged', logged);
    //     this.isLogged = logged
    //   }
    // );
  }

}
