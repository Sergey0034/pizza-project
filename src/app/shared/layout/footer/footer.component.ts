import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(public cartService: CartService) {

  }
}
