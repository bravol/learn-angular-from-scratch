import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  // getting information from a parent
  products = input.required<Product[]>();

  filteredProducts = computed(() => {
    return this.products().filter((product) => product.name.includes('Milk'));
  });
}
