import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FahHeaderComponent } from './fah-header/fah-header.component';
import { FahFooterComponent } from './fah-footer/fah-footer.component';
import { FilterPipe } from './filter.pipe';
import { FahProductCardComponent } from './fah-product-card/fah-product-card.component';
import { DataProviderService } from './data-provider.service';
import { ConstantsService } from './constants.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    FahHeaderComponent,
    FahFooterComponent,
    FilterPipe,
    FahProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataProviderService,
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
