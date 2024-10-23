export interface Reservation {
  id: string;
  name: string;
  checkInDate: Date;
  checkOutDate: Date;
  guestName: string;
  guestEmail: string;
  roomNumber: number;
}

// ng g i models/reservation
