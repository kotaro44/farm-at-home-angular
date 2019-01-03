import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Products {
  products: object[];
}

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  host: string = window.location.origin.replace(/:\d+/, '') + ':3000/';

  constructor(private http: HttpClient) {}

  parseData(data: any) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        item.image = this.host + 'icons/' + item.productId;
      });
    }
    else {
      data.image = this.host + 'images/' + data.productId;
    }

    return data;
  }

  getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(this.host + 'list').subscribe(
        (data: Products) => {
          resolve(this.parseData(data.products))
        },
        error => reject(error)
      );
    });
  }

  getProduct(id: any) {
    return new Promise((resolve, reject) => {
      this.http.get(this.host + 'product/' + id).subscribe(
        (data: Products) => {
          resolve(this.parseData(data))
        },
        error => reject(error)
      );
    });
  }
}
