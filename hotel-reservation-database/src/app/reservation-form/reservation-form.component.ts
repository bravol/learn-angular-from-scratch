import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ServationService } from "../reservation/servation.service";
import { Reservation } from "../models/reservation";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reservation-form",
  templateUrl: "./reservation-form.component.html",
  styleUrl: "./reservation-form.component.css",
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ServationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ["", Validators.required],
      checkOutDate: ["", Validators.required],
      guestName: ["", Validators.required],
      guestEmail: ["", [Validators.required, Validators.email]],
      roomNumber: ["", Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.reservationService.getReservation(id).subscribe((reservation) => {
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        } else {
          this.router.navigate(["/list"]);
        }
      });
    }
  }
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get("id");
      if (id) {
        // update
        reservation.id = id;
        this.reservationService.updateReservation(reservation.id, reservation);
      } else {
        // add new
        this.reservationService.addReservation(reservation);
      }
      this.router.navigate(["/list"]);
    }
  }
}
