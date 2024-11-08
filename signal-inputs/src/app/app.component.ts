import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './products';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'signal-inputs';

  allProducts: Product[] = [
    { id: 1, name: 'Milk', price: 2.25 },
    { id: 2, name: 'Bread', price: 4.05 },
    { id: 3, name: 'Chappati', price: 3.25 },
  ];
}
