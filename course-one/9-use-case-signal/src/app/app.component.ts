import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'use-case-signal';

  // a signal can be used to represent a use case
  products = signal([
    { id: 1, name: 'Milk', price: 2.25 },
    { id: 2, name: 'Bread', price: 4.05 },
    { id: 3, name: 'Chappati', price: 3.25 },
  ]);

  filterName = signal('');
  // computed signal which depends on other signal
  filteredProducts = computed(() => {
    return this.products().filter((product) =>
      product.name.toLowerCase().includes(this.filterName().toLowerCase())
    );
  });

  // update input
  changeFilter(event: Event) {
    let newFilterName = (event.target as HTMLInputElement).value;
    this.filterName.set(newFilterName);
  }
}

// angular signals are so wow
