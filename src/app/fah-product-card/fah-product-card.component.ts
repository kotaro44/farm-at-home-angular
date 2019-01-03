import { Component, OnInit, Input } from '@angular/core';
import { ConstantsService } from './../constants.service';

@Component({
  selector: 'app-fah-product-card',
  templateUrl: './fah-product-card.component.html',
  styleUrls: ['./fah-product-card.component.css']
})
export class FahProductCardComponent implements OnInit {
  @Input() product: object = null;
  @Input() click: any = null;

  constructor(private constants: ConstantsService) {}

  ngOnInit() {}

  goToProductDetail(productId: any) {
    this.click(productId);
  }
}
