import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'computed-signal';
  // a computed signal depends on other signals

  price = 19;
  quantity = signal(10);
  // total price signal
  totalprice = computed(() => this.price * this.quantity());
  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
}
