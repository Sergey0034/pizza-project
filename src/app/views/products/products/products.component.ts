import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductType[] = [];
  private subscriptionProducts: Subscription | null = null;


  constructor(private productServices: ProductService, private http: HttpClient, private router: Router) {
  }

  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productServices.getProducts();

    this.loading = true;
    this.subscriptionProducts = this.productServices.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next')
        },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
      })
  }

  ngOnDestroy() {
    this.subscriptionProducts?.unsubscribe();
  }
}
