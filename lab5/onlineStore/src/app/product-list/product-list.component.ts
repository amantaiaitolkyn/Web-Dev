import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core'
import {products } from '../products';
import {categories} from '../categories';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  @Input() categoryy = '';
  products = products;
  ngOnInit(): void {
  }
  removeItem(idd:number){
    this.products = this.products.filter((x) => x.id !== idd);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/