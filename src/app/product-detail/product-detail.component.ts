import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProviderService } from './../data-provider.service';
import { ConstantsService } from './../constants.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() inModal: boolean = false;
  @Input() productId: number = 0;
  loaderSrc: string = 'assets/images/a.gif';
  copied: boolean = false;
  error: boolean = false;
  isLoading: boolean = true;
  product: object = null;

  constructor(private dataProvider: DataProviderService, private route: ActivatedRoute, private constants: ConstantsService) {}

  ngOnInit() {
    if (this.inModal) {
      this.loaderSrc = 'assets/images/a2.gif';
    }

    if (!this.productId) {
      this.productId = parseInt(this.route.snapshot.paramMap.get('productId'));
    }

    this.dataProvider.getProduct(this.productId).then(product => {
      this.isLoading = false;
      this.product = product;
    }).catch(error => {
      this.isLoading = false;
      this.error = true;
    });
  }

  copy2clipboard() {
    var temp = document.createElement('textarea');

    temp.value = window.location.origin + '/#/list/' + this.productId;
    temp.setAttribute('readonly', '');
    temp.style.position = 'absolute';
    temp.style.left = '-9999px';
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    this.copied = true;
  }
}
