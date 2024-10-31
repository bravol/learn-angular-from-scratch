import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css',
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((data) => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.price;
    }
    return totalPrice;
  }

  clearCart(): void {
    this.cartService.clearCartItems().subscribe(() => {
      this.cartItems = [];
      this.totalPrice = 0;
    });
  }

  removeFromCart(productId: number): void {
    const itemToRemove = this.cartItems.find((item) => item.id === productId);
    if (itemToRemove) {
      this.cartItems = this.cartItems.filter((item) => item.id !== productId);
      this.totalPrice -= itemToRemove.price;
    }
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe(() => {});
  }
}
