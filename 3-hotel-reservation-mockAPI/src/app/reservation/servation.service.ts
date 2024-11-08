import { Injectable } from "@angular/core";
import { Reservation } from "../models/reservation";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ServationService {
  private apiUrl = "http://localhost:3001";
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  // CRUD

  // get all reservations
  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl + "/reservations");
  }

  // get single reservation
  getReservation(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.apiUrl + "/reservation/" + id);
  }

  // add reservation
  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.apiUrl + "/reservation", reservation);
  }

  // update reservation
  updateReservation(id: string, updatedR: Reservation): Observable<void> {
    return this.http.put<void>(this.apiUrl + "/reservation/" + id, updatedR);
  }

  // delete reservation
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + "/reservation/" + id);
  }
}
