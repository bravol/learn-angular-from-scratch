import { Component, OnInit } from '@angular/core';
import { ServationService } from '../reservation/servation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css',
})
export class ReservationListComponent implements OnInit {
  constructor(private reservationService: ServationService) {}

  reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
