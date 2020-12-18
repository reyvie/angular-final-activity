import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Ticket } from '../tickets/tickets-model';

@Component({
  selector: 'app-ticketview',
  templateUrl: './ticketview.component.html',
  styleUrls: ['./ticketview.component.css']
})
export class TicketviewComponent implements OnInit {


  tickets: Ticket = [{
    id: '',
    name: '',
    assigned: '',
    priority: '',
    status: '',
    submitted: ''
  }];

  constructor(private router: ActivatedRoute, private _globalService: GlobalService) {
    console.log(this.router.snapshot.params.id)
  }

  ngOnInit(): void {
    this._globalService.httpGetTicket();

    this._globalService.selectedTicket.subscribe(
      (ticket: any) => {
          console.log('selected ticket', ticket.name);
          // this.name = ticket.name;
      }
    )

    this._globalService.onHttpGetTicket.subscribe(
      (ticket: any) => {
        const id = this.router.snapshot.params.id
        this.tickets.id = id,
        this.tickets.name = ticket[id].template.name,
        this.tickets.assigned = ticket[id].assignee || 'Unassigned',
        this.tickets.priority = ticket[id].priority,
        this.tickets.status = ticket[id].status,
        this.tickets.submitted = ticket[id].created_at

        console.log('TICKETTT', ticket);
        // id: tic,
        // name: ticket[tic].template.name,
        // assigned: ticket[tic].assignee || 'Unassigned',
        // priority: ticket[tic].priority,
        // status: ticket[tic].status
      }
    );



  }

}
