import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ServationService {
  private reservations: Reservation[] = [];
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
    this.reservations.push(reservation);
  }

  // update reservation
  updateReservation(id: string, updatedReservation: Reservation): void {
    const index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    if (index !== -1) {
      this.reservations[index] = updatedReservation;
    }
  }

  // delete reservation
  deleteReservation(id: string): void {
    const index = this.reservations.findIndex(
      (reservation) => reservation.id === id
    );
    if (index !== -1) {
      this.reservations.splice(index, 1);
    }
  }
}