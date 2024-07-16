import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '/products';

  constructor(private http: HttpClient) {}

  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      catchError(error => {
        return throwError(error); 
      })
    );
  }
  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
