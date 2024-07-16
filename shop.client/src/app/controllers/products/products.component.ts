import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductService } from '../../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = { id: '', code: '', name: '', price: 0 };
  errorMessage: string | null = null; // Zmienna do przechowywania błędów

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error loading products', error);
      }
    );
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (product: Product) => {
        this.products.push(product);
        this.resetForm();
      },
      (error) => {
        this.errorMessage = this.extractErrorMessage(error);
        console.error('Error adding product', error);
      }
    );
  }

  resetForm(): void {
    this.newProduct = { id: '', code: '', name: '', price: 0 };
    this.errorMessage = null; // Resetuj komunikat o błędzie
  }

  extractErrorMessage(error: any): string {
    if (error.error && typeof error.error === 'object') {
      return Object.values(error.error).flat().join(', '); // Spłaszcz i połącz błędy
    }
    return 'An unknown error occurred.'; // Ogólny komunikat o błędzie
  }
}
