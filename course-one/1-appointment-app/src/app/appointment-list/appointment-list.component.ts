import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core'; //life cycle hook

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    console.log('got loaded'); // this is called on initialization of an app
    let savedAppointements = localStorage.getItem('appointments');
    this.appointments = savedAppointements
      ? JSON.parse(savedAppointements)
      : [];
  }
  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
      };
      this.appointments.push(newAppointment);
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      // store in local storage
      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  deleteAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter(
      (a) => a.id !== appointment.id
    );
    localStorage.setItem('appointments', JSON.stringify(this.appointments));

    // or
    // this.appointments.splice(this.appointments.indexOf(appointment));
    // this.appointments.splice(index,1)
  }
}
