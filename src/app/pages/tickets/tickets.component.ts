import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { Ticket } from './tickets-model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  selectedTicket: any;

  tickets: [Ticket] = [{
    id: '',
    name: '',
    assigned: '',
    priority: '',
    status: '',
    submitted: ''
  }]
  ticketTotal = 0;
  constructor(private _globalService: GlobalService, private titleService: Title, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.titleService.setTitle('MyTicket | Tickets');
    this._globalService.httpGetTicket();
    console.log('tickets', this.tickets);

    this._globalService.onHttpGetTicket.subscribe(
      (ticket: any) => {
            this.tickets = [];
        for (let tic in ticket) {
          this.tickets.push({
            id: tic,
            name: ticket[tic].template.name,
            assigned: ticket[tic].assignee || 'Unassigned',
            priority: ticket[tic].priority,
            status: ticket[tic].status,
            submitted: ticket[tic].created_at
          });
        }
        this.ticketTotal = this.tickets.length;
      }
    );

    // this.router.params.subscribe(
    //   (params: Params) => {
    //     const id = params.id;

    //     const selected = this.tickets.filter(
    //       (ticket) => {
    //         return +ticket.id === +id;
    //       }
    //     );
    //     if (selected.length > 0) {
    //       this.selectedTicket = selected[0];
    //       console.log('selected ticket', this.selectedTicket);
    //       // this._globalService.subjectName.next(this.selectedProduct.name);
    //     }
    //   }
    // )

  }
  OnClick(id: any): void {
    this._globalService.selectedTicket.next(id);
    console.log('ID', id)
  }
}
