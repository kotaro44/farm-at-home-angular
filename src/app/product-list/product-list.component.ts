import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './../data-provider.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  search: string = '';
  error: boolean = false;
  isLoading: boolean = true;
  placeholders: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  products: object[] = [];
  productId: number = 0;

  constructor(private dataProvider: DataProviderService) {}

  ngOnInit() {
    this.dataProvider.getProducts().then((products: object[]) => {
      this.isLoading = false;
      this.products = products;
    }).catch(error => {
      this.isLoading = false;
      this.error = true;
    });
  }

  openDetail(productId: any) {
    this.productId = productId;
  }

  closeModal() {
    this.productId = 0;
  }
}
