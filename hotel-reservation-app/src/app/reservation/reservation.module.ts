import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReservationFormComponent, ReservationListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class ReservationModule {}

//  ng g module reservation
//  ng g c reservation_list --module=reservation
// ng g s reservation/servation
