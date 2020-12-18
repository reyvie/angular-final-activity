import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLogged: any;
  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.isLogged.subscribe(
      (logged: any) => {
        console.log('isLogged', logged);
        this.isLogged = logged
      }
    );
    //console.log('old value:', this.logins)
    this.globalService.checkLogStatus();
  }

}
