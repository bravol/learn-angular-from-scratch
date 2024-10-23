import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ServationService {
  private reservations: Reservation[] = [];

  constructor() {
    let storedReservations = localStorage.getItem('reservations');
    this.reservations = storedReservations
      ? JSON.parse(storedReservations)
      : [];
  }
  // CRUD

  // get all reservations
  getReservations(): Reservation[] {
    return this.reservations;
  }

  // get single reservation
  getReservation(id: string): Reservation | undefined {
    return this.reservations.find((reservation) => reservation.id === id);
  }

  // add reservation
  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // update reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  // delete reservation
  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    if (index !== -1) {
      this.reservations.splice(index, 1);
    }

    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
